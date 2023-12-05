const Order = require('../models/order.model');
const Product = require('../models/product.model'); 


exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.json(newOrder);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating order.');
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
        let order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ msg: 'Order not found.' });
        }

        // Update order items
        order.items = req.body.items;

        // Recalculate total price
        order.totalPrice = await calculateTotalPrice(order.items);

        await order.save();
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating order.');
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

exports.getOrdersByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ UserId: userId });
        if (!orders || orders.length === 0) {
            return res.status(404).send({ message: 'No orders found for this user.' });
        }
        res.status(200).send(orders);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.finalizeCart = async (req, res) => {
    try {
        const orderId = req.params.id;
        let order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ msg: 'Order not found.' });
        }

        if (order.status !== 'cart') {
            return res.status(400).json({ msg: 'Only carts can be finalized.' });
        }

        order.status = 'pending';
        await order.save();

        res.json(order);
    } catch (err) {
        res.status(500).send(err);
    }
};


async function calculateTotalPrice(orderItems) {
    let totalPrice = 0;
    for (const item of orderItems) {
        try {
            const product = await Product.findById(item.productId);
            if (product) {
                // Log product details
                console.log(`Product ID: ${item.productId}, Quantity: ${item.quantity}, Price: ${product.price}`);
                
                totalPrice += product.price * item.quantity;
            } else {
                throw new Error('Product not found');
            }
        } catch (error) {
            // Log specific errors for each product
            console.error('Error finding product with ID:', item.productId, error);
            throw error;
        }
    }
    console.log('Total Price:', totalPrice); // Log the final total price
    return totalPrice;
};




