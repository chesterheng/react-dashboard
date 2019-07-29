import React, { Fragment } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import {
  countryChartConfigs,
  monthlyChartConfigs,
  productChartConfigs
} from "./settings";
import "./App.css";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function App() {
  return (
    <Fragment>
      <div className="chart-row">
        <div id="country-revenue">
          <ReactFC {...countryChartConfigs} />
        </div>
      </div>

      <div className="chart-row">
        <div id="monthly-revenue" className="inline-chart">
          <ReactFC {...monthlyChartConfigs} />
        </div>
        <div id="product-revenue" className="inline-chart">
          <ReactFC {...productChartConfigs} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
