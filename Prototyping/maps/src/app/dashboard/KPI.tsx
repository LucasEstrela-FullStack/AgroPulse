// src/app/dashboard/KPI.tsx Exemple KPI component for the dashboard page 

interface KPIProps {
  title: string
  value: string
}

export default function KPI({ title, value }: KPIProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
      <h3 className="text-zinc-400">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}