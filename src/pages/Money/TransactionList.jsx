import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";

export default function TransactionList({ transactions, onEdit, onDelete, formatRupiah }) {
  return (
    <div className="table-responsive">
      <Table hover size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th className="text-end">Amount</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No transactions available.
              </td>
            </tr>
          ) : (
            transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td>{tx.category}</td>
                <td className={`text-end ${tx.type === "income" ? "text-success" : "text-danger"}`}>
                  {tx.type === "income" ? "+" : "−"} {formatRupiah(tx.amount)}
                </td>
                <td className="text-end">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="me-2"
                    onClick={() => onEdit(tx.id)}
                  >
                    <BsPencil size={14} />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onDelete(tx.id)}
                  >
                    <BsTrash size={14} />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
