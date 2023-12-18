import InformationsSection from "../organisms/Sections/InformationsSection";
import "../../App.css";
import EvaluationsSection from "../organisms/Sections/EvaluationsSection";
import useProject from "../../hooks/useProject";

function App_v2() {
  const { data, isLoading } = useProject();

  return (
    <main className="sm:shadow-custom sm:m-8 rounded-lg">
      <InformationsSection projectData={data} isLoadingProject={isLoading} />
      <EvaluationsSection projectData={data} isLoadingProject={isLoading} />
    </main>
  );
}

export default App_v2;
