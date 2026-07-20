import type { LucideIcon } from "lucide-react";

interface DashboardCardProps {
	title: string;
	description: string;
	icon: LucideIcon;
	count?: number;
}

export function DashboardCard({ title, description, icon: Icon, count }: DashboardCardProps) {
	return (
		<div className="bg-white border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 transition-colors">
			<div className="flex items-start justify-between mb-3">
				<div className="h-10 w-10 rounded-lg bg-navy-800/5 flex items-center justify-center">
					<Icon className="h-5 w-5 text-navy-800" />
				</div>
				{typeof count === "number" && (
					<span className="text-2xl font-semibold text-navy-800 font-body tabular-nums">
						{count}
					</span>
				)}
			</div>
			<h3 className="text-sm font-semibold text-neutral-900 font-body">{title}</h3>
			<p className="text-xs text-neutral-500 mt-1 font-body leading-relaxed">{description}</p>
		</div>
	);
}
