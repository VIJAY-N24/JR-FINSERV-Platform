"use client";

import React from "react";
import Link from "next/link";
import { PageBanner } from "@/components/common/PageBanner";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { PartnerLogos, type Partner } from "@/components/common/PartnerLogos";
import { TrendingUp, ShieldCheck, HeartPulse, Home, Car, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/config/company";

interface ServiceDetail {
	name: string;
	headline: string;
	description: string;
	icon: React.ComponentType<{ className?: string }>;
	iconBg: string;
	iconColor: string;
	whatWeOffer: string[];
	partnerSection?: {
		title: string;
		partners: Partner[];
		variant: "grid" | "single";
	};
}

const servicesData: Record<string, ServiceDetail> = {
	"mutual-funds": {
		name: "Mutual Funds Advisory",
		headline: "Grow Your Savings the Smart Way",
		description: "We help you choose mutual funds that match your goals and comfort with risk — explained in plain language, not jargon.",
		icon: TrendingUp,
		iconBg: "bg-emerald-50",
		iconColor: "text-emerald-600",
		whatWeOffer: [
			"Simple monthly SIP plans, or a one-time investment — whichever suits you",
			"A mix of safer and higher-growth funds based on your goals",
			"Regular, honest reviews of how your money is doing",
		],
		partnerSection: {
			title: "We Are Empanelled With Leading Asset Management Companies",
			variant: "grid",
			partners: [
				{ name: "Nippon India Mutual Fund" },
				{ name: "SBI Mutual Fund" },
				{ name: "Kotak Mutual Fund" },
				{ name: "ICICI Prudential Mutual Fund" },
				{ name: "Mahindra Manulife Mutual Fund" },
				{ name: "Motilal Oswal Mutual Fund" },
				{ name: "Aditya Birla Sun Life Mutual Fund" },
			],
		},
	},
	"lic": {
		name: "LIC Life Insurance",
		headline: "Protect Your Family's Future",
		description: "Government-backed LIC life insurance plans that give your family financial security, whatever happens.",
		icon: ShieldCheck,
		iconBg: "bg-navy-100",
		iconColor: "text-navy-700",
		whatWeOffer: [
			"Term plans that give maximum protection at low cost",
			"Savings-linked plans that pay out a lump sum later",
			"Retirement pension plans for a steady monthly income",
		],
		partnerSection: {
			title: "Authorised LIC Advisory Partner",
			variant: "single",
			partners: [{ name: "LIC", type: "Life Insurance Corporation of India" }],
		},
	},
	"health-insurance": {
		name: "Star Health Insurance",
		headline: "Don't Let Medical Bills Drain Your Savings",
		description: "Comprehensive Star Health insurance with cashless treatment at major hospitals, for you and your family.",
		icon: HeartPulse,
		iconBg: "bg-blue-100",
		iconColor: "text-blue-600",
		whatWeOffer: [
			"Individual cover for a single person",
			"Family floater plans covering your whole household under one policy",
			"Top-up plans to boost an existing office health cover",
		],
		partnerSection: {
			title: "Authorised Star Health Advisory Partner",
			variant: "single",
			partners: [{ name: "Star Health Insurance", type: "Star Health & Allied Insurance" }],
		},
	},
	"general-insurance": {
		name: "General Insurance",
		headline: "Protect Your Property and Business",
		description: "Insurance cover for your shop, office, or business assets against fire, theft, and other unexpected events.",
		icon: Home,
		iconBg: "bg-amber-100/60",
		iconColor: "text-amber-600",
		whatWeOffer: [
			"Cover for shops, offices, and warehouses",
			"Group health cover for your employees",
			"Cover for goods in transit and shipments",
		],
		partnerSection: {
			title: "We Are Empanelled With",
			variant: "grid",
			partners: [
				{ name: "Chola MS General Insurance" },
				{ name: "National Insurance" },
			],
		},
	},
	"vehicle-insurance": {
		name: "Vehicle Insurance",
		headline: "Stress-Free Cover for Your Car or Bike",
		description: "Comprehensive or third-party vehicle insurance with easy, cashless claims when you need them most.",
		icon: Car,
		iconBg: "bg-blue-50",
		iconColor: "text-blue-600",
		whatWeOffer: [
			"Comprehensive cover for cars, including accidents and theft",
			"Two-wheeler policies with instant issuance",
			"Basic third-party cover if you just need the legal minimum",
		],
		partnerSection: {
			title: "We Are Empanelled With",
			variant: "grid",
			partners: [
				{ name: "Chola MS General Insurance" },
				{ name: "National Insurance" },
			],
		},
	},
};

export function ServiceDetailContent({ slug }: { slug: string }) {
	const service = servicesData[slug];
	if (!service) return null;

	const Icon = service.icon;
	const breadcrumbItems = [{ name: "Services", href: "/services" }, { name: service.name }];

	return (
		<div className="flex flex-col w-full">
			<PageBanner title={service.headline} description={service.description} breadcrumbItems={breadcrumbItems} />

			<section className="py-20 md:py-28 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* What we offer */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-7 flex flex-col gap-6 text-left"
					>
						<div className={`h-14 w-14 rounded-xl flex items-center justify-center ${service.iconBg} ${service.iconColor}`}>
							<Icon className="h-7 w-7" />
						</div>
						<h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">
							What We Offer
						</h2>
						<ul className="flex flex-col gap-4">
							{service.whatWeOffer.map((item, idx) => (
								<li key={idx} className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
									<span className="text-base text-neutral-600 leading-relaxed">{item}</span>
								</li>
							))}
						</ul>
						<Card variant="resting" className="mt-2 border-neutral-100">
							<p className="text-sm text-neutral-600 leading-relaxed">
								Not sure which option is right for you? Call us or send a message — one of our
								advisors will walk you through it in plain language, free of charge.
							</p>
							<Link href={company.phone.href}>
								<Button variant="secondary" className="mt-4">
									Call {company.phone.display}
								</Button>
							</Link>
						</Card>
					</motion.div>

					{/* Quick enquiry form */}
					<div className="lg:col-span-5">
						<ContactForm />
					</div>
				</div>
			</section>

			{service.partnerSection && (
				<PartnerLogos
					title={service.partnerSection.title}
					partners={service.partnerSection.partners}
					variant={service.partnerSection.variant}
				/>
			)}
		</div>
	);
}
