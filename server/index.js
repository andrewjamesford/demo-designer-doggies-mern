const app = require("./app");
const port = process.env.PORT || 5001;
const mongoose = require("mongoose");

const mongoDbUri = process.env.MONGO_URI || "mongodb://localhost:27017/mongo";
mongoose.connect(mongoDbUri, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
}).then(() => {
    console.log("Connected to Mongo");
}).catch((error) => {
    console.log("Error - ", error);
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
