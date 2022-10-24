export const Footer = () => {
    return (
        <footer className='bg-very-dark-violet p-12'>
            <div className='flex flex-col items-center text-neutral-gray text-sm font-medium space-y-6 lg:flex-row lg:items-start lg:space-y-0 lg:justify-between lg:max-w-4xl xl:max-w-6xl lg:mx-auto'>
                <img
                    src='/images/logo.svg'
                    className='icon-white mb-3 lg:mr-40'
                    alt='Shortly Logo'
                ></img>

                <div className='flex flex-col items-center space-y-2 lg:items-start'>
                    <h3 className='text-white font-bold my-3'>Features</h3>
                    <a className='hover:text-primary-cyan' href='#'>
                        Link Shortening
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Branded Links
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Analytics
                    </a>
                </div>

                <div className='flex flex-col items-center space-y-2 lg:items-start'>
                    <h3 className='text-white font-bold my-3'>Resources</h3>
                    <a className='hover:text-primary-cyan' href='#'>
                        Blog
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Developers
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Support
                    </a>
                </div>

                <div className='flex flex-col items-center space-y-2 lg:items-start'>
                    <h3 className='text-white font-bold my-3'>Company</h3>
                    <a className='hover:text-primary-cyan' href='#'>
                        About
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Our Team
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Careers
                    </a>
                    <a className='hover:text-primary-cyan' href='#'>
                        Contact
                    </a>
                </div>

                <div className='flex space-x-6 text-2xl pt-4 lg:pt-2'>
                    <a href='#'>
                        <i
                            className='fa-brands fa-square-facebook text-white text-2xl hover:text-primary-cyan'
                            aria-label='Facebook'
                        ></i>
                    </a>
                    <a href='#'>
                        <i
                            className='fa-brands fa-twitter text-white text-2xl hover:text-primary-cyan'
                            aria-label='Twitter'
                        ></i>
                    </a>
                    <a href='#'>
                        <i
                            className='fa-brands fa-pinterest text-white text-2xl hover:text-primary-cyan'
                            aria-label='Pinterest'
                        ></i>
                    </a>
                    <a href='#'>
                        <i
                            className='fa-brands fa-instagram text-white text-2xl hover:text-primary-cyan'
                            aria-label='Instagram'
                        ></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};
