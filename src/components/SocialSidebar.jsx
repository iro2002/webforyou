import React from "react";

const LetsTalkBar = () => {
  return (
    <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pointer-events-auto">
      <div className="h-48 w-10 bg-[#c22924] flex items-center justify-center shadow-lg">
        <span className="text-[10px] font-bold tracking-[0.3em] text-white rotate-90 whitespace-nowrap">
          LET’S TALK
        </span>
      </div>
    </div>
  );
};

export default LetsTalkBar;