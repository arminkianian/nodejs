import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList, { type Expense } from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const ExpenseTracker = () => {
  const [selectedCategory, setSelecterCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      description: "sss",
      amount: 1,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Expense 2",
      amount: 1,
      category: "Utilities",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelecterCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
};

export default ExpenseTracker;
