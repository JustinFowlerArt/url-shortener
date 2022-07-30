export const NavMenu = ({ mobile }: { mobile: boolean }) => {
	return (
		<div
			className={`flex font-bold text-lg items-center ${
				mobile
					? 'flex-col  absolute z-10 top-24 left-1/2 -translate-x-1/2 w-[90%] space-y-6 py-10 rounded-lg text-white bg-dark-violet'
					: 'space-x-10 justify-between w-full text-gray-violet pl-10'
			}`}
		>
			<a className='hover:text-very-dark-violet' href='#'>Features</a>
			<a className='hover:text-very-dark-violet' href='#'>Pricing</a>
			<a className='hover:text-very-dark-violet' href='#'>Resources</a>
			<hr className='w-5/6 h-0.5 opacity-25 lg:opacity-0 lg:w-full'></hr>
			<a className='hover:text-very-dark-violet' href='#'>Login</a>
			<a
				href='#'
				className='rounded-full bg-primary-cyan py-3 w-5/6 mx-6 text-center text-white whitespace-nowrap hover:brightness-110 lg:w-auto lg:px-8 '
			>
				Sign Up
			</a>
		</div>
	);
};
