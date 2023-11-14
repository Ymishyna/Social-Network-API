// imports
const { connect, connection } = require("mongoose");

// creating db
const connectionString =
    process.env.MONGODB_URI || "mongodb://localhost:27017/socialDB";

// connecting Mongoose and MongoDB
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// exports
module.exports = connection;