import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { ApexOptions } from "apexcharts";
import './GraphUnit.css';

const Graphs: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexOptions = {
        chart: {
          type: 'bar',
          height: 450,
          width: 600,
          toolbar: { show: false }, // Oculta as opções de zoom e download, se não precisar delas
        },
        series: [{
          name: 'Desempenho (%)',
          data: [10, 55, 75, 25, 30, 85, 40, 95, 50, 55, 25, 65]
        }],
        xaxis: {
          categories: [
            'Artes', 'Educação Física', 'Filosofia', 'Sociologia', 'Inglês',
            'Física', 'Química', 'Biologia', 'Geografia', 'História',
            'Matemática', 'Língua Portuguesa'
          ],
          labels: {
            style: {
              fontFamily: 'Arial, sans-serif',
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: 'Arial, sans-serif',
              fontSize: '12px'
            }
          }
        },
        plotOptions: {
          bar: {
            distributed: true, // Isso torna cada barra com uma cor diferente
          }
        },
        colors: [
          "#5876A1", "#A1D2E6", "#F2B705", "#5FBA7D", "#D93636",
          "#C271AD", "#F57C00", "#81C784", "#FFD54F", "#90A4AE",
          "#FF8A65", "#AED581"
        ],
        tooltip: {
          theme: "light",
        }
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="centralizar-graphs">
      <div ref={chartRef}></div>
    </div>
  );
};

export default Graphs;
