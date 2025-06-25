import React from "react";
import { BsCheck2Square, BsBullseye, BsJournalText, BsActivity } from "react-icons/bs";

export default function Quicklinks() {
  return (
    <div>
      <h2 className="mb-4">Quicklinks</h2>
      <div className="d-flex flex-wrap gap-3">
        <a href="/todo" className="btn btn-outline-primary d-flex align-items-center gap-2">
          <BsCheck2Square /> To-do List
        </a>
        <a href="/goals" className="btn btn-outline-success d-flex align-items-center gap-2">
          <BsBullseye /> Goals
        </a>
        <a href="/journal" className="btn btn-outline-warning d-flex align-items-center gap-2">
          <BsJournalText /> Journal
        </a>
        <a href="/body" className="btn btn-outline-info d-flex align-items-center gap-2">
          <BsActivity /> Body Tracker
        </a>
      </div>
    </div>
  );
}
