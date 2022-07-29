import { useState } from 'react';
import { UrlList } from './urlList';

export const Shortener = () => {
	const [url, setUrl] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className='relative -top-32 py-12 px-6 space-y-6'>
			<form
				className='bg-dark-violet flex flex-col p-6 space-y-4 rounded-lg bg-no-repeat bg-right-top'
				style={{ backgroundImage: 'url(/images/bg-shorten-mobile.svg)' }}
				onSubmit={e => handleSubmit(e)}
			>
				<input
					type='text'
					value={url}
					onChange={e => handleChange(e)}
					className='rounded-md p-3'
					placeholder='Shorten a link here...'
				/>
				<button className='bg-primary-cyan rounded-md p-3 text-white'>
					Shorten It!
				</button>
			</form>
            <div className='spacey-6 text-left'>
                <UrlList />
            </div>
		</div>
	);
};
