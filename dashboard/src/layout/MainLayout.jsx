import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { socket } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAdminMessage,
  updateCustomer,
  updateSellers,
} from "../store/Reducers/chatReducer";
import toast from "react-hot-toast";

const MainLayout = () => {
  const { pathname } = useLocation();
  const [recMsg, setRecMsg] = useState("");
  const dispatch = useDispatch();

  const [showSidebar, setShowSidebar] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo && userInfo.role === "seller") {
      socket.emit("add_seller", userInfo._id, userInfo);
    } else {
      socket.emit("add_admin", userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    socket.on("activeCustomer", (customers) => {
      dispatch(updateCustomer(customers));
    });
    socket.on("activeSeller", (sellers) => {
      dispatch(updateSellers(sellers));
    });
  });

  useEffect(() => {
    socket.on("receved_admin_message", (msg) => {
      setRecMsg(msg);
    });
  }, [dispatch, pathname]);

  useEffect(() => {
    if (recMsg) {
      dispatch(updateAdminMessage(recMsg));
    }
  }, [recMsg, dispatch]);

  useEffect(() => {
    if (recMsg !== "") {
      if (pathname !== "/seller/dashboard/chat-support") {
        toast.success("Admin send you a Message");
      }
    }
  }, [pathname, recMsg]);

  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
