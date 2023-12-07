import './App.css';
import Section from './components/Section.tsx';
import LineForm from './components/LineForm.tsx';
import Array from './components/Array.tsx';

function App() {
  return (
    <main className="shadow-custom rounded-lg pb-1">
			<h1 className="text-2xl uppercase font-bold text-left ml-6 pt-6">
				Extension des capacités logistiques (com_rdi_001)
			</h1>
			<section className="m-6 mb-0 grid grid-cols-2 gap-4">
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
					<table className="w-3/4">
						<thead className="text-gray-500">
							<tr>
								<th>
									Domaine
								</th>
								<th>
									Programme
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-2">
									<p className="inline uppercase text-xs border border-gray-400 py-1 px-2 rounded-full">
										Fonction commerciale
									</p>
								</td>
								<td>
									<p className="inline text-xs border border-gray-300 p-1.5 rounded">
										Microsoft
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</Section>
				<button className="col-start-2 justify-self-end bg-blue-500 text-white font-bold px-4 py-1.5 rounded-md my-2">Nouvelle évaluation</button>
			</section>
			<Array/>
    </main>
  )
}

export default App;
