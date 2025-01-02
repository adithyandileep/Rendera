import {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay} from '../controllers/userController.js'
import express from 'express'
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth, userCredits);
userRouter.post('/pay-razor',userAuth, paymentRazorpay);
userRouter.post('/verify-razor', verifyRazorpay);

export default userRouter;

// http://localhost:4000/api/user/register 
// http://localhost:4000/api/user/login 
// http://localhost:4000/api/user/credits
// http://localhost:4000/api/user/pay-razor
// http://localhost:4000/api/user/verify-razor