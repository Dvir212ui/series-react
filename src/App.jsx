import { platform, series } from "./data/series.js";
import Header from "./components/Header.jsx";
import SeriesCard from "./components/SeriesCard.jsx";

function App() {
  return (
    <>
      <Header platform={platform} count={series.length} />
      <main className="page">
        <SeriesCard
          title="Desert Signal"
          genre="Sci-Fi"
          startYear={2025}
          creator="Maya Alon"
          ended={false}
          nextYear={2027}
          seasons={[]}
        />
      </main>
    </>
  );
}

export default App;