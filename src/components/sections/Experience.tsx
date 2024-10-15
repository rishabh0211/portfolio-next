'use client';
import { useState } from 'react';
import Heading from '../ui/heading';
import { cn } from '@/lib/utils';
import Section from '../Section';
import JOBS from '@/content/jobs';

const topClasses = [
	'top-0',
	'top-10',
	'top-20',
	'top-30',
	'top-40',
	'top-50',
	'top-60',
	'top-70',
	'top-80',
];

const Experience = () => {
	const [activeJobIndex, setActiveJobIndex] = useState<number>(0);

	const handleJobClick = (company: string) => {
		const jobIndex = JOBS.findIndex((job) => job.company === company)!;
		setActiveJobIndex(jobIndex);
	};

	const activeJob = JOBS[activeJobIndex];
	const topClass = topClasses[activeJobIndex];

	return (
		<Section id='jobs' innerClass='md:max-w-3xl p-2' dark={false}>
			<Heading
				heading='Professional Experience'
				className='text-xl md:flex md:justify-center'
			/>
			<div className='mt-8 md:flex md:gap-12 md:mt-16 md:overflow-x-visible'>
				<ul className='w-full flex overflow-x-auto border-b-2 border-foreground md:block md:overflow-x-visible md:border-b-0 md:border-l-[1px] md:w-max md:flex-shrink-0 md:relative'>
					{JOBS.map((job) => job.company).map((company) => (
						<li
							key={company}
							className={cn(
								'relative text-nowrap h-10 px-4 flex items-center text-sm cursor-pointer  md:after:content-normal md:after:absolute md:after:top-0 md:after:right-0 md:after:bottom-0 md:after:left-0 md:after:bg-accent-foreground md:after:w-0 md:after:transition-all md:after:duration-300 md:hover:after:w-full',
								{
									'bg-accent-foreground text-accent md:bg-background_light':
										activeJob.company === company,
								}
							)}
							onClick={() => handleJobClick(company)}
						>
							{company}
						</li>
					))}
					<div
						className={cn(
							'block rounded-md h-10 absolute w-1 -left-[2.7px] bg-accent z-20 transition-all duration-300',
							topClass
						)}
					></div>
				</ul>
				<div className='mt-6 md:mt-0'>
					<p className='text-xl'>
						{activeJob.role} <span className='text-accent'>@{activeJob.company}</span>
					</p>
					<ul className='list-disc mt-4 px-4'>
						{activeJob.description.map((desc) => (
							<li key={desc} className='mt-1'>
								{desc}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default Experience;
