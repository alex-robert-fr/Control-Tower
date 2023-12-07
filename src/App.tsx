import './App.css';
import Section from './components/Section.tsx';
import LineForm from './components/LineForm.tsx';

function App() {
  return (
    <main className="shadow-xl rounded-lg">
			<h1 className="text-2xl uppercase font-bold text-left ml-6">
				Extension des capacités logistiques (com_rdi_001)
			</h1>
			<section className="m-6 grid grid-cols-2 gap-4">
				<Section className="row-span-2" title="Informations">
					<div>
						<LineForm name="Manager">
							<div>
								<button>JDO</button>
								<button>John Doe</button>
							</div>
						</LineForm>
						<LineForm name="Statut">
							<p>En cours</p>
						</LineForm>
						<LineForm name="Modèle de risque">
							<p>Modèle 1</p>
						</LineForm>
						<LineForm name="Dates">
							<p>4 septembre 2023 -> 18 décembre 2023</p>
						</LineForm>
					</div>
				</Section>
				<Section title="Description du projet">
					<p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id orci placerat, pulvinar metus eu.</p>
					<button className="mt-5 font-bold text-blue-600">Voir plus</button>
				</Section>
				<Section title="Domaine et programme">
				</Section>
			</section>
    </main>
  )
}

export default App;
