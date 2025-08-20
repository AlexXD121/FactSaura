import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components that are not immediately visible
const MobileDemo = lazy(() => import("./components/MobileDemo"));
const RecentDetections = lazy(() => import("./components/RecentDetections"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-custom-black via-gray-900 to-custom-black">
      <Navbar />
      <Suspense fallback={<div className="fixed top-4 right-4 z-50"><LoadingSpinner /></div>}>
        <MobileDemo /> {/* Now floating */}
      </Suspense>
      <main className="pt-20">
        <Hero />
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size="xl" />
          </div>
        }>
          <RecentDetections />
        </Suspense>
      </main>
      <Suspense fallback={<div className="py-8"><LoadingSpinner /></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
