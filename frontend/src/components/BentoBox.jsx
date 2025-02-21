function BentoBox({ className, icon, title, description, children }) {
	return (
		<div
			className={`${className} overflow-hidden rounded-xl border border-gray-300 transition-shadow duration-200 hover:shadow-xl`}
		>
			<div className='flex h-full flex-col justify-between p-6'>
				<div>
					<div className='mb-4 flex items-center justify-center text-[#38bdf8]'>
						{icon}
					</div>
					<h3 className='mb-2 text-center text-lg font-medium text-gray-900'>
						{title}
					</h3>
					<p className='text-center text-sm text-gray-500'>{description}</p>
				</div>
				{children}
			</div>
		</div>
	)
}

export default BentoBox

// #02a2d8
