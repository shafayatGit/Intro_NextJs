"use client"; //error page must have to be clientside component
import React, { useEffect } from "react";

interface AboutErrorProps {
  error: Error;
  reset: () => void;
}

export default function AboutError({ error, reset }: AboutErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
