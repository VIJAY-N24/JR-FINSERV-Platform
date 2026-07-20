import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/common/FloatingActions";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<TopBar />
			<Navbar />
			<div className="flex flex-col min-h-screen">
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
			<FloatingActions />
		</>
	);
}
