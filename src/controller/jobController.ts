import express, {Request, Response} from 'express';

const createJob = async(req: Request, res: Response) => { 
        res.send('createJoob');
}
const getAllJobs =  async(req: Request, res: Response) => { 
    res.send('get all jobs');
}
const updateJob = (req: Request, res: Response) => { 
    res.send('updateJob');
}
const deleteJob = async (req: Request, res: Response) => { 
    res.send('deleteUser');
}
const showStats = async (req: Request, res: Response) => { 
    res.send('showStas');
}

export { createJob, getAllJobs, updateJob, deleteJob, showStats };