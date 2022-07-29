import { useState } from 'react';

export const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='relative flex justify-between px-6 pt-9'>
			<img src='/images/logo.svg'></img>
			<nav className=''>
				<i
					className='fa-solid fa-bars text-gray-violet text-2xl lg:hidden'
					onClick={() => setOpen(!open)}
				></i>
				{open && (
					<div className='flex flex-col items-center absolute z-10 top-24 left-1/2 -translate-x-1/2 w-[90%] py-10 bg-dark-violet text-white font-bold text-lg rounded-lg space-y-6'>
						<a>Features</a>
						<a>Pricing</a>
						<a>Resources</a>
						<hr className='w-5/6 h-0.5 opacity-25'></hr>
						<a>Login</a>
						<a className='rounded-full bg-primary-cyan py-3 w-5/6 mx-6 text-center'>Sign Up</a>
					</div>
				)}
			</nav>
		</header>
	);
};
