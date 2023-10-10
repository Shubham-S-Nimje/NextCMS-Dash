"use client";
import { signIn, useSession } from "next-auth/react";

const GoogleSSO = () => {
  const { data: session } = useSession();

  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <div>
      {!session && <button onClick={handleSignIn}>Sign in with Google</button>}
    </div>
  );
};

export default GoogleSSO;
