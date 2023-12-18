import InformationsSection from "../organisms/Sections/InformationsSection";
import "../../App.css";
import EvaluationsSection from "../organisms/Sections/EvaluationsSection";

function App_v2() {
  return (
    <main className="sm:shadow-custom sm:m-8 rounded-lg">
      <InformationsSection />
			<EvaluationsSection />
    </main>
  );
}

export default App_v2;
