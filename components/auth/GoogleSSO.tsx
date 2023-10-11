"use client";
import { signIn, useSession } from "next-auth/react";
import "../../styles/dash.scss";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "@/redux/loaderSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleSSO = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  const handleSignIn = async () => {
    dispatch(showLoader());
    await signIn("google");
    dispatch(hideLoader());
  };

  return (
    <div>
      <div className="card">
        <h1 className="card_title">Well Come</h1>
        <button onClick={handleSignIn} className="btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSSO;
