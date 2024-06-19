const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utils/db");

const socket = require("socket.io");
const http = require("http");
const server = http.createServer(app);

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

var allCustomer = [];
var allSeller = [];

const addUser = (customerId, socketId, userInfo) => {
  const checkUser = allCustomer.some((u) => u.customerId === customerId);
  if (!checkUser) {
    allCustomer.push({
      customerId,
      socketId,
      userInfo,
    });
  }
};

const addSeller = (sellerId, socketId, userInfo) => {
  const checkSeller = allSeller.some((u) => u.sellerId === sellerId);
  if (!checkSeller) {
    allSeller.push({
      sellerId,
      socketId,
      userInfo,
    });
  }
};

io.on("connection", (soc) => {
  console.log("socket server running...");
  soc.on("add_user", (customerId, userInfo) => {
    addUser(customerId, soc.id, userInfo);
  });
  soc.on("add_seller", (sellerId, userInfo) => {
    addSeller(sellerId, soc.id, userInfo);
  });
});

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/home", require("./routes/home/homeRoutes"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.use("/api", require("./routes/dashboard/productRoutes"));
app.use("/api", require("./routes/dashboard/sellerRoutes"));
app.use("/api", require("./routes/home/customerAuthRoutes"));
app.use("/api", require("./routes/home/cartRoutes"));
app.use("/api", require("./routes/order/orderRoutes"));
app.use("/api", require("./routes/chatRoutes"));

const port = process.env.PORT;
dbConnect();
server.listen(port, () => console.log(`Server is running on port ${port}`));
