import React, { ReactNode } from "react";
import { GoArrowLeft } from "react-icons/go";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed w-screen  left-0 bg-black/30  h-full transform transition-transform ease-in-out duration-300 ${
        isOpen ? "z-[209]" : "z-[-50]"
      }`}
      //   onClick={onClose}
    >
      <div
        className={`fixed inset-y-0 top-0 right-0 w-[430px] h-full bg-white border-3 border-red-200 z-[211] transform transition-transform ease-in-out duration-300 ${
          isOpen
            ? "translate-x-0 overflow-scroll"
            : "translate-x-full overflow-auto"
        }`}
      >
        <div className="w-full h-full border-[3px] border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
