import { useState } from "react";
import { platform, series } from "./data/series.js";
import Header from "./components/Header.jsx";
import SeriesList from "./components/SeriesList.jsx";

function App() {
  const [onlyRunning, setOnlyRunning] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);

  const visibleSeries = (
    onlyRunning ? series.filter(item => !item.ended) : [...series]
  ).sort((a, b) => (sortByYear ? a.startYear - b.startYear : 0));

  return (
    <>
      <Header platform={platform} count={series.length} />
      <main className="page">
        <div className="toolbar">
          <button
            className={onlyRunning ? "btn btn--active" : "btn"}
            onClick={() => setOnlyRunning(!onlyRunning)}
          >
            רק סדרות משודרות
          </button>
          <button
            className={sortByYear ? "btn btn--active" : "btn"}
            onClick={() => setSortByYear(!sortByYear)}
          >
            מיון לפי שנה
          </button>
        </div>

        <h2 className="page__title">הסדרות ({visibleSeries.length})</h2>
        <SeriesList series={visibleSeries} />
      </main>
    </>
  );
}

export default App;