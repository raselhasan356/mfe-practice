import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string("Must be text").required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  age: yup
    .number()
    .typeError("Should be a number")
    .positive()
    .integer("Should be integer")
    .required("Age is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Must be at least 03 digits")
    .max(15, "Password should be less than 16 digits")
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <div className="Form">
      <div className="title">
        <div className="inputs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              {...register("firstName")}
            />
            <p>{errors?.firstName?.message}</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              {...register("lastName")}
            />
            <p>{errors?.lastName?.message}</p>
            <input
              type="text"
              name="email"
              placeholder="Enter email..."
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
            <input
              type="text"
              name="age"
              placeholder="Enter age..."
              {...register("age")}
            />
            <p>{errors?.age?.message}</p>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              {...register("password")}
            />
            <p>{errors?.password?.message}</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password..."
              {...register("confirmPassword")}
            />
            <p>{errors?.confirmPassword && "Passwords should match!"}</p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
