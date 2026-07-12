import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/common/FloatingActions";

import { company } from "@/config/company";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: {
		default: `${company.name} · Trusted Financial Advisory in Tamil Nadu`,
		template: `%s | ${company.name}`
	},
	description: `${company.name} is a trusted local financial advisory helping families across Tamil Nadu with Mutual Funds, LIC, Health, General and Vehicle Insurance.`,
	keywords: ["mutual funds", "LIC agent", "health insurance", "vehicle insurance", "financial advisor Tamil Nadu"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
			<body className="bg-neutral-50 text-foreground">
				<TopBar />
				<Navbar />
				<div className="flex flex-col min-h-screen">
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
				<FloatingActions />
			</body>
		</html>
	);
}