const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send();
        }
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).send();
        }
        res.status(200).send(order);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).send();
        }
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err);
    }
};
