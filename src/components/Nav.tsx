'use client';
import { MouseEventHandler, useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/images/logo.webp';
import { cn } from '@/lib/utils';

const LINKS = [
	{ target: '#home', label: 'Home' },
	{ target: '#about', label: 'About' },
	{ target: '#jobs', label: 'Experience' },
	{ target: '#projects', label: 'Projects' },
	{ target: '#contact', label: 'Contact' },
];

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuListRef = useRef<HTMLUListElement>(null);

	const closeMenu = () => {
		setMenuOpen(false);
		document.removeEventListener('click', handleClickOutside);
	};

	const handleClickOutside = useCallback(
		(e: Event) => {
			if (
				menuListRef &&
				menuListRef.current &&
				!menuListRef.current.contains(e.target as HTMLElement)
			) {
				closeMenu();
			}
		},
		[menuListRef, closeMenu]
	);

	const handleMenuClick: MouseEventHandler<HTMLDivElement> = useCallback(() => {
		if (!menuOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}
		setMenuOpen((menuOpen) => !menuOpen);
	}, [menuOpen, handleClickOutside]);

	return (
		<header className='w-full sticky top-0 z-20 flex justify-between px-10 py-6 bg-background_light shadow-lg place-content-center md:py-6 md:justify-center'>
			<Link className='md:absolute md:left-10' href='/'>
				<Image src={logo} height={24} width={24} alt='logo' className='md:scale-150' />
			</Link>
			{/* Mobile Burger Icon */}
			<div className='md:hidden'>
				<div className='w-10 h-[1.7rem] relative z-20' onClick={handleMenuClick}>
					<div
						className={cn('h-[3px] w-full bg-accent rounded absolute top-0', {
							'animate-line1': menuOpen,
							'animate-line1Back': !menuOpen,
						})}
					></div>
					<div
						className={cn('h-[3px] w-full bg-accent rounded absolute top-3', {
							'animate-line2': menuOpen,
							'animate-line2Back': !menuOpen,
						})}
					></div>
					<div
						className={cn('h-[3px] w-full bg-accent rounded absolute top-6', {
							'animate-line3': menuOpen,
							'animate-line3Back': !menuOpen,
						})}
					></div>
				</div>
				<aside
					className={cn('fixed top-0 right-0 bottom-0 left-0', {
						invisible: !menuOpen,
					})}
				>
					<ul
						className={cn(
							'absolute top-0 bottom-0 -right-72 bg-background_light w-72 shadow-menu transition-all duration-300',
							{
								'right-0': menuOpen,
							}
						)}
						ref={menuListRef}
					>
						{LINKS.map(({ label, target }) => (
							<li
								key={label}
								className='px-8 py-5 uppercase text-foreground text-xs tracking-widest first:mt-12'
							>
								<Link href={target} onClick={closeMenu}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</aside>
			</div>

			<ul className='hidden gap-x-8 md:flex'>
				{LINKS.map(({ label, target }) => (
					<li
						key={label}
						className='uppercase text-foreground text-xs tracking-widest hover:text-accent transition-all'
					>
						<Link href={target}>{label}</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Nav;
