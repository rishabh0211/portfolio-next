import { cn } from '@/lib/utils';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
	id: string;
	children: React.ReactNode;
	dark?: boolean;
};

const Section: React.FC<SectionProps> = ({
	id,
	dark = false,
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
			{children}
		</section>
	);
};

export default Section;
