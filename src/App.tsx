import './App.css';
import Section from './components/Section.tsx';
import LineForm from './components/form/LineForm.tsx';
import Array from './components/Array.tsx';
import FormManager from './components/form/FormManager.tsx';

function App() {
  return (
    <main className="shadow-custom rounded-lg pb-1">
			<h1 className="text-2xl uppercase font-bold text-left ml-6 pt-6">
				Extension des capacités logistiques (com_rdi_001)
			</h1>
			<section className="m-6 mb-0 grid grid-cols-2 gap-4">
				<Section className="row-span-2" title="Informations">
					<div className="flex flex-col">
						<FormManager />
						<LineForm name="Statut">
							<select name="status">
								<option value="en cadrage">
									En cadrage
								</option>
								<option value="en cours">
									En cours
								</option>
								<option value="terminé">
									Terminé
								</option>
							</select>
						</LineForm>
						<LineForm name="Modèle de risque">
							<select name="model">
								<option value="model 1">
									Modèle 1
								</option>
								<option value="model 2">
									Modèle 2
								</option>
								<option value="model 3">
									Modèle 3
								</option>
							</select>
						</LineForm>
						<LineForm name="Dates">
							<input type="date" name="start-date" defaultValue="2023-12-07" />
							<p>➔</p>
							<input type="date" name="end-date" defaultValue="2023-12-08" />
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
				<p className="justify-self-start self-center text-emerald-500 font-bold text-lg">
					Évaluations validées ✓
				</p>
				<button className="col-start-2 justify-self-end bg-blue-500 text-white font-bold px-4 py-1.5 rounded-md my-2">Nouvelle évaluation</button>
			</section>
			<Array/>
    </main>
  )
}

export default App;
