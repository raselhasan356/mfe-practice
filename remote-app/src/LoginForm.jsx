import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import axios from "./api/axios";

import { setAuth } from "./utils/functions";

import { LOGIN_URL } from "./utils/constants";

export default function LoginForm() {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function handleLoginClick(data) {
    try {
      setIsDisabled(true);
      const response = await axios.post(LOGIN_URL, data);
      console.log(response);
      setAuth({
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
        username: response.data.username,
        image: response.data.image,
      });
      toast.success("login successful!");
      navigate(-1);
    } catch (err) {
      console.log("remote error", err);
      toast.error("login failed!");
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login Form</h1>
        </div>

        <form
          onSubmit={handleSubmit(handleLoginClick)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
                autoComplete="on"
                {...register("username", {
                  required: "username is required!",
                  minLength: {
                    value: 4,
                    message: "username should be at least 4 characters!",
                  },
                })}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                autoComplete="on"
                {...register("password", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 6,
                  },
                })}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is required!</p>
            )}
            {errors.password?.type === "checkLength" && (
              <p className="text-red-500">
                password should be at least 6 characters!
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="">
                Sign up
              </a>
            </p>

            <button
              type="submit"
              disabled={isDisabled}
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
