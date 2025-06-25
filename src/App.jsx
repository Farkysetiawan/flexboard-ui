// ----------  src/App.jsx  ----------
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// komponen bersama
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

// halaman
import Dashboard from "./pages/Dashboard";
import Money from "./pages/Money/index";
import Body from "./pages/Body";
import Content from "./pages/Content";
import Todo from "./pages/Todo";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import MetaGen from "./pages/MetaGen";
import Brainstorm from "./pages/Brainstorm";
import Quicklinks from "./pages/Quicklinks";

function AnimatedPage({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const sidebarWidth = sidebarOpen ? 220 : 60;

  return (
    <BrowserRouter>
      <Topbar onToggleSidebar={handleToggleSidebar} />
      <div className="d-flex" style={{ paddingTop: "56px", minHeight: "100vh", background: "#f8f9fa" }}>
        <Sidebar collapsed={!sidebarOpen} />
        <div
          className="flex-grow-1"
          style={{
            marginLeft: `${sidebarWidth}px`,
            transition: "margin-left 0.3s ease",
            padding: "1.5rem",
          }}
        >
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
              <Route path="/money" element={<AnimatedPage><Money /></AnimatedPage>} />
              <Route path="/quicklinks" element={<AnimatedPage><Quicklinks /></AnimatedPage>} />
              <Route path="/body" element={<AnimatedPage><Body /></AnimatedPage>} />
              <Route path="/content" element={<AnimatedPage><Content /></AnimatedPage>} />
              <Route path="/todo" element={<AnimatedPage><Todo /></AnimatedPage>} />
              <Route path="/goals" element={<AnimatedPage><Goals /></AnimatedPage>} />
              <Route path="/journal" element={<AnimatedPage><Journal /></AnimatedPage>} />
              <Route path="/metagen" element={<AnimatedPage><MetaGen /></AnimatedPage>} />
              <Route path="/brainstorm" element={<AnimatedPage><Brainstorm /></AnimatedPage>} />
              <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </BrowserRouter>
  );
}
