// import React, { useState } from "react";

interface BudetMonitorProps {
  tripSpend: number;
  tripBudget: number;
}

export default function BudgetMonitor({
  tripSpend,
  tripBudget,
}: BudetMonitorProps) {
  return (
    <div>
      {tripSpend} / {tripBudget}
    </div>
  );
}
