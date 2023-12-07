interface LineFormProps {
	name: string,
	children: React.ReactNode
}

function LineForm({name, children}: LineFormProps) {
	return (
		<div>
			<p>{name}</p>
			{children}
		</div>
	)
}

export default LineForm;
