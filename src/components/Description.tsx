import Section from "./Section";

interface DescriptionProps {
	description?: string,
}

function Description({description}: DescriptionProps) {
	return (
		<Section title="Description du projet">
			<p className="text-left">{description}</p>
			<button className="mt-5 font-bold text-blue-600">Voir plus</button>
		</Section>
	);
}

export default Description;
