// import React, { useState } from "react";
import "./css/BudgetMonitor.css";

interface BudetMonitorProps {
  tripSpend: number;
  tripBudget: number;
}

export default function BudgetMonitor({ tripSpend }: BudetMonitorProps) {
  return (
    <div className="budget-monitor-container">
      <div className="spend-value">
        ${tripSpend % 1 ? tripSpend.toFixed(2) : tripSpend}
      </div>
      {/* <div className="budget-value">/ {tripBudget}</div> */}
    </div>
  );
}
