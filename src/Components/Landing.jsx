import { MdDelete } from "react-icons/md";
import { useBudget } from "./BudgetContext";
import Form from "./Form";

const Landing = () => {
  const { expenseData, spent, reLanding, deleteExpense } = useBudget();

  return (
    <div>
      <h1 className="mb-5 text-4xl font-semibold text-center">
        My Budget Planner
      </h1>
      <div className="flex justify-between my-10 mx-36">
        <div className="p-2 font-semibold text-white  bg-lime-600 border rounded-md shadow-lg">
          Budget: $2000
        </div>
        <div className="p-2 font-semibold text-white bg-lime-600 border rounded-md shadow-lg">
          ReLandinging: ${reLanding}
        </div>
        <div className="p-2 font-semibold text-white bg-lime-600 border rounded-md shadow-lg">
          Spent so far: ${spent}
        </div>
      </div>
      <div>
        <div>
          <h2 className="my-5 text-3xl mx-36">Expenses</h2>
        </div>
        <div className=" mx-36">
          {expenseData.length === 0 ? (
            <p className="text-2xl">Add Expense to the list...</p>
          ) : (
            <>
              {expenseData.map((expense) => (
                <div
                  className="flex items-center justify-between p-3 my-3 bg-gray-200 rounded-md"
                  key={expense.id}
                >
                  <p>{expense.name}</p>
                  <div className="flex items-center">
                    <p className="mr-5">${expense.expense}</p>
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="btn btn-primary p-1  text-red-700 text-[20px] hover:animate-bounce"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div>
        <div>
          <h2 className="my-5 text-3xl mx-36">Add Expense</h2>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Landing;
