import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Money() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("income");
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2025-06-24",
      description: "Freelance Payment",
      category: "Makan",
      amount: 1200,
      type: "income",
    },
    {
      id: 2,
      date: "2025-06-23",
      description: "Groceries",
      category: "Belanja",
      amount: 85,
      type: "expense",
    },
  ]);

  const handleAddClick = (type) => {
    setFormType(type);
    setEditingTransaction(null); // reset
    setShowForm(true);
  };

  const handleSaveTransaction = (data) => {
    if (editingTransaction) {
      // Update existing
      setTransactions((prev) =>
        prev.map((tx) => (tx.id === editingTransaction.id ? { ...data, id: tx.id } : tx))
      );
    } else {
      // Add new
      const newTransaction = {
        id: Date.now(),
        ...data,
      };
      setTransactions((prev) => [newTransaction, ...prev]);
    }

    setShowForm(false);
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTransaction = (id) => {
    const tx = transactions.find((t) => t.id === id);
    if (tx) {
      setFormType(tx.type);
      setEditingTransaction(tx);
      setShowForm(true);
    }
  };

  const formatRupiah = (number) =>
    `Rp ${number.toLocaleString("id-ID", {
      minimumFractionDigits: 0,
    })}`;

  const totalBalance =
    transactions.reduce(
      (sum, t) => sum + (t.type === "income" ? t.amount : -t.amount),
      0
    ) || 0;

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="container-fluid px-2 px-md-4">
      <h4 className="fw-bold mb-4">💰 Money Tracker</h4>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <Card className="shadow-sm p-3">
            <h6 className="text-muted">Total Balance</h6>
            <h4 className="fw-semibold text-success">{formatRupiah(totalBalance)}</h4>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="shadow-sm p-3">
            <h6 className="text-muted">This Month Income</h6>
            <h4 className="fw-semibold text-primary">{formatRupiah(totalIncome)}</h4>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="shadow-sm p-3">
            <h6 className="text-muted">This Month Expenses</h6>
            <h4 className="fw-semibold text-danger">{formatRupiah(totalExpenses)}</h4>
          </Card>
        </div>
      </div>

      <Card className="shadow-sm p-4 mb-4">
        <h6 className="mb-3">Cashflow Chart (placeholder)</h6>
        <div
          style={{
            height: "200px",
            background: "#f8f9fa",
            borderRadius: "6px",
          }}
        />
      </Card>

      <Card className="shadow-sm p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">Recent Transactions</h6>
          <div className="d-flex gap-2">
            <Button variant="outline-success" size="sm" onClick={() => handleAddClick("income")}>
              + Add Income
            </Button>
            <Button variant="outline-danger" size="sm" onClick={() => handleAddClick("expense")}>
              + Add Expense
            </Button>
          </div>
        </div>
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransaction}
          onEdit={handleEditTransaction}
          formatRupiah={formatRupiah}
        />
      </Card>

      <TransactionForm
        show={showForm}
        onHide={() => {
            setShowForm(false);
            setEditingTransaction(null);
        }}
        onSave={handleSaveTransaction}
        type={formType}
        defaultValues={editingTransaction}
/>

    </div>
  );
}
