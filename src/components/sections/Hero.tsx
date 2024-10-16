'use client';
import Section from '../Section';
import { Button } from '../ui/button';
import Heading from '../ui/heading';

const Hero = () => {
	return (
		<Section
			id='hero'
			// className='bg-background_light text-foreground px-6 py-32 md:px-16 md:py-48 clip-path-hero'
			className='pt-32 pb-28 clip-path-hero'
			dark={false}
		>
			<div className='max-w-4xl mx-auto'>
				<Heading heading='Hello' />
				<h1 className='text-5xl mt-2 tracking-wide md:text-7xl md:font-semibold'>
					I&apos;m <span className='text-accent'>Rishabh</span> Rastogi
				</h1>
				<p className='text-3xl mt-4 tracking-wide md:text-4xl'>A Javascript enthusiast</p>
				<p className='mt-12 max-w-lg'>
					I&apos;m a software engineer based in New Delhi, India specialized in building
					exceptional websites, applications, and everything in between.
				</p>
				<div className='flex gap-x-4 mt-16'>
					<Button size='lg' variant='outline' className='uppercase'>
						get in touch
					</Button>
					<Button
						size='lg'
						className='uppercase'
						onClick={() => console.log('resume clicked')}
					>
						resume
					</Button>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
