import { useState } from 'react';
import { NavMenu } from './navMenu';

export const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='relative flex items-center justify-between px-6 pt-9 lg:justify-start lg:max-w-4xl xl:max-w-6xl mx-auto'>
			<img className='flex-none h-8' src='/images/logo.svg'></img>
			<nav className='lg:hidden'>
				<i
					className='fa-solid fa-bars text-gray-violet text-2xl'
					onClick={() => setOpen(!open)}
				></i>
				{open && <NavMenu mobile={true}/>}
			</nav>
            <nav className='hidden lg:block w-full'>
                <NavMenu mobile={false}/>
            </nav>
		</header>
	);
};
