import React, { useState } from "react";
import type { BudetMonitorProps } from "../types/allTypes";

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
