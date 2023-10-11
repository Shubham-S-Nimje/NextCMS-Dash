// Loader.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Loader = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  // console.log(isLoading)

  return isLoading ? <div className="card_loader">Loading..</div> : null;
};

export default Loader;
