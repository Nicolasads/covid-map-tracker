import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem(
    "1,000,000 +",
    "#B03A2E",
    (cases) => cases >= 1_000_000,
    "white"
  ),
  new LegendItem(
    "500,000 - 999,999",
    "#EC7063",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "white"
  ),
  new LegendItem(
    "200,000 - 499,999",
    "#F1948A",
    (cases) => cases >= 200_000 && cases < 500_000,
    "white"
  ),
  new LegendItem(
    "50,000 - 199,999",
    "#FADBD8",
    (cases) => cases >= 50_000 && cases < 200_000,
    "white"
  ),
  new LegendItem(
    "0 - 49,999",
    "#FDEDEC ",
    (cases) => cases > 0 && cases < 50_000,
    "white"
  ),
  new LegendItem("No Data", "white", (cases) => true),
];

export default legendItems;
