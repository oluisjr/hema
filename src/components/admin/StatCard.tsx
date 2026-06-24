import type { ReactNode } from "react";

export function StatCard({ icon, label, value, delta }: { icon: ReactNode; label: string; value: string | number; delta?: string }) {
  return (
    <article className="street-stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        {delta ? <small>{delta}</small> : null}
      </div>
      <i />
    </article>
  );
}
