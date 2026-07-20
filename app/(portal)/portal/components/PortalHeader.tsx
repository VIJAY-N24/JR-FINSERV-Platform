"use client";

import { Menu } from "lucide-react";

interface PortalHeaderProps {
	onMenuToggle: () => void;
}

export function PortalHeader({ onMenuToggle }: PortalHeaderProps) {
	return (
		<header className="h-16 bg-white border-b border-neutral-200 flex items-center px-4 lg:px-6 shrink-0">
			<button
				onClick={onMenuToggle}
				className="p-2 -ml-2 rounded-lg hover:bg-neutral-100 lg:hidden"
				aria-label="Toggle sidebar"
			>
				<Menu className="h-5 w-5 text-neutral-600" />
			</button>

			<div className="ml-2 lg:ml-0">
				<h1 className="text-sm font-medium text-neutral-800 font-body">
					Admin Portal
				</h1>
			</div>
		</header>
	);
}
