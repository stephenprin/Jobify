"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_error_1 = require("./middleware/index-error");
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const jobRoute_1 = __importDefault(require("./routes/jobRoute"));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/api/v1/auth', authRoute_1.default);
app.use('/api/v1/job', jobRoute_1.default);
// notFound handler
app.use(index_error_1.notFound);
app.use(index_error_1.errorHandling);
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect(process.env.DATABASE_URL)
    .then(() => {
    console.log('connected to db');
})
    .catch((err) => {
    console.log(err.message);
});
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log(`serve at http://localhost:${PORT}`);
});
