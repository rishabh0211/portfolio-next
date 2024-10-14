import { cn } from '@/lib/utils';

type HeadingProps = {
	heading: string;
	className?: string;
};

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-2 before:content-normal before:block before:h-0.5 before:w-8 before:bg-accent',
				className
			)}
		>
			<p className='text-accent uppercase tracking-widest'>{heading}</p>
		</div>
	);
};

export default Heading;
