const express = require('express');
const role_based_router = express.Router();
const role_based_controller = require('../controllers/role_based_acces.controller.js');
const { authorize } = require('../middlewares/auth.middleware');

// Routes for staff
role_based_router.post('/sales', authorize(['staff', 'manager', 'admin']), role_based_controller.generateSales);
role_based_router.get('/products', authorize(['staff', 'manager', 'admin']), role_based_controller.viewProducts);

// Routes for manager
role_based_router.post('/products', authorize(['manager', 'admin']), role_based_controller.addProduct);
role_based_router.put('/products/:id', authorize(['manager', 'admin']), role_based_controller.updateProduct);
role_based_router.delete('/products/:id', authorize(['manager', 'admin']), role_based_controller.deleteProduct);
role_based_router.post('/purchases', authorize(['manager', 'admin']), role_based_controller.generatePurchase);

// Routes for admin
role_based_router.post('/users', authorize(['admin']), role_based_controller.addStaff);
role_based_router.delete('/users/:id', authorize(['admin']), role_based_controller.deleteStaff);
role_based_router.get('/reports/sales', authorize(['admin']), role_based_controller.generateSalesReport);

module.exports = role_based_router;
