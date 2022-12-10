import express from 'express';
import { registerUser, loginUser, updateUser, deleteUser } from '../controller/authController';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.patch('/update', updateUser);
router.delete('/delete/:id', deleteUser);


export default router;