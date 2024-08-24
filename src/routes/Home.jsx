import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import("@/components/LazyComponent"));

export default function Home() {
  return <div>
    {/* <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense> */}
    <Experience />
    <Projects />
    <Footer />
  </div>;
}