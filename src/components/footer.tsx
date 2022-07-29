export const Footer = () => {
	return (
		<footer className='flex flex-col items-center bg-very-dark-violet text-neutral-gray text-sm font-medium p-12 space-y-6'>
			<img src='/images/logo.svg' className='icon-white mb-3'></img>

			<div className='flex flex-col items-center space-y-2'>
				<h4 className='text-white font-bold my-3'>Features</h4>
				<a>Link Shortening</a>
				<a>Branded Links</a>
				<a>Analytics</a>
			</div>

			<div className='flex flex-col items-center space-y-2'>
				<h4 className='text-white font-bold my-3'>Resources</h4>
				<a>Blog</a>
				<a>Developers</a>
				<a>Support</a>
			</div>

			<div className='flex flex-col items-center space-y-2'>
				<h4 className='text-white font-bold my-3'>Company</h4>
				<a>About</a>
				<a>Our Team</a>
				<a>Careers</a>
				<a>Contact</a>
			</div>

			<div className='flex space-x-6 text-2xl pt-4'>
				<i className='fa-brands fa-square-facebook text-white text-2xl'></i>
				<i className='fa-brands fa-twitter text-white text-2xl'></i>
				<i className='fa-brands fa-pinterest text-white text-2xl'></i>
				<i className='fa-brands fa-instagram text-white text-2xl'></i>
			</div>
		</footer>
	);
};
