import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import Navibar from "../navibar/Navibar";
import Rodape from "../rodape/Rodape";
import { ApexOptions } from "apexcharts";
import whiteBoard from "C:/Users/HACKATHON/pastaNova/hackathon/src/imagem/cartaoBranco.png";
import "./Desempenho.css";
import Modal from "../modal/Modal";

// Dados de desempenho para cada matéria (exemplo para 4 bimestres)
const subjectsPerformance: Record<string, number[]> = {
  "Artes": [65, 70, 75, 80],
  "Educação Física": [60, 65, 70, 75],
  "Filosofia": [50, 55, 60, 65],
  "Sociologia": [55, 60, 65, 70],
  "Inglês": [70, 75, 80, 85],
  "Física": [45, 50, 55, 60],
  "Química": [60, 63, 68, 70],
  "Biologia": [50, 55, 60, 65],
  "Geografia": [65, 68, 72, 75],
  "História": [55, 58, 60, 62],
  "Matemática": [75, 80, 85, 90],
  "Língua Portuguesa": [68, 72, 75, 78],
};

const Graphs: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Estados para controlar o popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [bimesterData, setBimesterData] = useState<number[]>([]);

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexOptions = {
        chart: {
          type: 'bar',
          height: 450,
          width: 600,
          toolbar: { show: false },
          events: {
            dataPointSelection: (event, chartContext, config) => {
              const subject = config.w.config.xaxis.categories[config.dataPointIndex] as keyof typeof subjectsPerformance;
              if (subject && subjectsPerformance[subject]) {
                setSelectedSubject(subject);
                setBimesterData(subjectsPerformance[subject]);
                setShowPopup(true);
              }
            }
          }
        },
        series: [{
          name: 'Desempenho (%)',
          data: [10, 55, 75, 25, 30, 85, 40, 95, 50, 55, 25, 65]
        }],
        xaxis: {
          categories: Object.keys(subjectsPerformance),
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
            distributed: true,
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
    <div>
      <Navibar />
      <div className="main-container">
        {/* Boletim listado à esquerda */}
        <div className="text-container">
          <h1 className="boletim">Boletim</h1>
          <ul className="boletim-list">
            {Object.entries(subjectsPerformance).map(([subject, scores]) => (
              <li key={subject}>
                {subject}: {scores[0]}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Gráfico à direita com popups para detalhes */}
        <div className="centralizar-graphs-container">
          <div className="background-image-container">
            <img src={whiteBoard} alt="background" className="background-image" />
          </div>
          <div className="centralizar-graphs">
            <div ref={chartRef}></div>

            {/* Modal para o popup com detalhes do bimestre */}
            {showPopup && selectedSubject && (
              <Modal onClose={() => setShowPopup(false)}>
                <h2>{selectedSubject} - Desempenho ao longo dos bimestres</h2>
                <MiniGraph data={bimesterData} />
              </Modal>
            )}
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

// Componente MiniGraph para renderizar o gráfico menor
const MiniGraph: React.FC<{ data: number[] }> = ({ data }) => {
  const miniChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (miniChartRef.current) {
      const options: ApexOptions = {
        chart: {
          type: 'line',
          height: 200,
          width: 300,
        },
        series: [{
          name: 'Notas',
          data: data
        }],
        xaxis: {
          categories: ['1º Bimestre', '2º Bimestre', '3º Bimestre', '4º Bimestre']
        },
        colors: ["#FF5733"]
      };

      const chart = new ApexCharts(miniChartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <div ref={miniChartRef}></div>;
};

export default Graphs;
