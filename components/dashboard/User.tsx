"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import "../../styles/dash.scss";
import { useRouter } from "next/navigation";
import { hideLoader, showLoader } from "@/redux/loaderSlice";
import { useDispatch } from "react-redux";

const User = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  //   console.log(session);

  useEffect(() => {
    if (!session) {
      router.push("/auth");
    }
  }, [session]);

  const handleSignOut = async () => {
    dispatch(showLoader());
    await signOut();
    dispatch(hideLoader());
  };
  return (
    <div>
      {session?.user && (
        <div className="card">
          <h1 className="card_title">Dashboard</h1>
          {session?.user?.image && (
            <img src={session?.user?.image} alt="user" className="card_image" />
          )}
          <p className="card_name">{session.user.name}</p>
          <p className="card_email">{session.user.email}</p>
          <button onClick={handleSignOut} className="btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
