import React from "react";
import { Chrono } from "react-chrono";

import "./index.css";

const ReactChrono = () => {
  const items = [
    {
      cardTitle: "February 12, 2024",
      cardSubtitle: "Industrial Production",
      cardDetailedText:
        "Index of industrial text grow by 3.5% YoY in Decembera compared to a 5.1% Yoy growth last year.Electricity has seen the lowest growth as 1.5% YoY in December as compared to a 10.4% Yoy growth last year",
    },
    {
      cardTitle: "March 15, 2024",
      cardSubtitle: "CPI Inflation",
      cardDetailedText:
        "India's inflation as eased to 5.1% in Jan, a 60 basic points has decreased since last month. Consumer Food Price Index has decreased from 9.5 % in December 23 to 8.1 % in Jan",
    },
  ];

  return (
    <div className="react-chrono-container">
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};

export default ReactChrono;
