import express, { Request, Response } from 'express';
import { createJob, getAllJobs, updateJob, deleteJob, showStats } from '../controller/jobController';

const router = express.Router();

router.post('/create', createJob);
router.get('/all-jobs', getAllJobs);
router.patch('/update/:id', updateJob);
router.delete('/delete/:id', deleteJob);
router.get('/stats', showStats);

export default router;