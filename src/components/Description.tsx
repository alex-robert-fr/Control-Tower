import Section from "./Section";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface DescriptionProps {
	isLoadingProject: boolean,
	isErrorProject: boolean,
	description?: string,
}

function Description({isLoadingProject, isErrorProject, description}: DescriptionProps) {
	return (
		<Section title="Description du projet">
			{ isLoadingProject || isErrorProject ? (
				<Skeleton count={2} containerClassName="flex-1" />
			) : (
				<>
					<p className="text-left">{description}</p>
					<button className="mt-5 font-bold text-blue-600">Voir plus</button>
				</>
			)}
		</Section>
	);
}

export default Description;
