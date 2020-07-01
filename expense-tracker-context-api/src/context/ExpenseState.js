import React, { useReducer, useEffect } from "react";
import ExpenseContext from "./expenseContext";
import ExpenseReducer from "./expenseReducer";

import {
  ADD_TRANSACTION,
  REMOVE_ITEM,
  SET_INCOME,
  SET_EXPENSE,
  SET_BALANCE,
  SET_TRANS_HISTORY,
} from "./types";

const ExpenseState = (props) => {
  let initialState = {
    text: "",
    price: 0,
    balance: 0,
    income: 0,
    expense: 0,
    transHistory: [],
  };

  let [state, dispatch] = useReducer(ExpenseReducer, initialState);

  let { text, price, balance, income, expense, transHistory } = state;

  const addTransaction = (text2, price2) => {
    text = text2;
    price = price2;
    if (price >= 0) {
      setIncome();
    } else {
      setExpense();
    }
    let updatedHistory = [...transHistory];
    updatedHistory.push({
      id: Date.now(),
      text: text,
      price: price,
    });

    setTransHistory(updatedHistory);
    dispatch({
      type: ADD_TRANSACTION,
      payload: transHistory,
    });
  };

  const removeItem = (e) => {
    let targetItem = e.target.getAttribute("itemkey");
    let updatedHistory = [...transHistory];

    for (let i = 0; i < updatedHistory.length; i++) {
      let currPrice = updatedHistory[i].price;
      if (updatedHistory[i].id == targetItem) {
        if (currPrice < 0) {
          price = -currPrice;
          setExpense();
        } else {
          price = -currPrice;
          setIncome();
        }
        updatedHistory.splice(i, 1);

        setTransHistory(updatedHistory);

        break;
      }
    }

    dispatch({
      type: REMOVE_ITEM,
      payload: transHistory,
    });
  };

  useEffect(() => {
    setBalance();
  }, [income, expense]);

  // eslint-disable-next-line
  const setIncome = () => {
    income += price;
    dispatch({
      type: SET_INCOME,
      payload: income,
    });
  };

  const setExpense = () => {
    expense += price;
    dispatch({
      type: SET_EXPENSE,
      payload: expense,
    });
  };

  const setBalance = () => {
    balance = income + expense;
    dispatch({
      type: SET_BALANCE,
      payload: balance,
    });
  };

  const setTransHistory = (updatedHistory) => {
    transHistory = [...updatedHistory];
    dispatch({
      type: SET_TRANS_HISTORY,
      payload: updatedHistory,
    });
  };

  /*eslint eqeqeq: 0*/

  return (
    <ExpenseContext.Provider
      value={{
        text: text,
        price: price,
        balance: balance,
        income: income,
        expense: expense,
        transHistory: transHistory,
        addTransaction,
        removeItem,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
