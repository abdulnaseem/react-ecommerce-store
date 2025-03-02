import React, { useState } from "react";

const ExpiryDateInput: React.FC = () => {
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("26");

  // Handle Month Input (01-12)
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 2) value = value.slice(0, 2);
    if (parseInt(value) > 12) value = "12"; // Limit max to 12
    setMonth(value);
  };

  // Handle Year Input (00-99)
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 2) value = value.slice(0, 2);
    setYear(value);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Month Input */}
      <input
        type="text"
        inputMode="numeric"
        pattern="(0[1-9]|1[0-2])"
        placeholder="MM"
        aria-label="Expiration month"
        value={month}
        onChange={handleMonthChange}
        className="w-[100px] rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 text-center focus:border-blue-500 focus:ring-blue-500"
        required
      />

      <span className="text-white">/</span>

      {/* Year Input */}
      <input
        type="text"
        inputMode="numeric"
        pattern="\d{2}"
        placeholder="YY"
        aria-label="Expiration year"
        value={year}
        onChange={handleYearChange}
        className="w-[60px] rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 text-center focus:border-blue-500 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default ExpiryDateInput;
