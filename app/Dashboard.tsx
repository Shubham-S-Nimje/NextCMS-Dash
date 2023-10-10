import React from "react";
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  // console.log(session);

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {session?.user ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>Welcome, authenticated user!</p>
      )}
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
