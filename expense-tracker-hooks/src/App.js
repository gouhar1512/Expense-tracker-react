import React, { useState, useEffect } from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Transaction from "./components/Transaction";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transHistory, setTransHistory] = useState([]);

  const addTransaction = (props) => {
    let { text, price } = props;

    price = parseInt(price);
    if (price >= 0) {
      setIncome(income + price);
    } else {
      setExpense(expense - price);
    }

    let updatedHistory = [...transHistory];
    updatedHistory.push({
      id: Date.now(),
      text: text,
      price: price,
    });

    setTransHistory(updatedHistory);
  };

  useEffect(() => {
    setBalance(income - expense);
  }, [income, expense]);

  const removeItem = (e) => {
    let targetItem = e.target.getAttribute("itemkey");
    let updatedHistory = [...transHistory];

    for (let i = 0; i < updatedHistory.length; i++) {
      if (updatedHistory[i].id == targetItem) {
        if (updatedHistory[i].price < 0) {
          setExpense(expense + updatedHistory[i].price);
        } else {
          setIncome(income - updatedHistory[i].price);
        }
        updatedHistory.splice(i, 1);
        break;
      }
    }
    /*eslint eqeqeq: 0*/

    setTransHistory(updatedHistory);
  };

  return (
    <div className="App">
      <h3>Expense Tracker</h3>
      <Balance balance={balance} income={income} expense={expense} />
      <History transHistory={transHistory} removeItem={removeItem} />
      <Transaction addTransaction={addTransaction} />
    </div>
  );
};

export default App;
