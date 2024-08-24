import React from "react";

const data = await new Promise((resolve) => setTimeout(resolve, 3000));

const LazyComponent = () => {
  return <div>Lazy component...</div>;
};

export default LazyComponent;