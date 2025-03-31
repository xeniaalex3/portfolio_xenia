import * as yup from 'yup';

export const formSchema = yup.object().shape( {
  firstname: yup.string().min(2, "The first name must be at least 2 characters long").max(100, "The first name is too long"),
  email: yup.string()
  .matches(
    /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
    "Invalid email address format"
  ),
  message: yup.string().min(10, "The message must have at least 10 characters").required("The message is required"),
  
} );