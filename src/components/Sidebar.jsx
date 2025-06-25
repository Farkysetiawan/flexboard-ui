import React, { useState, useEffect } from "react"; // Gabungkan import
import { Nav } from "react-bootstrap";
import {
  BsLightningChargeFill,
  BsWallet2,
  BsHeartPulse,
  BsTable,
  BsCheck2Square,
  BsFlag,
  BsJournal,
  BsStars,
  BsLightbulb,
  BsArrowLeftCircle,
  BsArrowRightCircle
} from "react-icons/bs";
import { motion } from "framer-motion";

const links = [
  { to: "/",           icon: <BsLightningChargeFill />, label: "Dashboard" },
  { to: "/money",      icon: <BsWallet2 />,             label: "Money Tracker" },
  { to: "/quicklinks", icon: <BsLightningChargeFill />, label: "Quicklinks" },
  { to: "/body",       icon: <BsHeartPulse />,          label: "Body Tracker" },
  { to: "/content",    icon: <BsTable />,               label: "Content Mgr" },
  { to: "/todo",       icon: <BsCheck2Square />,        label: "To-do List" },
  { to: "/goals",      icon: <BsFlag />,                label: "Goals" },
  { to: "/journal",    icon: <BsJournal />,             label: "Journal" },
  { to: "/metagen",    icon: <BsStars />,               label: "MetaGen" },
  { to: "/brainstorm", icon: <BsLightbulb />,           label: "Brainstorm" }
];

let hasAnimated = false; // ⬅️ let (di luar komponen scope)
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // ⬇️ Tambahan hanya untuk animasi pertama kali load
  const initialAnimation = !hasAnimated ? { x: -220 } : false;
  hasAnimated = true; // ⬅️ setelah komponen load pertama kali

  return (
    <motion.div
      className="sidebar d-flex flex-column justify-content-between border-end bg-white shadow-sm"
      initial={!hasAnimated ? { x: -220 } : false} // hanya animasi saat pertama buka
      animate={{ width: isCollapsed ? "64px" : "220px", x: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: isCollapsed ? 0.15 : 0.4
      }}
      style={{
        height: "100vh",
        position: "fixed",
        zIndex: 100
      }}
    >
      <Nav className="flex-column mt-3 gap-1">
        {links.map((l) => (
          <Nav.Link
            key={l.to}
            href={l.to}
            title={isCollapsed ? l.label : ""}
            className="d-flex align-items-center gap-3 px-3 py-2 text-dark"
            style={{
              borderRadius: "8px",
              marginInline: "6px",
              transition: "all 0.2s ease",
              fontWeight: 500
            }}
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector("svg");
              icon.style.transform = "scale(1.2)";
              icon.style.color = "#0d6efd";
              e.currentTarget.style.background = "#f1f3f5";
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector("svg");
              icon.style.transform = "scale(1)";
              icon.style.color = "#6c757d";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <span
              className="d-flex justify-content-center align-items-center"
              style={{ width: "24px" }}
            >
              {React.cloneElement(l.icon, {
                size: 18,
                style: {
                  color: "#6c757d",
                  transition: "all 0.2s ease"
                }
              })}
            </span>

            {!isCollapsed && (
              <span className="flex-grow-1">{l.label}</span>
            )}
          </Nav.Link>
        ))}
      </Nav>

      {/* Tombol toggle di paling bawah dan tengah */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "0 0 6px rgba(0,0,0,0.1)",
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {isCollapsed ? (
            <BsArrowRightCircle size={20} color="#6c757d" />
          ) : (
            <BsArrowLeftCircle size={20} color="#6c757d" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
