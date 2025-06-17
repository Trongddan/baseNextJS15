import React from "react";
import { auth, signIn, signOut } from "../../../../../auth";

const page = async () => {
  const session = await auth();
  return (
    <div>
      {session ? session?.user?.email : "No session"}
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label>
          Emailss
          <input name="username" value="emilys" type="text" />
        </label>
        <label>
          Password
          <input name="password" value="emilyspass" type="password" />
        </label>
        <button>Sign In</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign out</button>
      </form>
    </div>
  );
};

export default page;
