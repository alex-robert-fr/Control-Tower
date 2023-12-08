interface LineFormProps {
	name: string,
	children: React.ReactNode
}

function LineForm({name, children}: LineFormProps) {
	return (
		<div className="flex my-6">
			<p className="w-44 text-base text-gray-400 font-semibold">{name}</p>
			{children}
		</div>
	)
}

export default LineForm;
