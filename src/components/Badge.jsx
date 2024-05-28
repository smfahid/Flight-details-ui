import React from "react";

function Badge({ text }) {
  return (
    <div className="rounded-full w-[9%] bg-[#E8F3FF] p-1.5 text-xs text-[#1882FF] font-medium text-center">
      {" "}
      {text}
    </div>
  );
}

export default Badge;
