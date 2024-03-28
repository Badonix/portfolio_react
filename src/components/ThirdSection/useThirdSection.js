import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { animate, inView } from "framer-motion";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

export const useThirdSection = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        font: {
          weight: "bold",
          family: "Ubuntu",
          size: "24px",
        },
        padding: {
          bottom: 40,
        },
        text: "Web Technologies",
      },
    },
  };
  const labels = ["React/Next", "Express", "Laravel", "Vue"];

  const data = {
    labels,
    datasets: [
      {
        data: [5, 5, 4, 3],
        backgroundColor: "rgba(255, 166, 0, 0.8)",
      },
    ],
  };

  useEffect(() => {
    inView("#in-view2", () => {
      const chartAnimation = animate(
        ".chart",
        { y: [200, 0], scale: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5 }
      );

      return () => {
        chartAnimation.stop();
      };
    });
  });
  return { data, options, Bar };
};
