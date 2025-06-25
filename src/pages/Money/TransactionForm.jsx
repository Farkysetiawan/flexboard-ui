import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const incomeCategories = ["Gaji", "Bonus", "Investasi", "Dividen", "Lainnya"];
const expenseCategories = ["Makan", "Transportasi", "Belanja", "Hiburan", "Kesehatan", "Lainnya"];

export default function TransactionForm({ show, onHide, onSave, type, defaultValues }) {
  const isEditMode = !!defaultValues;

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const categoryOptions = type === "income" ? incomeCategories : expenseCategories;

  useEffect(() => {
    if (show) {
      if (isEditMode && defaultValues) {
        setDate(defaultValues.date);
        setDescription(defaultValues.description);
        setCategory(defaultValues.category);
        setAmount(defaultValues.amount);
      } else {
        // Reset form only if not edit mode
        setDate(new Date().toISOString().split("T")[0]);
        setDescription("");
        setCategory(type === "income" ? incomeCategories[0] : expenseCategories[0]);
        setAmount("");
      }
    }
  }, [show, isEditMode, defaultValues, type]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      date,
      description,
      category,
      amount: parseFloat(amount),
      type,
    };

    if (isEditMode && defaultValues.id) {
      transactionData.id = defaultValues.id; // pertahankan ID untuk update
    }

    onSave(transactionData);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditMode ? "Edit Transaction" : `Add ${type === "income" ? "Income" : "Expense"}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Freelance Payment"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categoryOptions.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAmount">
            <Form.Label>Amount (Rp)</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0"
              step="any"
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
