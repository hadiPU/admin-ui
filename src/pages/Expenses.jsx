import { useState, useEffect } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseItem from "../components/Elements/CardExpenseItem";
import CircularProgress from "@mui/material/CircularProgress";
import { expensesService } from "../services/dataService";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expensesService();
        setExpenses(data);
      } catch (error) {
        console.error("Gagal mengambil data expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="text-gray-01 mb-4">Expenses Comparison</div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-96 text-primary">
          <CircularProgress color="inherit" size={50} enableTrackSlot />
          <div className="mt-2">Loading Data</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {expenses.map((expense) => (
            <CardExpenseItem
              key={expense.category}
              icon={expense.category}
              category={expense.category}
              amount={expense.amount}
              percentage={expense.percentage}
              trend={expense.trend}
              items={expense.detail}
            />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default Expenses;
