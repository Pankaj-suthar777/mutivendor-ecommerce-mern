const cartModel = require("../../models/cartModel");
const { responseReturn } = require("../../utils/response");
const {
  mongo: { ObjectId },
} = require("mongoose");

class cartController {
  add_to_cart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
      const product = await cartModel.findOne({
        $and: [
          {
            productId: {
              $eq: productId,
            },
          },
          {
            userId: {
              $eq: userId,
            },
          },
        ],
      });

      if (product) {
        responseReturn(res, 404, { error: "Product Already Added To Card" });
      } else {
        const product = await cartModel.create({
          userId,
          productId,
          quantity,
        });
        responseReturn(res, 201, {
          message: "Added To Card Successfully",
          product,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // End Method

  get_cart_products = async (req, res) => {
    const { userId } = req.params;
    try {
      const cart_products = await cartModel.aggregate([
        {
          $match: {
            userId: {
              $eq: new ObjectId(userId),
            },
          },
        },
      ]);
      console.log(cart_products);
    } catch (error) {
      console.log(error.message);
    }
  };
  // End Method
}

module.exports = new cartController();
