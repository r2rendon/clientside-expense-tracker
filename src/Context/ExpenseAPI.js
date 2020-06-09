import axios from "axios";

export async function getTransactions(user) {
  console.log(user);
  const transactions = await axios(
    `http://localhost:5000/transactions/${user._id}`
  );
  return transactions.data;
}
