<<<<<<< HEAD
import {z} from 'zod';

const userValidator = z.object({
    username: z.string()
    .min(4,"Name must be at least 4 characters long.")
    .max(10, "Name must be less than 10 characters long."),

    mobile: z.string()
    .min(10, "Enter a valid mobile number.")
    .max(10, "Enter a valid mobile number."),

    password: z.string()
    .min(5, "Password must be at least 5 characters long.")
})

const validateUser = (req, res, next) => {
    const result = userValidator.safeParse(req.body)

    if(!result.success){
        return res.status(400).json({error: result.error.errors[0].message })
    }
    next();
}

=======
import {z} from 'zod';

const userValidator = z.object({
    username: z.string()
    .min(4,"Name must be at least 4 characters long.")
    .max(10, "Name must be less than 10 characters long."),

    mobile: z.string()
    .min(10, "Enter a valid mobile number.")
    .max(10, "Enter a valid mobile number."),

    password: z.string()
    .min(5, "Password must be at least 5 characters long.")
})

const validateUser = (req, res, next) => {
    const result = userValidator.safeParse(req.body)

    if(!result.success){
        return res.status(400).json({error: result.error.errors[0].message })
    }
    next();
}

>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
export default validateUser;