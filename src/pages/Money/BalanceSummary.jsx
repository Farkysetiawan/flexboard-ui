import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { date: "Mon", income: 300, expense: 200 },
  { date: "Tue", income: 700, expense: 100 },
  { date: "Wed", income: 200, expense: 300 },
  { date: "Thu", income: 600, expense: 250 },
  { date: "Fri", income: 400, expense: 150 },
  { date: "Sat", income: 1000, expense: 500 },
  { date: "Sun", income: 350, expense: 100 }
];

export default function TransactionChart() {
  return (
    <div className="p-3 bg-white rounded shadow-sm" style={{ height: 300 }}>
      <h6 className="mb-3">Cashflow Overview</h6>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#198754" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#198754" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc3545" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#dc3545" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Area type="monotone" dataKey="income" stroke="#198754" fillOpacity={1} fill="url(#colorIncome)" name="Income" />
          <Area type="monotone" dataKey="expense" stroke="#dc3545" fillOpacity={1} fill="url(#colorExpense)" name="Expense" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
