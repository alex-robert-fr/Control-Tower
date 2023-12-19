import { EvaluationsSection, InformationsSection } from "@organisms/Sections";

export default function App() {
  return (
    <main className="sm:shadow-custom sm:m-8 rounded-lg">
      <InformationsSection />
      <EvaluationsSection />
    </main>
  );
}
