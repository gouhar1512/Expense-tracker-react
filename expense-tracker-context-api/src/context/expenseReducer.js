import {
  ADD_TRANSACTION,
  REMOVE_ITEM,
  SET_INCOME,
  SET_EXPENSE,
  SET_BALANCE,
  SET_TRANS_HISTORY,
} from "./types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRANSACTION:
      return { ...state, transHistory: payload };

    case REMOVE_ITEM:
      return { ...state, transHistory: payload };

    case SET_INCOME:
      return { ...state, income: payload };

    case SET_EXPENSE:
      return { ...state, expense: payload };

    case SET_BALANCE:
      return { ...state, balance: payload };

    case SET_TRANS_HISTORY:
      return { ...state, transHistory: payload };

    default:
      return state;
  }
};
