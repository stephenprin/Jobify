"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobController_1 = require("../controller/jobController");
const router = express_1.default.Router();
router.post('/create', jobController_1.createJob);
router.get('/all-jobs', jobController_1.getAllJobs);
router.patch('/update/:id', jobController_1.updateJob);
router.delete('/delete/:id', jobController_1.deleteJob);
router.get('/stats', jobController_1.showStats);
exports.default = router;
