import './App.css';
import Array from './components/Array.tsx';
import {useQuery} from 'react-query';
import Info from './components/Info.tsx';
import {useEffect} from 'react';

function App() {
	const updateProject = {
		name: "Nouveau nom",
		description: "Lorem"
	}
	const updateTest = async () => {
		const res = await fetch("http://localhost:3000/project_management/project/1", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updateProject),
		});
		const data = await res.json();
		console.log(data);
	}
	useEffect(() => {
		console.log("Call")
		//updateTest();
	}, [])

	return (
    <main className="shadow-custom rounded-lg pb-1">
			<Info />
			<Array/>
    </main>
  )
}

export default App;
