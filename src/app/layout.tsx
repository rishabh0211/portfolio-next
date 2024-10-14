import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const poppins = Poppins({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rishabh Rastogi | Portfolio',
	description:
		'Rishabh Rastogi | Expert Frontend Developer, Freelancer, Remote Software Engineer, Fullstack',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased dark`}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
