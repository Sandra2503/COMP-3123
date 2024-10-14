const express = require('express');
const { createEmployee, fetchAll, detailsById, updateById, deleteById } = require('../controllers/employeeController');
const router = express.Router();

// Define your employee routes

router.post('/employees', createEmployee);

router.get('/employees', fetchAll)

router.get('/employees/:eid', detailsById)

router.put('/employees/:eid', updateById)

router.delete('/employees', deleteById)


module.exports = router; // Ensure you are exporting the router correctly
