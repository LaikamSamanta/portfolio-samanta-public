import { Outlet } from "react-router-dom";
import { SiteFrame } from "./components/layout/SiteFrame";
import { SkipToContent } from "./components/layout/SkipToContent";
import { PageBackdrop } from "./components/layout/PageBackdrop";
import { Nav } from "./components/layout/Nav";

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteFrame />
      <SkipToContent />
      <PageBackdrop />
      <Nav />
      <Outlet />
    </div>
  );
}
