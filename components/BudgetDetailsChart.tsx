import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import budgetData from '@/public/budgets.json';
type Budget = {
    category: string;
    maximum: number;
    theme: string;
    depence: number;
}

export default function BudgetDetailsChart(data: any) {
    const budgets: Budget[] = budgetData;
    const totalDepence = budgetData.reduce((sum, budget) => sum + budget.depence, 0);
    const totalLimit= budgetData.reduce((sum,budget)=> sum+budget.maximum,0);
    // Prepare data for the chart
    const chartData = budgets.map((budget) => ({
        name: budget.category,
        value: budget.maximum,
        fill: budget.theme,
        depence: budget.depence
    }));
    return (
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between gap-4 p-6 bg-white rounded-lg shadow-sm lg:max-h-1/2">
            <div className="w-full md:w-1/2 lg:w-full ">
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
                            ${totalDepence.toFixed(2)}
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
            <div className="w-full md:w-1/2 lg:w-full space-y-2">
                <div className="text-3xl font-bold">Spending Summary</div>
                {chartData.map((entry, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-2 text-sm"
                    >

                        <div className="flex justify-between w-full">
                            <div className="flex flex-row justify-center items-center gap-1">
                                <div
                                    className="w-1 h-12 "
                                    style={{ backgroundColor: entry.fill, borderRadius: 4 }}
                                ></div>
                                <span>{entry.name}</span></div>
                            <span className="text-gray-500 flex flex-row justify-center items-center">
                            ${entry.depence.toFixed(2)} of  ${entry.value.toFixed(2)}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}