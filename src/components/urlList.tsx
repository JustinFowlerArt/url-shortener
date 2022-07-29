import { useState } from 'react';

export const UrlList = () => {
    const [buttonText, setButtonText] = useState('Copy')

	return (
		<div className='bg-white p-4 text-sm space-y-3 rounded-lg'>
			<h3>https://www.frontendmentor.io</h3>
			<h3 className='text-primary-cyan'>https://reLink/k4lKyk</h3>
			<button
				className='rounded-md bg-primary-cyan py-2 w-full text-white font-bold hover:bg-dark-violet focus:hover:bg-dark-violet'
				onClick={() => setButtonText("Copied!")}
			>
				{buttonText}
			</button>
		</div>
	);
};
