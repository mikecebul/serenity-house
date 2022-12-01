import React from "react";
import Footer from "./footer";
import NavBar from "./navBar";

type TProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  return (
    <div className="text-slate-800 bg-slate-100 dark:text-slate-100 dark:bg-slate-800">
      <NavBar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
