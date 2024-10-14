'use client';
import Heading from '../ui/heading';

const JOBS = [
	'BåerKarrer',
	'Law Catch',
	'Rosy Labs',
	'ContractpodAI',
	'Neighborhoods',
	'AvataraCloud',
	'Caroobi',
	'Wisitech',
	'Accenture',
];

const Experience = () => {
	return (
		<section id='jobs' className='pt-20 pb-24 px-5 bg-background_light'>
			<Heading heading='Professional Experience' />
			<div className='mt-4'>
				<ul className='w-full flex overflow-x-scroll border-b-2 border-foreground'>
					{JOBS.map((job) => (
						<p key={job} className='text-nowrap py-2 px-4'>
							{job}
						</p>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Experience;
