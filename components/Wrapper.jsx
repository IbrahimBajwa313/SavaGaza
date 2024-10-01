import React from 'react';

export default function Wrapper({ children, className }) {
  return (
    <>
      <div
        className={`w-full max-w-[100%] px-5 md:px-10 mx-auto ${className || ""}`}
      >
        {children}
      </div>
    </>
  );
}
