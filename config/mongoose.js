const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb+srv://gmunde824:NCpePq9vlFN4AXRB@cluster0.eplqtyp.mongodb.net/ecommerceapi?retryWrites=true&w=majority");

// setting it to db
const db = mongoose.connection;

/** --------- CHECKING CONNECTION --------- **/
// if error occurs
db.on("error", console.error.bind(console, "Error connecting to Database"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to Database");
});

/** --------- EXPORTING DB --------- **/
module.exports = db;