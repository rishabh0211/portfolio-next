import { Job } from '@/types/Job';

const JOBS: Job[] = [
	{
		company: 'BåerKarrer',
		role: 'Sr. Frontend Developer',
		description: [
			`Developed an MS Word Add-in wherein legal professionals could use our templates to quickly draft their documents. React was used for displaying the UI on the Add-in's taskpane.`,
			`Developed the APIs using Node.js and Express.js to upload and retrieve the tem- plates. Developed some other related APIs as well.`,
			`Created reusable UI components using TailwindCSS and Shadcn and developed several features for the Add-in.`,
			`Wrote the unit test cases for both frontend and backend projects.`,
		],
	},
	{
		company: 'Law Catch',
		role: 'TypeScript Full-stack Developer',
		description: [
			`Developed features for the Word add-in. Restructured the codebase and rewrote parts of it to make it maintainable and comprehensible.`,
			`Enhanced the state management and optimized the overall performance of the application.`,
			`Improved documentation to ensure a clear understanding of the codebase and its functionalities.`,
			`Developed an MS Outlook add-in from scratch with features resembling those of the Word add-in.`,
			`Developed an admin dashboard based on Next.js from scratch. The codebase was well structured and followed best practices, which resulted in optimal performance and great maintainability.`,
		],
	},
	{
		company: 'Rosy Labs',
		role: 'React/TypeScript Developer',
		description: [
			`Developed a website builder tool that enabled the company's clients (estate sale companies in US) to create and launch their websites. It had features like live preview, drag/drop reordering, custom themes, etc.`,
			`Planned and executed the whole project within the estimated time-frame. The resulting product was amazing in terms of performance and received excellent reviews.`,
			`Created the project from scratch and executed it in a well-planned manner.The code was modular, maintainable, scalable, and performant.`,
		],
	},
	{
		company: 'ContractpodAI',
		role: 'Sr. Frontend Developer',
		description: [
			`Worked on the MS Word and Outlook add-ins. Improved the codebase and added new features to the add-ins.`,
			`Collaborated on the Google Add-ons project.Improved the codebase for this as well. Gave knowledge transfer (KT) handover to all the team members for the project. Added many features here as well.`,
			`Improved the development experience for both the add-ins as well as for add-ons.`,
		],
	},
	{
		company: 'Neighborhoods',
		role: 'Frontend Developer',
		description: [
			`Worked on the revamp of the website to improve the performance.`,
			`Developed everything from scratch with focus on code performance & modularity. Followed micro-frontend architecture.`,
			`Created a custom React components library to be used across the project. Used storybook for the same.`,
			`The lighthouse score of the new website significantly increased from 35 to 77.`,
			`Worked on other project (55places) simultaneously and developed some significant features.`,
		],
	},
	{
		company: 'AvataraCloud',
		role: 'Sr. Frontend Developer',
		description: [
			`Created a React-based application (on top of .NET dekstop app) using Twilio for enterprise clients.`,
			`Added video calling, voice calling, and SMS features, including functionalities like mute/unmute participants, screen sharing, invite by email/SMS, and kick partici- pants out.`,
			`Integrated existing APIs to the app, wrote new APIs in Node.js, and integrated the APIs on the React side.`,
		],
	},
	{
		company: 'Caroobi',
		role: 'Frontend Developer',
		description: [
			`Optimized the older version of Caroobi's customer portal, added some new features, and rolled out its v2 on production, resulting in increased customer activity.`,
			`Added a complex multiple basket feature for the mechanic's portal(SaaS PWA) after an extensive discussion.`,
			`Increased lead conversion by creating a new user funnel in one week, replacing the previous one.`,
			`Coordinated with PMs on the performance of features pushed to production and ideas on how to improve them.`,
		],
	},
	{
		company: 'Wisitech',
		role: 'Sr. Frontend Developer',
		description: [
			`Modified existing web applications to correct errors, upgrade interfaces, and im- prove performance.`,
			`Led the front-end development process and worked across the modules.`,
			`Analyzed the requirements and created the basic structure of different modules.`,
		],
	},
	{
		company: 'Accenture',
		role: 'Software Engineer',
		description: [
			`Worked in the UI team as the front-end developer for T-Mobile. Developed the phone-selection module and bring-your-own-device (BYOD) module in the prepaid user flow.`,
			`Wrote and helped colleagues write test cases for the existing code, improving the overall code coverage.`,
			`Modified existing web applications to correct errors, upgrade interfaces, and im- prove performance.Modified existing web applications to correct errors, upgrade interfaces, and improve performance.`,
		],
	},
];

export default JOBS;
