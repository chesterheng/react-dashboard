import React, { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div class="chart-row">
        <div id="country-revenue"></div>
      </div>

      <div class="chart-row">
        <div id="monthly-revenue" class="inline-chart"></div>
        <div id="product-revenue" class="inline-chart"></div>
      </div>
    </Fragment>
  );
}

export default App;
