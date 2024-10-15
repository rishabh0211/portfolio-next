import Link from 'next/link';

import Heading from '@/components/ui/heading';
import neighborhoodsImg from '@/images/neighborhoods.png';
import caroobiImg from '@/images/caroobi.png';
import Image from 'next/image';
import Section from '../Section';
import { cn } from '@/lib/utils';

const PROJECTS = [
	{
		name: 'Neighborhoods',
		desc: `This is a web application with customers in the United States. It's a place where customers would find their homes. It has a listings of available homes and the information about the neighborhoods and people can come and search for the properties.`,
		img: neighborhoodsImg,
		skills: ['react', 'typescript', 'redux-toolkit'],
	},
	{
		name: 'Caroobi',
		desc: `This is a server side rendered app for the end customers. The customers can come and fill some information about themselves and their car and they'd be matched to a relavant mechanic. The site has different funnels varying according to the services.`,
		img: caroobiImg,
		skills: ['Javascript', 'Typescript', 'React'],
	},
];

const Projects = () => {
	return (
		<Section id='projects' dark>
			<Heading heading='Some of my work' className='flex justify-center text-xl' />
			<p className='mt-4'>
				Following are some of the projects I've been part of or have made entirely from
				scratch. You can find more on my{' '}
				<Link
					href='https://github.com/rishabh0211'
					target='_blank'
					className='text-accent'
				>
					github
				</Link>{' '}
				profile.
			</p>
			<div className=''>
				{PROJECTS.map(({ desc, img, name, skills }, index) => {
					const isEven = index % 2 == 0;
					return (
						<div
							key={name}
							className='relative mt-20 shadow-2xl md:grid md:grid-cols-12 md:gap-2 md:shadow-none'
						>
							<div
								className={cn('py-8 px-6 relative z-10', {
									'md:col-start-1 md:col-end-7': isEven,
									'md:col-start-7 md:col-end-13 md:text-right': !isEven,
								})}
							>
								<p className='text-xl'>{name}</p>
								<p className='mt-4 p-4 text-sm bg-zinc-800'>{desc}</p>
								<ul
									className={cn('mt-4 flex items-center gap-2 text-xs', {
										'justify-end': !isEven,
									})}
								>
									{skills.map((skill) => (
										<li
											key={skill}
											className='capitalize bg-zinc-800 text-accent py-2 px-3 rounded'
										>
											{skill}
										</li>
									))}
								</ul>
							</div>
							<Image
								src={img}
								alt={name}
								className={cn(
									'absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover opacity-20',
									{
										'md:col-start-6 md:col-end-13': isEven,
										'md:col-start-1 md:col-end-8': !isEven,
									}
								)}
							/>
						</div>
					);
				})}
			</div>
		</Section>
	);
};

export default Projects;
