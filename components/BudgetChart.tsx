import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface Budget {
  category: string;
  maximum: number;
  theme: string;
}

interface BudgetChartProps {
  budgets: Budget[];
}

const BudgetChart: React.FC<BudgetChartProps> = ({ budgets }) => {
  // Total budget limit
  const totalLimit = budgets.reduce((sum, budget) => sum + budget.maximum, 0);

  // Prepare data for the chart
  const chartData = budgets.map((budget) => ({
    name: budget.category,
    value: budget.maximum,
    fill: budget.theme,
  }));

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white rounded-lg shadow-sm">
      {/* Donut Chart */}
      <div className="w-full md:w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>

            {/* Center Text */}
            <text
              x="50%"
              y="47%"
              textAnchor="middle"
              dominantBaseline="central"
              className="text-2xl font-bold"
            >
              ${totalLimit.toFixed(2)}
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="central"
              className="text-xs text-gray-200"
            >
              of ${totalLimit.toFixed(2)} limit
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="w-full md:w-1/4 space-y-2">
        {chartData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-sm"
          >
            <div
              className="w-1 h-12 "
              style={{ backgroundColor: entry.fill,borderRadius:4 }}
            ></div>
            <div className="flex flex-col gap-0.5">
          <span className="font-medium">{entry.name}</span>
            <span className="text-gray-500">
              ${entry.value.toFixed(2)}
            </span>
            </div>
  
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetChart;