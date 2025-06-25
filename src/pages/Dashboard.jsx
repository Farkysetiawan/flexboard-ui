// src/pages/Dashboard.jsx
import StatCard        from "../components/StatCard";      // kartu ringkasan kecil
import GlassCard       from "../components/GlassCard";     // panel kaca
import SimpleLineChart from "../components/SimpleLineChart";
import ProgressRing    from "../components/ProgressRing";
import { motion } from "framer-motion";



export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
    <div className="container-fluid">
      {/* judul halaman */}
      <h2 className="fw-bold mb-4">Dashboard</h2>

      {/* ---------- BARIS QUICKLINKS ---------- */}
      <div className="mb-4">
        <h5 className="mb-3">Quicklinks</h5>
        <div className="d-flex flex-wrap gap-3">
          <a href="/todo" className="btn btn-outline-primary d-flex align-items-center gap-2">
            <i className="bi bi-check2-square"></i> To-do List
          </a>
          <a href="/goals" className="btn btn-outline-success d-flex align-items-center gap-2">
            <i className="bi bi-bullseye"></i> Goals
          </a>
          <a href="/journal" className="btn btn-outline-warning d-flex align-items-center gap-2">
            <i className="bi bi-journal-text"></i> Journal
          </a>
          <a href="/body" className="btn btn-outline-info d-flex align-items-center gap-2">
            <i className="bi bi-activity"></i> Body Tracker
          </a>
        </div>
      </div>


      {/* ---------- BARIS STATISTIK KECIL ---------- */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <StatCard title="TOTAL REQUESTS" value="115"   subtitle="Last 7 days" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="TOTAL TOKENS"   value="23.3 K" subtitle="Last 7 days" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="TOTAL COST"     value="$0.0297" subtitle="Last 7 days" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="AVG TOKENS/SEC" value="27.3"    subtitle="Processing speed" />
        </div>
      </div>

      {/* ---------- BARIS KONTEN UTAMA ---------- */}
      <div className="row g-4">
        {/* Revenue panel */}
        <div className="col-lg-3">
          <GlassCard className="h-100 d-flex flex-column">
            <h6 className="text-muted">Revenue</h6>
            <p className="display-6 mb-0">$9,145</p>
          </GlassCard>
        </div>

        {/* Grafik garis */}
        <div className="col-lg-9">
          <GlassCard className="h-100">
            <h6 className="text-muted mb-3">Chart Preview</h6>
            <SimpleLineChart height={210} />
          </GlassCard>
        </div>
      </div>

      {/* ---------- BARIS KEDUA ---------- */}
      <div className="row g-4 mt-0">
        {/* Tombol aksi tim */}
        <div className="col-lg-3">
          <GlassCard className="h-100 d-flex flex-column">
            <h6 className="text-muted mb-3">Team Status</h6>
            <button className="btn btn-primary w-100">Check Now</button>
          </GlassCard>
        </div>

        {/* Ring progress */}
        <div className="col-lg-9">
          <GlassCard className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h6 className="text-muted mb-2">Progress</h6>
            <ProgressRing value={67} size={120} stroke={12} />
            <p className="fs-4 fw-semibold mt-2 mb-0">67 %</p>
          </GlassCard>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
