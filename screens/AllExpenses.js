import { useContext } from "react";

import { ExpensesContext } from "../store/expense-context";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered found!"
    />
  );
};

export default AllExpenses;
