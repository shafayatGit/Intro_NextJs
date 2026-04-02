import React from "react";

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000)); //that will give timeout of 4s
  return <div>AboutPage</div>;
}
