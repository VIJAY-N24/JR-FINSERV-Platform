import { DashboardCard } from "../../components/DashboardCard";
import {
	MessageSquareText,
	Images,
	ImageIcon,
	Handshake,
	Quote,
	Settings,
} from "lucide-react";

const cards = [
	{
		title: "Enquiries",
		description: "View and manage contact form submissions",
		icon: MessageSquareText,
	},
	{
		title: "Hero Banners",
		description: "Manage homepage hero slider images",
		icon: Images,
	},
	{
		title: "Gallery",
		description: "Upload and organise photo gallery",
		icon: ImageIcon,
	},
	{
		title: "Partners",
		description: "Manage partner logos and details",
		icon: Handshake,
	},
	{
		title: "Testimonials",
		description: "Manage client testimonials and reviews",
		icon: Quote,
	},
	{
		title: "Settings",
		description: "Update website content and configuration",
		icon: Settings,
	},
];

export default function DashboardPage() {
	return (
		<div>
			{/* Welcome */}
			<div className="mb-6">
				<h1 className="text-lg font-semibold text-neutral-900 font-body">
					Welcome, Admin
				</h1>
				<p className="text-sm text-neutral-500 mt-1 font-body">
					Manage your website content from here.
				</p>
			</div>

			{/* Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{cards.map((card) => (
					<DashboardCard
						key={card.title}
						title={card.title}
						description={card.description}
						icon={card.icon}
					/>
				))}
			</div>
		</div>
	);
}
