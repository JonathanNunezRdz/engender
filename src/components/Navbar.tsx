import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

function Navbar() {
	// react hooks
	const [activeLink, setActiveLink] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} fixed top-0 z-10 flex w-full items-center bg-primary py-5`}
		>
			<div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActiveLink('');
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt='logo'
						className='h-9 w-9 object-contain'
					/>
					<p className='flex cursor-pointer text-[18px] font-bold text-white'>
						Jonathan &nbsp;
						<span className='hidden sm:block'>| Núñez</span>
					</p>
				</Link>

				<ul className='hidden list-none flex-row gap-10 sm:flex'>
					{navLinks.map((item) => (
						<li
							key={item.id}
							className={`${
								activeLink === item.title
									? 'text-whie'
									: 'text-secondary'
							} cursor-pointer text-[18px] font-medium hover:text-white`}
							onClick={() => setActiveLink(item.title)}
						>
							<a href={`#${item.id}`}>{item.title}</a>
						</li>
					))}
				</ul>

				<div className='flex flex-1 items-center justify-end sm:hidden'>
					<img
						src={isMenuOpen ? close : menu}
						alt='menu'
						className='h-[28px] w-[28px] cursor-pointer object-contain'
						onClick={() => setIsMenuOpen((current) => !current)}
					/>

					<div
						className={`${
							!isMenuOpen ? 'hidden' : 'flex'
						} black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
					>
						<ul className='flex list-none flex-col items-start justify-end gap-4'>
							{navLinks.map((item) => (
								<li
									key={item.id}
									className={`${
										activeLink === item.title
											? 'text-whie'
											: 'text-secondary'
									} font-poppins cursor-pointer text-[16px] font-medium`}
									onClick={() => {
										setActiveLink(item.title);
										setIsMenuOpen((current) => !current);
									}}
								>
									<a href={`#${item.id}`}>{item.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
