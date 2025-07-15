
import { Request, Response } from 'express';
import { createRandomMonthlyResume } from '../../models/MonthlyResume';
import { createRandomUser } from '../../models/User';


const validStatuses = ['pending', 'completed', 'failed'];
const invalidStatuses = ['invalid', 'error', 'unknown'];

interface ChallengeRequest extends Request {
    body: {
        ptributario: string;
        [key: string]: any;
    };
    user: string;
}
interface SuccessMessageResponse extends Response {
    data: {
        message: string;
        user: string;
    }
}

interface ErrorMessageResponse extends Response {
    error: Error;
}

export const getClientMonthlyResumeStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        // Challenge get Monthly Resume Status, for this challenge please feel free to ask the interviewer about any question regarding the challenge
        // about context, requirements, or any other information you need to complete the challenge.
        // you can create any helper functions you need to complete the challenge.
        // tests for now are not required, but you can create them if you want to.
        // remember to use the SOLID principles it would be very much appreciated.

        // First step: Check the request body data and grab the data inside the body, as well as the user auth information

        // Second step: either use the mocked data or the database to get the monthly resume for the given ptributario and user
        // get the status and do validations on the status, and return the status in the response


        // here update the responses, this empty 200 is not the response we want to return :)
        res.status(200).json();
    } catch (error) {
        res.status(500).json({error: error});
    }
}


interface MonthlyResume {
    ptributario: string;
    user: string;
    status: string;
}


const getMockedMonthlyResume = (ptributario: string, user: string): MonthlyResume => {
    // This function should return a mocked monthly resume for the given ptributario and user
    const randomStatus = Math.random() > 0.5 ? 'completed' : 'error';
    return {
        ptributario,
        user,
        status: randomStatus,
    };
}

const getMonthlyResumeFromDatabase = async (ptributario: string, user: string): Promise<MonthlyResume> => {
    // This function should interact with the database to get the monthly resume for the given ptributario and user
    // For now, let's assume it returns a dummy monthly resume
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ptributario,
                user,
                status: 'dummy_status',
            });
        }, 1000);
    });

    // comment from above and use the model with sequelize to retrieve the info
}

const getStatusFromMonthlyResume = (monthlyResume: MonthlyResume): string => {
    // This function returns the status of the monthly resume based on the ptributario
    return monthlyResume.status;
}


export const createDatabasesEntries = async (req: Request, res: Response): Promise<void> => {
    try {
        await createRandomUser();
        await createRandomMonthlyResume('202508', 1); // Assuming user_id is 1 for the created user
        res.status(200).json({ message: 'Database entries created successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}