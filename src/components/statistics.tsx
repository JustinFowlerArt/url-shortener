export const Statistics = () => {
	return (
		<div className='space-y-20 -mt-28 px-6 pb-16'>
			<div className='space-y-4'>
				<h2 className='text-very-dark-violet text-2xl font-bold'>
					Advanced Statistics
				</h2>
				<p className='text-gray-violet text-sm font-medium leading-6'>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div className='relative space-y-20'>
				<div className='relative z-10 flex flex-col items-center bg-white pb-6'>
					<div className='relative -top-9 bg-dark-violet p-4 rounded-full'>
						<img
							className='scale-90'
							src='/images/icon-brand-recognition.svg'
						></img>
					</div>
					<h3 className='text-very-dark-violet text-lg font-bold -mt-3 mb-3'>
						Brand Recognition
					</h3>
					<p className='text-gray-violet text-xs font-medium leading-6 px-10'>
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</div>

				<div className='relative z-10 flex flex-col items-center bg-white pb-6'>
					<div className='relative -top-9 bg-dark-violet p-4 rounded-full'>
						<img
							className='scale-90'
							src='/images/icon-detailed-records.svg'
						></img>
					</div>
					<h3 className='text-very-dark-violet text-lg font-bold -mt-3 mb-3'>
						Detailed Records
					</h3>
					<p className='text-gray-violet text-xs font-medium leading-6 px-10'>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</div>

				<div className='relative z-10 flex flex-col items-center bg-white pb-6'>
					<div className='relative -top-9 bg-dark-violet p-4 rounded-full'>
						<img
							className='scale-90'
							src='/images/icon-fully-customizable.svg'
						></img>
					</div>
					<h3 className='text-very-dark-violet text-lg font-bold -mt-3 mb-3'>
						Fully Customizable
					</h3>
					<p className='text-gray-violet text-xs font-medium leading-6 px-10'>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>

				<div className='absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-[7px] h-full bg-primary-cyan'></div>
			</div>
		</div>
	);
};
