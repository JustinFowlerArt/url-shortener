import { useState } from 'react';
import { iUrl } from './interfaces';

interface Props {
    url: iUrl
}

export const ShortenedUrl = ({url}: Props) => {
    const [buttonText, setButtonText] = useState('Copy')

	return (
		<div className='bg-white p-4 text-sm space-y-3 rounded-lg'>
			<h3>{url.result.original_link}</h3>
			<h3 className='text-primary-cyan'>{url.result.full_short_link}</h3>
			<button
				className='rounded-md bg-primary-cyan py-2 w-full text-white font-bold hover:bg-dark-violet focus:hover:bg-dark-violet'
				onClick={() => setButtonText("Copied!")}
			>
				{buttonText}
			</button>
		</div>
	);
};
