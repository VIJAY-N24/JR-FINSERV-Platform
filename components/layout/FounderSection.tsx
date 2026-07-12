"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { company } from "@/config/company";

/**
 * Founder photo — swap this URL for the real photograph whenever it's ready.
 * Nothing else needs to change.
 */
const FOUNDER_PHOTO = "/images/founder.png";

export function FounderSection() {
	return (
		<section className="py-20 md:py-28 bg-white border-b border-neutral-200">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
				{/* Photo */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="lg:col-span-5 relative"
				>
					{/* Decorative background shape for premium feel */}
					<div className="absolute -inset-3 rounded-[32px] bg-blue-50/70 -rotate-2 scale-[1.02] pointer-events-none border border-blue-100/30" />
					<div className="absolute -inset-3 rounded-[32px] border border-neutral-200/50 pointer-events-none" />
					
					<div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_12px_36px_rgba(10,27,51,0.06)] border border-neutral-200">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={FOUNDER_PHOTO}
							alt={`Ln. V. Janarthanam, Managing Director of ${company.name}`}
							className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
						/>
					</div>
				</motion.div>

				{/* Introduction */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
					className="lg:col-span-7 flex flex-col gap-6 text-left"
				>
					<div className="flex flex-col gap-1.5">
						<span className="text-xs font-bold uppercase tracking-widest text-blue-700">
							Meet Our Founder
						</span>
						<h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
							Ln. V. Janarthanam, CIP
						</h2>
						<p className="text-sm font-semibold text-neutral-500 font-body">
							Managing Director, {company.name}
						</p>
					</div>

					<div className="h-[1px] bg-neutral-100 w-24" />

					{/* Personal Quote Block */}
					<blockquote className="font-display italic text-lg sm:text-xl text-neutral-800 leading-relaxed pl-4 border-l-2 border-emerald-600">
						&ldquo;Every client who walks through our door gets the same honest advice I would give my own family. That is a promise I stand behind personally.&rdquo;
					</blockquote>

					<p className="text-sm sm:text-base text-neutral-500 leading-relaxed font-body font-light">
						As an AMFI Registered Mutual Fund Distributor and LIC MDRT (USA) Member since 2007, I started
						{company.name} with one simple aim &mdash; to help families across Tamil Nadu make sound financial
						decisions without confusing jargon or pressure sales. Today that promise extends to 3,500+
						clients across 24+ countries.
					</p>

					<div className="flex flex-wrap items-center gap-3 mt-2">
						<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 bg-neutral-50 border border-neutral-200/80 px-3 py-2 rounded-xl">
							<ShieldCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
							AMFI Registered
						</div>
						<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 bg-neutral-50 border border-neutral-200/80 px-3 py-2 rounded-xl">
							<ShieldCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
							LIC MDRT (USA) Since 2007
						</div>
						<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 bg-neutral-50 border border-neutral-200/80 px-3 py-2 rounded-xl">
							<ShieldCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
							Star Health Elite Advisor
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
