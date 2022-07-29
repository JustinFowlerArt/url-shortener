import { useCallback, useEffect, useState } from 'react';
import { iUrl, iError } from '../components/interfaces';

export const useFetch = (
	url: string,
	immediate: {
		immediate: boolean;
	}
) => {
	const [data, setData] = useState<iUrl[]>([]);
	const [error, setError] = useState<iError | null>(null);

	const baseUrl = 'https://api.shrtco.de/v2/';

	const getData = useCallback(async () => {
		setError(null);
		try {
			const response = await fetch(baseUrl + 'shorten?url=' + url);
			if (response.ok) {
				const json = await response.json();
				setData([...data, json]);
			} else {
				const json = await response.json();
				throw json;
			}
		} catch (error) {
			setError(error as iError);
		}
	}, [url, data]);

	useEffect(() => {
		if (immediate.immediate) {
			getData();
		}
	}, [getData, immediate]);

	return { data, error, getData };
};
