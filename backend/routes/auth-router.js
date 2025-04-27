import express from 'express';
import authController from '../controllers/auth-controller.js'
import validateUser from '../middlewares/userValidator.js';

const router = express.Router()

router.route("/").get(authController.home)

router.route("/registration").post(validateUser , authController.registration)

router.route("/login").post(authController.login)


export default router