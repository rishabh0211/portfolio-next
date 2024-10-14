import Image from 'next/image';
import Heading from '@/components/ui/heading';
import heroImg from '@/images/hero.jpeg';
import Section from '../Section';

const SKILLS = [
	'Javascript (ES6+)',
	'Typescript',
	'HTML / (S)CSS',
	'React.js',
	'Redux',
	'Gatsby.js',
	'Next.js',
	'TailwindCSS',
	'MaterialUI',
	'Storybook',
	'Chrome extensions',
	'Node.js',
	'Express',
	'MongoDB',
	'GraphQL',
	'Webpack',
	'Docker',
	'Styled Components',
	'D3.js',
	'Data structures',
	'Jest',
	'React testing library',
];

const About = () => {
	return (
		<Section id='about' className='pt-32 -mt-16' dark>
			<div>
				<Heading heading='about me' />
				<p className='my-4'>
					Hi! I'm Rishabh, a sofware engineer based in New Delhi, India.
				</p>
				<p className='my-4'>
					A web developer with expertise in front-end development and exposure to back-end
					development. I enjoy creating interactive and engaging things for the web. I'm
					always looking for ways to improve and optimise the applications.
				</p>
				<p className='my-4'>
					I have over 6 years of experience making excellent websites, applications, and
					everything in between. I write clean, robust, and maintainable code by adhering
					to best development standards. I've worked for both large corporations and
					start-up organizations. Below are the few technologies I've worked on:
				</p>
				<div className='flex justify-center mt-8'>
					<div className='relative rounded-lg before:content-normal before:rounded-lg before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black before:bg-opacity-40'>
						<Image
							src={heroImg}
							alt='profile-image'
							className='max-w-64 rounded-lg'
							height={518}
							width={518}
						/>
					</div>
				</div>
			</div>
			<div className='mt-6 relative'>
				<Heading
					heading='my skills'
					className='-rotate-90 absolute left-4 top-1/2 -translate-x-1/2'
				/>
				<div className='grid grid-cols-2 gap-4 ml-12 mt-10'>
					{SKILLS.map((skill) => (
						<p key={skill}>- {skill}</p>
					))}
				</div>
			</div>
		</Section>
	);
};

export default About;
