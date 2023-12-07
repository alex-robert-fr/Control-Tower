interface SectionProps {
	title: string,
	children: React.ReactNode,
	className?: string
}

function Section({title, children, className}: SectionProps) {
	return(
		<div className={`${className || ''} border border-black`}>
			<h2>
				{title}
			</h2>
			{children}
		</div>
	)
}

export default Section;
