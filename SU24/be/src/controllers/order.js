import Order from "../models/order.js";
import { StatusCodes } from "http-status-codes";

export const createOrder = async (req, res) => {
    try {
        const { userId, items, totalPrice, customerInfo } = req.body;
        const order = await Order.create({ userId, items, totalPrice, customerInfo });
        return res.status(StatusCodes.CREATED).json(order);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
export const getOrders = async (req, res) => {
    try {
        const order = await Order.find();
        if (order.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "No orders found" });
        }
        return res.status(StatusCodes.OK).json(order);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
export const getOrderById = async (req, res) => {
    try {
        const { userId, orderId } = req.params;
        const order = await Order.findOne({ userId, _id: orderId });
        if (!order) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Order not found" });
        }
        return res.status(StatusCodes.OK).json(order);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
export const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findOneAndUpdate({ _id: orderId }, req.body, {
            new: true,
        });
        if (!order) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Order not found" });
        }
        return res.status(StatusCodes.OK).json(order);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const validStatus = ["pending", "confirmed", "shipped", "delivered", "cancelled"];

        if (!validStatus.includes(status)) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid status" });
        }

        const order = await Order.findOne({ _id: orderId });
        if (!order) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Order not found" });
        }

        if (order.status === "delivered" || order.status === "cancelled") {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Order cannot be updated" });
        }

        order.status = status;
        await order.save();

        return res.status(StatusCodes.OK).json({ message: "Order status updated successfully" });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
