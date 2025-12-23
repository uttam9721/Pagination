import React from "react";
import Navbar from "../components/Navbar";
const HeroPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
          <Navbar />
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Welcome to {user?.name ? `, ${user.name}` : ""}
      </h1>
    </div>
    </>
  );
};

export default HeroPage;
