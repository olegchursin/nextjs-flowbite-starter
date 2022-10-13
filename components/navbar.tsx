import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { FC } from 'react';

const Nav: FC<Record<string, never>> = function () {
	return (
		<>
			<header className="sticky top-0 z-20">
				<Navbar fluid>
					<Navbar.Brand href="/">
						<span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
							Home
						</span>
					</Navbar.Brand>
					<div className="flex md:order-2">
						<Navbar.Toggle />
						<DarkThemeToggle />
					</div>
					<Navbar.Collapse>
						<Navbar.Link href="/" active>
							Home
						</Navbar.Link>
						<Navbar.Link href="/sample">Sample</Navbar.Link>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
};

export default Nav;
