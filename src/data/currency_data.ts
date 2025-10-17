const response = await fetch("https://open.er-api.com/v6/latest/USD");
const data = await response.json();

const to_usd: Record<string, number> = {
  USD: 1,
  EUR: Number((1 / data.rates.EUR).toFixed(2)),
};

const currency_symbol: Record<string, string> = {
  USD: "$",
  EUR: "€",
};

export { to_usd, currency_symbol };
