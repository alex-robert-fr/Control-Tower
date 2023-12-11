import {useState} from "react";
import Section from "./Section";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface DescriptionProps {
	isLoadingProject: boolean,
	isErrorProject: boolean,
	description?: string,
}

function Description({isLoadingProject, isErrorProject, description}: DescriptionProps) {
	const [showMore, setShowMore] = useState(false);
	return (
		<Section title="Description du projet">
			{ isLoadingProject || isErrorProject ? (
				<Skeleton count={2} containerClassName="flex-1" />
			) : (
				<>
					<p className="text-left">{showMore ? description : `${description?.substring(0, 100)}... `}</p>
					<button className="mt-5 font-bold text-blue-600" onClick={() => setShowMore(!showMore)}>{showMore ? "Voir moins" : "Voir plus"}</button>
				</>
			)}
		</Section>
	);
}

export default Description;
