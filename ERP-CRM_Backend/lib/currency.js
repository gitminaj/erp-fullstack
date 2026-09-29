import { Currency } from "../models/questionnaire/currency.js";

const currency = ["INR", "USD", "LKR", "AED", "EUR", "RUBLES"];

export const seedCurrency = async () => {
  for (const currencyType of currency) {
    await Currency.findOrCreate({
      where: { name: currencyType },
    });
  }
};
