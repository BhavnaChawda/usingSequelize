import express from "express";
import { signUp, signIn } from "../Controller/admin.controller.js";
import { body } from "express-validator";

const router = express.Router();  // calling Router method of express

// Define routes
router.post("/sign-up",                                      // when the /"sign-in" hit on the url it goes to signInPage which is in admin.controller.js
   body("username", "Username is required").notEmpty(),      
   body("email", "Email is required").notEmpty(),
   body("email", "Not a valid email").isEmail(),
   body("password", "Password is required").notEmpty(),
   body("password", "Password must be between 6 to 10 characters").isLength({ min: 6, max: 10 }),
   body("contact", "Only digits are acceptable").isNumeric(),
   signUp
);

router.post("/sign-in", signIn);

export default router;// as it is default export we can import it by any name (AdminRouter)

