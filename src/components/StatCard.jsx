// src/components/StatCard.jsx
import PropTypes from "prop-types";

export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="p-3 bg-white rounded shadow-sm border h-100">
      <small className="text-muted">{title}</small>
      <h3 className="fw-semibold mb-0">{value}</h3>
      {subtitle && <small className="text-secondary">{subtitle}</small>}
    </div>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string,
};
