// src/components/Topbar.jsx
import { Navbar, Container } from "react-bootstrap";
import {
  BsLightningChargeFill,
  BsGear,
  BsBoxArrowRight,
  BsPersonFill,
} from "react-icons/bs";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Topbar({ onToggleSidebar }) {
  const navigate = useNavigate();

  return (
    <Navbar
      bg="light"
      variant="light"
      fixed="top"
      className="shadow-sm border-bottom py-2"
      style={{ zIndex: 1040 }}
    >
      <Container fluid className="px-3">
        {/* brand kiri */}
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center gap-2 fw-semibold"
          style={{ fontSize: "1.05rem" }}
        >
          <BsLightningChargeFill size={18} className="text-primary" />
          FlexBoard
        </Navbar.Brand>

        {/* spacer */}
        <div className="flex-grow-1" />

        {/* ====== bagian kanan ====== */}

        {/* Settings */}
        <a
          href="/settings"
          className="btn btn-link p-0 me-3"
          title="Settings"
          aria-label="Settings"
        >
          <BsGear
            size={20}
            style={{
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2) rotate(20deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0)";
            }}
          />
        </a>

        {/* Sign Out */}
        <a
          href="/logout"
          className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 me-3"
          style={{ transition: "all 0.2s ease" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(4px)";
            e.currentTarget.style.fontWeight = "600";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.fontWeight = "normal";
          }}
        >
          <BsBoxArrowRight size={14} />
          <span className="small">Sign Out</span>
        </a>

        {/* Profile icon */}
        <a href="/profile" title="Profile" aria-label="Profile">
          <div
            className="rounded-circle bg-success d-flex justify-content-center align-items-center"
            style={{
              width: "32px",
              height: "32px",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            onClick={() => navigate("/profile")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <BsPersonFill className="text-white" />
          </div>
        </a>
      </Container>
    </Navbar>
  );
}

Topbar.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
};
