import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface Ilayout {
  children: ReactNode;
}

const Layout: FC<Ilayout> = ({ children }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-transparent min-h-screen w-full flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
