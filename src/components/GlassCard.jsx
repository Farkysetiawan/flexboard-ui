export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass-card p-4 ${className}`.trim()}>
      {children}
    </div>
  );
}

