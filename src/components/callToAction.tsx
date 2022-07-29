export const CallToAction = () => {
	return (
		<div className='px-6 pb-32 overflow-clip space-y-6'>
			<img
				src='/images/illustration-working.svg'
				className='max-w-[500px] my-8'
			></img>
			<h2 className='text-very-dark-violet text-4xl font-bold'>
				More than just shorter links
			</h2>
			<h3 className='text-gray-violet text-lg font-medium'>
				Build your brand’s recognition and get detailed insights on how your
				links are performing.
			</h3>
			<button className='rounded-full bg-primary-cyan py-3 px-8 text-white font-bold'>
				Get Started
			</button>
		</div>
	);
};
