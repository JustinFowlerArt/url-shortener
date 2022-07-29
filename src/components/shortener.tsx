import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ShortenedUrl } from './shortenedUrl';

export const Shortener = () => {
	const [url, setUrl] = useState('');
	const [validateInput, setValidateInput] = useState('');

	const { data, error, getData } = useFetch(url, { immediate: false });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (validateInput) {
			setValidateInput('');
		}
		setUrl(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!url) {
			setValidateInput('Please add a link');
			return;
		}
		await getData();
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
					className={`rounded-md p-3 ${
						error &&
						'text-secondary-red placeholder-secondary-red outline outline-secondary-red'
					}`}
					placeholder='Shorten a link here...'
				/>
				{(error || validateInput) && (
					<h3 className='text-secondary-red text-xs text-left italic'>
						{validateInput ? validateInput : error?.error}
					</h3>
				)}
				<button className='bg-primary-cyan rounded-md p-3 text-white'>
					Shorten It!
				</button>
			</form>
			<div className='space-y-6 text-left'>
				{data?.map(url => (
					<ShortenedUrl key={url.result.code} url={url}/>
				))}
			</div>
		</div>
	);
};
