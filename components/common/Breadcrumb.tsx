"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
	name: string;
	href?: string;
}

export interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav className="flex items-center space-x-2 text-xs text-neutral-500 font-medium overflow-x-auto py-1">
			<Link
				href="/"
				className="flex items-center gap-1 hover:text-blue-600 transition-colors"
			>
				<Home className="h-3.5 w-3.5" />
				<span className="hidden sm:inline">Home</span>
			</Link>

			{items.map((item, index) => {
				const isLast = index === items.length - 1;
				return (
					<React.Fragment key={index}>
						<ChevronRight className="h-3 w-3 text-neutral-400 shrink-0" />
						{isLast || !item.href ? (
							<span className="text-neutral-800 font-semibold truncate max-w-[150px] sm:max-w-none">
								{item.name}
							</span>
						) : (
							<Link
								href={item.href}
								className="hover:text-blue-600 transition-colors truncate max-w-[150px] sm:max-w-none"
							>
								{item.name}
							</Link>
						)}
					</React.Fragment>
				);
			})}
		</nav>
	);
}
