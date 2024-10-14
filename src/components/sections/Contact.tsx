import { MailIcon, MapPinIcon } from 'lucide-react';
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
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Section from '../Section';

const data = [
	{
		id: 1,
		icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
		url: 'https://github.com/rishabh0211',
	},
	{
		id: 2,
		icon: <FaLinkedin className='social-icon'></FaLinkedin>,
		url: 'https://www.linkedin.com/in/rishabh-rastogi-955868103/',
	},
	{
		id: 3,
		icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
		url: 'https://www.instagram.com/rishabh0211/',
	},
	{
		id: 4,
		icon: <FaStackOverflow className='social-icon'></FaStackOverflow>,
		url: 'https://stackoverflow.com/users/9658693/rishabh0211?tab=profile',
	},
	{
		id: 5,
		icon: <FaCodepen className='social-icon'></FaCodepen>,
		url: 'https://codepen.io/rishabh0211',
	},
];

const Contact = () => {
	return (
		<Section id='contact' dark={false}>
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
					<Link href={url} target='_blank' key={id} className='scale-125'>
						{icon}
					</Link>
				))}
			</div>
			<form className='mt-16 p-6 bg-background_dark'>
				<div>
					<Label htmlFor='name'>Name</Label>
					<Input id='name' placeholder='Your name' className='mt-1' />
				</div>
				<div className='mt-4'>
					<Label htmlFor='email'>E-mail</Label>
					<Input id='email' placeholder='Your email' className='mt-1' />
				</div>
				<div className='mt-4'>
					<Label htmlFor='message'>Message</Label>
					<Textarea
						id='message'
						placeholder='Your Message/Query'
						className='mt-1 resize-none'
						rows={4}
					/>
				</div>
				<Button className='mt-4 w-full rounded-md'>Submit</Button>
			</form>
		</Section>
	);
};

export default Contact;
