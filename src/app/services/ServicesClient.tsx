"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollProgress from "../components/ScrollProgress";
import { Check, ShieldCheck } from "lucide-react";

const services = [
  {
    id: 'consultancy',
    title: 'Clinical Supplies Consultancy & Project Management',
    description:
      'Strategic planning and end-to-end clinical supply execution for global trials.',
    image:
      '/images/seveillar-51.webp',
    details:
      'We develop clinical supplies management strategies for global studies, provide supply chain consultation, and design innovative blinding techniques.',
    points: [
      'Supply Chain Consultation',
      'Clinical Supply Strategy',
      'Risk Management',
      'Study Start-up Support',
    ],
  },
  {
    id: 'manufacturing',
    title: 'Clinical Supplies Manufacturing',
    description:
      'cGMP manufacturing support for placebo and active dosage forms.',
    image:
      '/images/seveillar-53.webp',
    details:
      'Clinical supplies manufacturing includes placebo and active dosage forms, over encapsulation, and strategic partnerships with third-party cGMP contract manufacturers.',
    points: [
      'Placebo Manufacturing',
      'Active Dosage Forms',
      'Over Encapsulation',
      'Third-Party cGMP Partnerships',
    ],
  },
  {
    id: 'sourcing',
    title: 'Comparator & Ancillary Supplies Sourcing',
    description:
      'Global comparator sourcing with regulatory and cold-chain compliance.',
    image:
      '/images/seveillar-67.webp',
    details:
      'We source comparator and ancillary supplies globally through approved wholesalers, with cold chain management, traceability, and supply chain documentation.',
    points: [
      'Comparator Drug Sourcing',
      'Approved Global Wholesalers',
      'Cold Chain Management',
      'Traceability & Documentation',
    ],
  },
  {
    id: 'packaging',
    title: 'Blinding, Packaging & Labelling',
    description:
      'Protocol-specific packaging and multilingual labeling solutions.',
    image:
      '/images/seveillar-54.webp',
    details:
      'Our teams provide primary packaging for non-potent oral solid dosage forms, protocol-specific blinded packs, and clinical supplies label design and generation.',
    points: [
      'Blinding Strategy Design',
      'Primary & Secondary Packaging',
      'Multi-language Labels',
      'Protocol-Specific Solutions',
    ],
  },
  {
    id: 'logistics',
    title: 'Storage, Distribution & Global Logistics',
    description:
      'Temperature-controlled storage and international clinical logistics.',
    image:
      '/images/seveillar-84.webp',
    details:
      'Clinical supplies are stored and distributed at 15°C to 25°C, 2°C to 8°C, -15°C to -25°C, and -80°C through a global depot network and GDP-aligned processes.',
    points: [
      '15°C to 25°C and 2°C to 8°C Storage',
      '-15°C to -25°C and -80°C Storage',
      'Global Depot Network',
      'cGMP, GDP and WHO Guidelines',
    ],
  },
  {
    id: 'irt',
    title: 'IVRS / IWRS (IRT) Services',
    description:
      'Advanced IRT systems for randomization and supply management.',
    image:
      '/images/seveillar-74.webp',
    details:
      'Our customized IRT platform supports global studies with a user-friendly, 21 CFR Part 11 compliant system, multilingual service, and 24/7 call support.',
    points: [
      'Customized IRT Platform',
      '21 CFR Part 11 Compliant',
      'Multilingual 24/7 Call Support',
      'Randomization and Supply Management',
    ],
  },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
  }
};

export default function ServicesClient() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-clip">

        {/* ================================================= */}
{/* PREMIUM INTERNAL HERO SECTION */}
{/* ================================================= */}
<section className="relative overflow-hidden min-h-[72vh] flex items-center pt-28 pb-14">

  {/* ORIGINAL BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <Image
      src="/images/seveillar-48.webp"
      alt="Clinical Background"
      fill
      sizes="100vw"
      className="object-cover"
      priority
    />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">
    <div className="grid lg:grid-cols-[1fr_0.65fr] gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.92] tracking-[-0.05em] text-white"
        >
          Integrated Clinical Trial
          <span className="block text-[#E95A25] mt-1">
            Supply Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-8 text-lg md:text-[21px] text-white leading-relaxed font-light max-w-2xl"
        >
          Seveillar Clinical Supplies Services Pvt. Ltd.
          delivers integrated clinical supply management
          solutions supporting pharmaceutical,
          biotechnology, and CRO organizations globally.
        </motion.p>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative w-[220px] md:w-[280px] aspect-[9/13] rounded-[34px] overflow-hidden border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <Image
            src="/images/seveillar-56.webp"
            alt="Clinical Research"
            fill
            sizes="(max-width: 768px) 50vw, 280px"
            className="object-cover"
          />
        </div>
      </motion.div>

    </div>
  </div>
</section>

        {/* ================================================= */}
        {/* SERVICES OVERVIEW SECTION - OPTIMIZED */}
        {/* ================================================= */}
        {/* About/Overview Background: #FFFFFF per specification */}
        <section className="relative py-28 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E95A25]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
              {/* LEFT SIDE */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-[#E95A25]" />
                  <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                    SERVICE OVERVIEW
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#28151B] leading-[1] tracking-tight">
                  Delivering Reliable
                  Clinical Supply
                  <span className="block text-[#E95A25]">
                    Solutions Worldwide
                  </span>
                </h2>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-xl text-[#5A3A3E] leading-relaxed font-light">
                  Seveillar Clinical Supplies Services Pvt. Ltd.
                  supports pharmaceutical, biotechnology,
                  and CRO organizations with integrated
                  clinical trial supply management services
                  designed around compliance, scalability,
                  and operational precision.
                </p>
                <p className="mt-8 text-lg text-[#5A3A3E] leading-relaxed font-light">
                  Our expertise spans comparator sourcing,
                  packaging & labeling, temperature-controlled
                  logistics, warehousing, manufacturing support,
                  IRT systems, and end-to-end supply chain
                  coordination for multinational clinical studies.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-10">
                  {[
                    'Global Clinical Supply Operations',
                    'GDP & GMP Compliant Processes',
                    'Temperature-Controlled Logistics',
                    'End-to-End Trial Support',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E95A25]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#E95A25]" aria-hidden="true" />
                      </div>
                      <p className="text-[#28151B] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* PREMIUM SERVICES GRID - OPTIMIZED */}
        {/* ================================================= */}
        <section className="py-28 bg-[#F8F2EF]">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E95A25]" />
                <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                  SERVICE PORTFOLIO
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#28151B] tracking-tight">
                Clinical Supply
                <span className="block text-[#E95A25]">
                  Capabilities
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  id={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setSelectedService(service)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedService(service);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn more about ${service.title}`}
                  className="group relative overflow-hidden rounded-[28px] bg-[#28151B] h-[620px] cursor-pointer"
                >
                  {/* IMAGE - OPTIMIZED: reduced scale on hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28151B] via-[#28151B]/70 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#E95A25]/20 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 w-fit mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                      <span className="text-white uppercase tracking-[0.2em] text-[10px]">
                        Clinical Services
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-white/70 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-[#E95A25] font-semibold">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* IMPROVED OPERATIONAL WORKFLOW SECTION - OPTIMIZED */}
        {/* ================================================= */}
        {/* Using brand colors: dark brown background with orange accents */}
        <section className="relative py-22 md:py-24 overflow-hidden bg-[#2815B]">
          <div className="absolute inset-0">
            <Image
              src="/images/seveillar-70.webp"
              alt="Clinical Workflow"
              fill
              sizes="100vw"
              className="object-cover opacity-[0.05]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#28151B] via-[#4C292F] to-[#4C292F]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E95A25]/8 blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 mb-7">
                <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                <span className="text-white uppercase tracking-[0.22em] text-[11px] font-medium">
                  OPERATIONAL WORKFLOW
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[0.95] tracking-[-0.04em] text-white">
                Clinical Supply
                <span className="block text-[#E95A25]">
                  Execution Process
                </span>
              </h2>
              <p className="mt-7 text-lg md:text-xl text-white/68 leading-relaxed font-light">
                A streamlined operational workflow designed to support
                global clinical trial supply management with precision,
                compliance, visibility, and end-to-end coordination.
              </p>
            </div>

            <div className="mt-20 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
                {[
                  { number: '01', title: 'Planning', text: 'Clinical forecasting, protocol evaluation, and operational planning.' },
                  { number: '02', title: 'Sourcing', text: 'Comparator procurement and global vendor coordination.' },
                  { number: '03', title: 'Packaging', text: 'Clinical labeling, storage, and inventory management.' },
                  { number: '04', title: 'Distribution', text: 'Global logistics, tracking, and trial support operations.' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative"
                  >
                    <div className="relative h-full rounded-[28px] bg-white/6 backdrop-blur-xl border border-white/10 p-7 hover:border-[#E95A25]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#E95A25] flex items-center justify-center shadow-[0_12px_35px_rgba(233,90,37,0.3)]">
                          <span className="text-white font-bold">{item.number}</span>
                        </div>
                        <div className="hidden xl:flex w-3.5 h-3.5 rounded-full bg-[#E95A25]" />
                      </div>
                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <p className="mt-4 text-white/62 leading-relaxed font-light text-[15px]">{item.text}</p>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#E95A25]/10 to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                'Global Clinical Coordination',
                'GDP & GMP Compliance',
                'Real-Time Operational Visibility',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#E95A25]" />
                    <p className="text-white font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* COMPLIANCE SECTION - OPTIMIZED */}
        {/* ================================================= */}
        {/* Services Offered Background: #FFF8F5 (very pale orange) per specification */}
        <section className="relative py-32 bg-[#FFF8F5] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E95A25]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E95A25]" />
                <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                  COMPLIANCE & QUALITY
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#28151B] leading-[1] tracking-tight">
                Built Around
                Global Regulatory
                <span className="block text-[#E95A25]">
                  Standards
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
              {[
                { title: 'USFDA Aligned Operations', text: 'Operational systems aligned with global pharmaceutical regulatory expectations.' },
                { title: 'GDP & GMP Compliance', text: 'Clinical storage, handling, packaging, and distribution under global standards.' },
                { title: 'Cold Chain Validation', text: 'Validated temperature-controlled logistics supporting critical clinical products.' },
                { title: 'Quality Management Systems', text: 'Traceability, audit readiness, documentation control, and operational quality assurance.' },
                { title: '21 CFR Part 11', text: 'Technology and documentation systems aligned with electronic compliance standards.' },
                { title: 'Global Regulatory Support', text: 'Regional documentation, import/export support, and protocol-specific compliance.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-[32px] p-8 border border-[#FAD1C3]/40 shadow-lg hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#E95A25]/10 flex items-center justify-center mb-8">
                    <ShieldCheck className="w-8 h-8 text-[#E95A25]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#28151B] leading-tight">{item.title}</h3>
                  <p className="mt-5 text-[#5A3A3E] leading-relaxed text-[15px]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CTA SECTION - OPTIMIZED */}
        {/* ================================================= */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/seveillar-87.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#28151B]/85" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-14 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
              <span className="text-white uppercase tracking-[0.2em] text-sm">
                Global Clinical Support
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Ready To Optimize
              <span className="block text-[#E95A25]">
                Your Clinical Supply Chain?
              </span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed font-light max-w-3xl mx-auto">
              Partner with Seveillar Clinical Supplies Services
              for compliant, scalable, and globally integrated
              clinical trial supply solutions.
            </p>
          </div>
        </section>

        {/* ================================================= */}
        {/* PREMIUM POPUP MODAL - OPTIMIZED */}
        {/* ================================================= */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 40 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-[20px] overflow-hidden w-full max-w-5xl max-h-[88vh] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#E95A25] transition-all duration-300"
                >
                  ✕
                </button>

                <div className="overflow-y-auto max-h-[88vh] custom-scroll">
                  <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                    <Image
                      src={selectedService.image}
                      alt={selectedService.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-8 left-8 md:left-10 right-8">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-5">
                        <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                        <span className="text-white uppercase tracking-[0.2em] text-[10px]">
                          Clinical Services
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] max-w-3xl">
                        {selectedService.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="max-w-4xl">
                      <p className="text-lg text-[#5A3A3E] leading-relaxed font-light">
                        {selectedService.details}
                      </p>
                      <p className="mt-6 text-lg text-[#5A3A3E] leading-relaxed font-light">
                        Our operational teams work closely with sponsors,
                        CROs, manufacturing partners, and logistics providers
                        to ensure uninterrupted clinical supply execution
                        across all study phases while maintaining regulatory
                        compliance, product integrity, and temperature-controlled
                        distribution standards.
                      </p>
                      <p className="mt-6 text-lg text-[#5A3A3E] leading-relaxed font-light">
                        Seveillar focuses on scalable infrastructure,
                        process-driven execution, risk mitigation,
                        inventory visibility, and global coordination
                        to support complex international clinical trial operations.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-14">
                      {selectedService.points.map((point: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-5 rounded-[18px] bg-[#FFF8F5] border border-[#FAD1C3]/40 hover:border-[#E95A25]/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#E95A25]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-[#E95A25]" aria-hidden="true" />
                          </div>
                          <p className="text-[#28151B] font-medium leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      <ScrollProgress />
      <Footer />
    </>
  );
}
