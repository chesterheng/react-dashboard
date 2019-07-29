import React, { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="chart-row">
        <div id="country-revenue">country revenue chart here</div>
      </div>

      <div className="chart-row">
        <div id="monthly-revenue" className="inline-chart">
          chart 2 here - spline
        </div>
        <div id="product-revenue" className="inline-chart">
          chart 3 here - donut
        </div>
      </div>
    </Fragment>
  );
}

export default App;
