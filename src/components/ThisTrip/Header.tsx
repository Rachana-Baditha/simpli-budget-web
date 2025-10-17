import { useState } from "react";
import "./css/Header.css";

interface HeaderProps {
  title: string;
  tripCurrency: string;
  setTripCurrency: (newCurrency: string) => void;
  CURRENCY_LIST: string[];
  setAllTransactions: (newList: any[]) => void;
}
export default function Header({
  title,
  tripCurrency,
  setTripCurrency,
  CURRENCY_LIST,
  setAllTransactions,
}: HeaderProps) {
  const [showReset, setShowReset] = useState(false);
  function toggleCurrency() {
    setTripCurrency(
      CURRENCY_LIST[
        (CURRENCY_LIST.indexOf(tripCurrency) + 1) % CURRENCY_LIST.length
      ]
    );
  }
  function toggleReset() {
    setShowReset(!showReset);
  }
  function handleReset() {
    setAllTransactions([]);
    setShowReset(false);
  }
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <div className="header-title" onClick={toggleReset}>
          {" "}
          {title}
        </div>
        {showReset && (
          <div className="reset-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={20}
              onClick={handleReset}
            >
              <path d="M480-16c6.9 0 13 4.4 15.2 10.9l13.5 40.4 40.4 13.5C555.6 51 560 57.1 560 64s-4.4 13-10.9 15.2l-40.4 13.5-13.5 40.4C493 139.6 486.9 144 480 144s-13-4.4-15.2-10.9l-13.5-40.4-40.4-13.5C404.4 77 400 70.9 400 64s4.4-13 10.9-15.2l40.4-13.5 13.5-40.4C467-11.6 473.1-16 480-16zM321.4 97.4c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-10.9 10.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S32 418.9 32 304 125.1 96 240 96c24.7 0 48.5 4.3 70.5 12.3l10.9-10.9zM144 304c0-53 43-96 96-96 13.3 0 24-10.7 24-24s-10.7-24-24-24c-79.5 0-144 64.5-144 144 0 13.3 10.7 24 24 24s24-10.7 24-24z" />
            </svg>
          </div>
        )}
      </div>
      <div className="header-currency" onClick={toggleCurrency}>
        {tripCurrency}
      </div>
    </div>
  );
}
