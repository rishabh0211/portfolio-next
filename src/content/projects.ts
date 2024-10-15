import { Project } from '@/types/Project';
import neighborhoodsImg from '@/images/neighborhoods.png';
import caroobiImg from '@/images/caroobi.png';
import ffplacesImg from '@/images/55places.png';
import caroobiMechPortalImg from '@/images/caroobi-wekstat.png';
import gitProfileViewerlImg from '@/images/gitprofile.png';
import tMobilelImg from '@/images/t-mobile.png';

const PROJECTS: Project[] = [
	{
		name: 'Neighborhoods',
		desc: `This is a web application with customers in the United States. It's a place where customers would find their homes. It has a listings of available homes and the information about the neighborhoods and people can come and search for the properties.`,
		img: neighborhoodsImg,
		skills: ['React', 'Typescript', 'redux-toolkit'],
		url: 'https://neighborhoods.com/',
	},
	{
		name: 'Caroobi',
		desc: `This is a server side rendered app for the end customers. The customers can come and fill some information about themselves and their car and they'd be matched to a relavant mechanic. The site has different funnels varying according to the services.`,
		img: caroobiImg,
		skills: ['Javascript', 'Typescript', 'React'],
		url: 'https://caroobi.com/',
	},
	{
		name: '55 Places',
		desc: `This is a web application with customers in the United States. It's a place where customers would find their homes. It has a listings of available homes and the information about the neighborhoods and people can come and search for the properties.`,
		img: ffplacesImg,
		skills: ['React', 'Typescript', 'Redux'],
		url: 'https://55places.com/',
	},
	{
		name: 'Caroobi Mechanic Portal',
		desc: `This product is used by the mechanics in Germany to perform several tasks like job tracking, online part ordering, dashboard, chat with customer, etc. I worked mainly in the Online Parts Ordering Module.`,
		img: caroobiMechPortalImg,
		skills: ['React', 'Redux', 'SCSS'],
		url: 'https://caroobi.com/werkstattportal',
	},
	{
		name: 'Git Profile Viewer',
		desc: `An informative dashboard for the github profile with interactive data visualizations. Contains visualizations about commit activity, top repos, top languages along with an option to sort repos by various options.`,
		img: gitProfileViewerlImg,
		skills: ['Next.js', 'Github API', 'Chart.js'],
		url: 'http://gitprofileviewer.vercel.app/',
	},
	{
		name: 'T-Mobile(USA) SPA',
		desc: `This is the Single Page Application (SPA) I helped in building. I worked as a frontend developer working across different modules. My primarily focus was on the development of Phone Selection module and Bring Your Own Device (BYOD) module.`,
		img: tMobilelImg,
		skills: ['Angular 2', 'Typescript', 'React.js'],
		url: 'https://prepaid.t-mobile.com/home',
	},
];

export default PROJECTS;
