import { Boost } from './components/boost';
import { CallToAction } from './components/callToAction';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Shortener } from './components/shortener';
import { Statistics } from './components/statistics';

export const App = () => {
	return (
		<div className='overflow-clip'>
			<Header />
			<main className='relative text-center space-y-6'>
				<CallToAction />

				<div className='bg-off-white'>
					<Shortener />
					<Statistics />
					<Boost />
				</div>
			</main>
			<Footer />
		</div>
	);
};
