import express, {Request, Response} from 'express';

const registerUser = (req: Request, res: Response) => { 
        res.send('registerUser');
}
const loginUser =  (req: Request, res: Response) => { 
    res.send('loginUser');
}
const updateUser = (req: Request, res: Response) => { 
    res.send('updateUser');
}
const deleteUser = async (req: Request, res: Response) => { 
    res.send('deleteUser');
}

export { registerUser, loginUser, updateUser, deleteUser };