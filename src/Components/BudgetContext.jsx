import { createContext, useContext, useState, useEffect, useRef } from "react";

const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export const BudgetProvider = ({ children }) => {
  const [expenseData, setExpenseData] = useState(
    JSON.parse(localStorage.getItem("expenseData")) || []
  );
  const idCounter = useRef(1);
  const [spent, setSpent] = useState(0);
  const [remain, setRemain] = useState(2000);

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
    calculateSpent(expenseData);
  }, [expenseData]);

  const calculateSpent = (updatedData) => {
    const totalSpent = updatedData.reduce((acc, expense) => {
      return acc + parseFloat(expense.expense);
    }, 0);
    setSpent(totalSpent);
    const remaining = 2000 - totalSpent;
    setRemain(remaining);
  };

  const submitExpense = (name, expense) => {
    const newData = {
      id: idCounter.current++,
      name: name,
      expense: expense,
    };
    const updatedData = [...expenseData, newData];
    setExpenseData(updatedData);
    calculateSpent(updatedData);
  };

  const deleteExpense = (expenseId) => {
    const updated = expenseData.filter((expense) => expense.id !== expenseId);
    setExpenseData(updated);
    calculateSpent(updated);
  };

  const budgetContextValue = {
    expenseData,
    spent,
    remain,
    submitExpense,
    deleteExpense,
  };

  return (
    <BudgetContext.Provider value={budgetContextValue}>
      {children}
    </BudgetContext.Provider>
  );
};