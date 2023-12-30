import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const BarChart = ({ expenses }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!expenses || expenses.length === 0) return;

    const ctx = chartRef.current.getContext('2d');

    // Extract data for the chart
    const dataByMonth = {};
    expenses.forEach((expense) => {
      const monthYear = expense.date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
      if (!dataByMonth[monthYear]) {
        dataByMonth[monthYear] = 0;
      }
      dataByMonth[monthYear] += expense.amount;
    });

    // Create the chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(dataByMonth),
        datasets: [
          {
            label: 'Total Expenses',
            data: Object.values(dataByMonth),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [expenses]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default BarChart;
