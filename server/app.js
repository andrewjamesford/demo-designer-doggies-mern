require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const productRouter = require("./products/product.router");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

const swaggerDocument = yaml.load(
    fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
);

// middleware
// The app.use(cors()) and app.use(express.json()) lines add middleware to the application. The cors() middleware enables Cross-Origin Resource Sharing, allowing the server to respond to requests from different origins. The express.json() middleware parses incoming requests with JSON payloads.
app.use(cors());
app.use(express.json());

// route
// The app.use("/api/products", productRouter) line sets up the routes for product - related endpoints.Any request to the server with a path that starts with /api/products will be handled by productRouter.
app.use("/api/products", productRouter);

// swagger documentation
// The swaggerDocument constant is created by loading a YAML file(apispec.yaml) from the file system.This file likely contains the OpenAPI(formerly Swagger) specification for the API, which swagger - ui - express uses to generate interactive API documentation.
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// error handling middleware
// The app.use(errorHandlerMiddleware) line adds a custom error handling middleware to the application. This middleware will catch any errors that occur during the processing of requests.
app.use(errorHandlerMiddleware);

module.exports = app;
