// when you call this component
// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import("@/components/LazyComponent"));


// <Suspense fallback={<div>Loading...</div>}>
//   <LazyComponent />
// </Suspense>

import React from "react";

const data = await new Promise((resolve) => setTimeout(resolve, 3000));

const LazyComponent = () => {
  return <div>Lazy component...</div>;
};

export default LazyComponent;