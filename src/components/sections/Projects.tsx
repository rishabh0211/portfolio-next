import Link from 'next/link';

import Heading from '@/components/ui/heading';
import neighborhoodsImg from '@/images/neighborhoods.png';
import Image from 'next/image';

const PROJECTS = [
	{
		name: 'Neighborhoods',
		desc: `This is a server side rendered app for the end customers. The customers can come and fill some information about themselves and their car and they'd be matched to a relavant mechanic. The site has different funnels varying according to the services.`,
		img: neighborhoodsImg,
		skills: ['react', 'typescript', 'redux-toolkit'],
	},
];

const Projects = () => {
	return (
		<section className='pt-20 pb-20 px-5 bg-background_dark'>
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
			<div className='mt-6 '>
				{PROJECTS.map(({ desc, img, name, skills }) => (
					<div className='relative'>
						<div className='py-8 px-6 relative z-10'>
							<p className='text-xl'>{name}</p>
							<p className='mt-4 p-4 text-sm bg-zinc-800'>{desc}</p>
							<ul className='mt-4 flex items-center gap-4 text-sm'>
								{skills.map((skill) => (
									<li className='uppercase'>{skill}</li>
								))}
							</ul>
						</div>
						<Image
							src={img}
							alt={name}
							className='absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover opacity-10'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
