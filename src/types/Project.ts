import { StaticImageData } from 'next/image';

export type Project = {
	name: string;
	desc: string;
	img: StaticImageData;
	skills: string[];
	url: string;
};
