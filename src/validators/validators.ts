import { z } from "zod";

export const addProductToOrderSchema = z.object({
  productId: z.number(),
});

export const createProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().min(0),
});

//

export const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(1),
  password: z
    .string()
    .min(6)
    .refine(
      (password) => {
        // Check if the password contains at least one uppercase letter, one lowercase letter, and one number
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        return hasUpperCase && hasLowerCase && hasNumber;
      },
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }
    ),
});

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
