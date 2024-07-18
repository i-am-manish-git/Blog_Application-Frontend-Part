//all the function that the server need for user related operation
import { myAxios } from "./helper";

// Function to handle user registration
export const signUp = (user) => {
  return myAxios.post("/api/auth/register", user);
};