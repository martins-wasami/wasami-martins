import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl mb-8 font-medium capitalize text-center">
      {children}
      <hr className="w-6 h-1 mx-auto my-4 bg-gray-950 border-0 rounded"></hr>
    </h2>
  );
};
export default SectionHeading;
