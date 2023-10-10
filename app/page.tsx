"use client";
import GoogleSSO from "@/components/GoogleSSO";
import variables from "../styles/variables.module.scss";
import Dashboard from "./Dashboard";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className={variables.title}>Hello, Next.js!</h1>
      {session ? <Dashboard /> : <GoogleSSO />}
    </div>
  );
}
