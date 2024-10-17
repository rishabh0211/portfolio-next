import Heading from '../ui/heading';
import {
	FaLinkedin,
	FaGithubSquare,
	FaInstagramSquare,
	FaStackOverflow,
	FaCodepen,
} from 'react-icons/fa';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';

import Section from '../Section';
import ContactForm from '../ContactForm';

const data = [
	{
		id: 1,
		icon: <FaGithubSquare />,
		url: 'https://github.com/rishabh0211',
	},
	{
		id: 2,
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/rishabh-rastogi-955868103/',
	},
	{
		id: 3,
		icon: <FaInstagramSquare />,
		url: 'https://www.instagram.com/rishabh0211/',
	},
	{
		id: 4,
		icon: <FaStackOverflow />,
		url: 'https://stackoverflow.com/users/9658693/rishabh0211?tab=profile',
	},
	{
		id: 5,
		icon: <FaCodepen />,
		url: 'https://codepen.io/rishabh0211',
	},
];

const Contact = () => {
	return (
		<Section id='contact' innerClass='md:max-w-3xl md:flex md:gap-8' dark={false}>
			<div className='md:w-1/3 md:flex-shrink-0'>
				<Heading heading='get in touch' className='text-xl' />
				<div className='flex gap-2 mt-3 items-center'>
					<AiOutlineMail className='scale-125' />
					<p>rishabh0211@gmail.com</p>
				</div>
				<div className='flex gap-2 mt-3 items-center'>
					<GoLocation className='scale-110' />
					<p>New Delhi, India</p>
				</div>
				<div className='mt-4 flex gap-4'>
					{data.map(({ icon, id, url }) => (
						<Link
							href={url}
							target='_blank'
							key={id}
							className='scale-125 md:transition-all md:duration-300 md:hover:text-accent md:hover:scale-150'
						>
							{icon}
						</Link>
					))}
				</div>
			</div>
			<ContactForm />
		</Section>
	);
};

export default Contact;
