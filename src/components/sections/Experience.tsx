'use client';
import { useState } from 'react';
import Heading from '../ui/heading';
import { cn } from '@/lib/utils';
import Section from '../Section';

const JOBS = [
	{
		company: 'BåerKarrer',
		role: 'Sr. Frontend Developer',
		description: [
			'Worked in the UI team as the frontend developer for T-Mobile. Developed the plan selection and phone selection section in the prepaid user flow.',
			'Wrote test cases for the existing code improving the overall code coverage.',
			'Modified existing web application to correct errors and to upgrade interfaces and improve performance.',
		],
	},
	{
		company: 'Law Catch',
		role: 'TypeScript Full-stack Developer',
		description: [
			'Worked in the UI team as the frontend developer for T-Mobile. Developed the plan selection and phone selection section in the prepaid user flow.',
			'Wrote test cases for the existing code improving the overall code coverage.',
			'Modified existing web application to correct errors and to upgrade interfaces and improve performance.',
		],
	},
	{
		company: 'Rosy Labs',
		role: 'React/TypeScript Developer',
		description: [
			'Worked in the UI team as the frontend developer for T-Mobile. Developed the plan selection and phone selection section in the prepaid user flow.',
			'Wrote test cases for the existing code improving the overall code coverage.',
			'Modified existing web application to correct errors and to upgrade interfaces and improve performance.',
		],
	},
	{
		company: 'ContractpodAI',
		role: 'Sr. Frontend Developer',
		description: [
			'Implemented significant features to their contract management software.',
			'Worked across projects and took ownership of the development process.',
			'Onboarded new joinees to these projects and mentored them in the development.',
		],
	},
	{
		company: 'Neighborhoods',
		role: 'Frontend Developer',
		description: [
			'Worked on the revamp of their web application to improve the performance.',
			'Developed everything from scratch with focus on code performance & modularity.',
			'Created a custom React components library to be used across the project.',
			'The lighthouse score of the new website significantly increased from 35 to 77.',
			'Worked on other project (55places) simultaneously and developed some significant features there.',
		],
	},
	{
		company: 'AvataraCloud',
		role: 'Sr. Frontend Developer',
		description: [
			'Worked on a React and Twilio based real-time desktop application.',
			'Developed real-time features like voice/video calling, sms/email invites, screen sharing, mute/unmute participants, etc.',
			'Developed APIs in the backend and intergrated them on the frontend.',
		],
	},
	{
		company: 'Caroobi',
		role: 'Frontend Developer',
		description: [
			'Worked on the user facing web application. Optimized the older version, added some new features & rolled out its v2 resulting in increased customer activity.',
			'Simulaneously worked on Mechanic portal (PWA) developing some of the complex features for the dashboard & automotive parts e-commerce.',
			'Created a whole new user funnel replacing the previous one in a weeks time.',
		],
	},
	{
		company: 'Wisitech',
		role: 'Sr. Frontend Developer',
		description: [
			'Worked for a Dubai based startup to develop their one-stop social and e-commerce website.',
			'Led the frontend development process and worked across the modules. Analyzed the requirements and created the basic structure of different modules.',
			'Created the reusable components, directives & pipes and integrated them.',
		],
	},
	{
		company: 'Accenture',
		role: 'Software Engineer',
		description: [
			'Worked in the UI team as the frontend developer for T-Mobile. Developed the plan selection and phone selection section in the prepaid user flow.',
			'Wrote test cases for the existing code improving the overall code coverage.',
			'Modified existing web application to correct errors and to upgrade interfaces and improve performance.',
		],
	},
];

const Experience = () => {
	const [activeJob, setActiveJob] = useState(JOBS[0]);
	return (
		<Section id='jobs' innerClass='md:max-w-2xl p-2' dark={false}>
			<Heading
				heading='Professional Experience'
				className='text-xl md:flex md:justify-center'
			/>
			<div className='mt-8 md:flex md:gap-12 md:mt-16 md:overflow-x-visible'>
				<ul className='w-full flex overflow-x-auto border-b-2 border-foreground md:block md:border-b-0 md:border-l-2  md:w-max md:flex-shrink-0 md:relative'>
					{JOBS.map((job) => job.company).map((company) => (
						<li
							key={company}
							className={cn(
								'text-nowrap h-10 px-4 flex items-center text-sm cursor-pointer',
								{
									'bg-accent-foreground text-accent': activeJob.company === company,
								}
							)}
						>
							{company}
						</li>
					))}
					<div className='block rounded-md h-10 absolute top-10 w-1 -left-[3px] bg-accent z-20 transition-all duration-300'></div>
				</ul>
				<div className='mt-6 md:mt-0'>
					{activeJob.role} <span className='text-accent'>@{activeJob.company}</span>
					<ul className='list-disc mt-4 px-4'>
						{activeJob.description.map((desc) => (
							<li key={desc}>{desc}</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default Experience;
