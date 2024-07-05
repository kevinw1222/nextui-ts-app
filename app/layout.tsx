import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Divider } from "@nextui-org/react";
import { FirebaseIcon, GoogleIcon, NextJSIcon, NextUIIcon, VercelIcon } from "@/components/icons";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<Divider /> <Divider />
						{/* <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main> */}
						<main className="container mx-auto max-w-full pt-5 px-5 flex-grow">{children}</main>
						<Divider /> <Divider />
						{/* <footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage">
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer> */}
						<footer className="w-full flex items-center justify-between py-3">
							<div className="flex-1 text-left pl-5">
								<p className="text-xs">
									Made with 😩 by{" "}
									<a
										className="text-xs text-balck hover:text-primary hover:underline"
										title="Visit my GitHub"
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/kevinw1222">
										Kevin Wong
									</a>
								</p>
								<a
									className="text-xs text-balck hover:text-primary hover:underline"
									title="Send me an email"
									href="mailto:kevinwong1249@gmail.com">
									Contact me
								</a>
							</div>

							<div className="flex-1 text-center">
								{/* <Link
									isExternal
									className="flex items-center justify-center gap-1 text-current"
									href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
									title="nextui.org homepage">
									<span className="text-default-600">Powered by</span>
									<p className="text-primary">NextUI</p>
								</Link> */}
								<p className="text-xs">Powered by</p>

								<Link
									className="px-1"
									isExternal
									href="https://vercel.com/?utm_source=nextui&utm_marketing=oss"
									title="Vercel">
									<VercelIcon />
								</Link>
								<Link className="px-1" isExternal href="https://nextui.org" title="NextUI">
									<NextUIIcon />
								</Link>
								<Link
									className="px-1"
									isExternal
									href="https://firebase.google.com"
									title="Firebase">
									<FirebaseIcon />
								</Link>
							</div>

							<div className="flex-1 text-right pr-5">
								{/* <p className="text-xs">Powered by:</p>
								<Link className="pr-2" isExternal href="https://nextjs.org" title="Next.JS">
									<NextJSIcon />
								</Link>
								<Link
									className="pr-2"
									isExternal
									href="https://vercel.com/?utm_source=nextui&utm_marketing=oss"
									title="Vercel">
									<VercelIcon />
								</Link>
								<Link
									className="pr-2"
									isExternal
									href="https://firebase.google.com"
									title="Firebase">
									<FirebaseIcon />
								</Link> */}
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
