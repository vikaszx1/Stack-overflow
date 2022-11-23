import express from "express"

import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from "../middlewares/auth.js";

const router = express.Router();

router.patch('/post/:id', auth, postAnswer)  //for update the database for a particular question's answer
router.patch('/delete/:id', auth, deleteAnswer)

export default router