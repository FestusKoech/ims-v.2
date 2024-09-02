"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
/* ROUTE IMPORTS */
var dashboardRoutes_1 = require("./routes/dashboardRoutes");
var productRoutes_1 = require("./routes/productRoutes");
var userRoutes_1 = require("./routes/userRoutes");
var expenseRoutes_1 = require("./routes/expenseRoutes");
/* CONFIGURATIONS */
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/* ROUTES */
app.use("/dashboard", dashboardRoutes_1.default); // http://localhost:8000/dashboard
app.use("/products", productRoutes_1.default); // http://localhost:8000/products
app.use("/users", userRoutes_1.default); // http://localhost:8000/users
app.use("/expenses", expenseRoutes_1.default); // http://localhost:8000/expenses
/* SERVER */
var port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", function () {
    console.log("Server running on port ".concat(port));
});
