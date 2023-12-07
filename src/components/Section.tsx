interface SectionProps {
	title: string,
	children: React.ReactNode,
	className?: string
}

function Section({title, children, className}: SectionProps) {
	return(
		<div className={`${className || ''} border border-black rounded-xl border-gray-200 p-8`}>
			<h2 className="text-2xl font-bold mb-7 text-left text-gray-700">
				{title}
			</h2>
			{children}
		</div>
	)
}

export default Section;
