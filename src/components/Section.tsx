import { cn } from '@/lib/utils';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
	id: string;
	children: React.ReactNode;
	dark: boolean;
};

const Section: React.FC<SectionProps> = ({
	id,
	dark,
	children,
	className,
	...sectionProps
}) => {
	return (
		<section
			id={id}
			className={cn('pt-24 pb-20 px-5', className, {
				'bg-background_dark': dark,
				'bg-background_light': !dark,
			})}
			{...sectionProps}
		>
			<div className='md:max-w-5xl md:mx-auto'>{children}</div>
		</section>
	);
};

export default Section;
