"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GalleryCardProps {
	src: string;
	alt: string;
	title: string;
	category: string;
	onClick?: () => void;
	className?: string;
}

export function GalleryCard({ src, alt, title, category, onClick, className }: GalleryCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.2 }}
			onClick={onClick}
			className={cn(
				"relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-neutral-100 group cursor-pointer aspect-4/3 sm:aspect-auto",
				className
			)}
		>
			{/* Image */}
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>

			{/* Hover Overlay Scrim */}
			<div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6" />

			{/* Details shown on hover/tap */}
			<div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
				<span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/20 w-fit block mb-1">
					{category}
				</span>
				<h4 className="font-display font-semibold text-sm md:text-base text-neutral-100 line-clamp-1 leading-snug">
					{title}
				</h4>
			</div>

			{/* Small mobile constant badge */}
			<div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-xs text-white border border-white/10 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase group-hover:opacity-0 transition-opacity md:hidden">
				{category}
			</div>
		</motion.div>
	);
}
