import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import StatusBar from "@/components/StatusBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/** Resets scroll to the top on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-ink font-sans text-cream">
      <ScrollToTop />
      <StatusBar />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
