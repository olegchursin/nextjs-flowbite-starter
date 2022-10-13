import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>NextJS Flowbite Starter</title>
				<meta name="description" content="NextJS Flowbite Starter" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="dark:bg-gray-900">
				<Navbar />
				<main>{children}</main>
			</div>

			<Footer />
		</>
	);
};

export default Layout;
