// components/AnimatedRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import semua halaman
import Dashboard from "../pages/Dashboard";
import Money from "../pages/Money";
import Body from "../pages/Body";
import Content from "../pages/Content";
import Todo from "../pages/Todo";
import Goals from "../pages/Goals";
import Journal from "../pages/Journal";
import MetaGen from "../pages/MetaGen";
import Brainstorm from "../pages/Brainstorm";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
        <Route path="/money" element={<AnimatedPage><Money /></AnimatedPage>} />
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
  );
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
