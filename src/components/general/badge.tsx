import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return <div className={` rounded p-1 bg-gray-300 `}>{children}</div>;
};

export default Badge;
