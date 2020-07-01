import React from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Transaction from "./components/Transaction";
import ExpenseState from "./context/ExpenseState";

import "./App.css";

const App = () => {
  return (
    <ExpenseState>
      <div className="App">
        <h3>Expense Tracker</h3>
        <Balance />
        <History />
        <Transaction />
      </div>
    </ExpenseState>
  );
};

export default App;
