import React, { useReducer } from "react";
import ExpenseContext from "./expenseContext";
import ExpenseReducer from "./expenseReducer";
import { SET_TRANS_HISTORY } from "./types";

const ADD_TRANSACTION = "ADD_TRANSACTION";
const REMOVE_ITEM = "REMOVE_ITEM";

const ExpenseState = (props) => {
  const initialState = {
    text: "",
    price: 0,
    balance: 0,
    income: 0,
    expense: 0,
    transHistory: [],
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const addTransaction = () => {
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

    setTransHistory();
  };

  const removeItem = (e) => {
    let targetItem = e.target.getAttribute("itemkey");
    let updatedHistory = [...transHistory];

    for (let i = 0; i < updatedHistory.length; i++) {
      if (updatedHistory[i].id == targetItem) {
        if (updatedHistory[i].price < 0) {
          price = -updatedHistory[i].price;
          setExpense();
        } else {
          price = updatedHistory[i].price;
          setIncome();
        }
        updatedHistory.splice(i, 1);
        break;
      }
    }

    useEffect(() => {
      setBalance();
    }, [income, expense]);

    const setIncome = () => {
      dispatch({
        type: SET_INCOME,
        payload: income + price,
      });
    };

    const setExpense = () => {
      dispatch({
        type: SET_EXPENSE,
        payload: expense - price,
      });
    };

    const setBalance = () => {
      dispatch({
        type: SET_BALANCE,
        payload: income - expense,
      });
    };

    const setTransHistory = () => {
      dispatch({
        type: SET_TRANS_HISTORY,
        payload: updatedHistory,
      });
    };

    /*eslint eqeqeq: 0*/

    setTransHistory(updatedHistory);
  };
};
