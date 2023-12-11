"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button
      className="bg-transparent hover:bg-green-900 m-5 text-white-900 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded"
      onClick={() => signIn("google")}
    >
      Log in with Google
    </button>
  );
};

export default LoginButton;
