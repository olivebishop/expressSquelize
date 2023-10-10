import axios from 'axios';

const paystackSecretKey = 'sk_live_80cae2d059bcab2663e6bfa9c3269da29df5f017';

const fetchTransactionsEndpoint = 'https://api.paystack.co/transaction';

// Create a function to fetch transactions
const fetchTransactions = (req, res) => {
  axios.get(fetchTransactionsEndpoint, {
    headers: {
      Authorization: `Bearer ${paystackSecretKey}`,
    },
    params: {
      // You can add query parameters to filter transactions (e.g., status, date range).
    },
  })
  .then((response) => {
    const transactions = response.data.data;
    // Handle the transactions data here and send it to your frontend.
    res.json(transactions);
  })
  .catch((error) => {
    // Handle errors here and send an error response to the frontend.
    res.status(500).json({ error: 'An error occurred while fetching transactions.' });
  });
};

export default { fetchTransactions };
