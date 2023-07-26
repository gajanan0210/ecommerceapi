// IMPORTING PACKAGE
const express= require("express");
const router= express.Router();

// IMPORTING CONTROLLER
const homeController = require('../controllers/home_controller');

// MAKING ROUTES 
router.get('/', homeController.home);
router.use('/products', require('./products'));


// EXPORTING ROUTER
module.exports = router;