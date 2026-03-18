import React, { useEffect, useRef, useState } from 'react';

/* ─── ANIMATION HOOK ─────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const obs = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setVisible(true);
					obs.disconnect();
				}
			},
			{ threshold },
		);
		if (ref.current) obs.observe(ref.current);
		return () => obs.disconnect();
	}, [threshold]);
	return [ref, visible];
}

/* ─── SERVICE CARD ───────────────────────────────────────────────────────── */
function Service({ title, text, img, delay = 0 }) {
	const [ref, visible] = useInView();
	return (
		<div
			ref={ref}
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? 'translateY(0)' : 'translateY(40px)',
				transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
			}}
			className="group cursor-pointer"
		>
			<div className="overflow-hidden">
				<img
					src={img}
					className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
					alt={title}
				/>
			</div>
			<div className="pt-5 pb-2 border-b border-gray-100 group-hover:border-[#b89c72] transition-colors duration-300">
				<h3 className="font-serif text-xl text-[#0f172a] mb-2">{title}</h3>
				<p className="text-slate-500 text-sm leading-relaxed">{text}</p>
			</div>
		</div>
	);
}

/* ─── STAT ITEM ──────────────────────────────────────────────────────────── */
function Stat({ number, label, delay = 0 }) {
	const [ref, visible] = useInView();
	return (
		<div
			ref={ref}
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? 'translateY(0)' : 'translateY(30px)',
				transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
			}}
			className="text-center"
		>
			<div className="font-serif text-5xl text-[#0f172a] mb-2">{number}</div>
			<div className="text-[10px] tracking-[3px] uppercase text-[#b89c72] font-semibold">
				{label}
			</div>
		</div>
	);
}

/* ─── TESTIMONIAL ────────────────────────────────────────────────────────── */
function Testimonial({ quote, name, title, delay = 0 }) {
	const [ref, visible] = useInView();
	return (
		<div
			ref={ref}
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? 'translateY(0)' : 'translateY(30px)',
				transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
			}}
			className="bg-white p-10 border border-gray-100"
		>
			<div className="text-[#b89c72] text-4xl font-serif leading-none mb-6">
				"
			</div>
			<p className="text-slate-600 text-sm leading-relaxed mb-8 italic font-light">
				{quote}
			</p>
			<div className="border-t border-gray-100 pt-5">
				<div className="font-serif text-[#0f172a] text-base">{name}</div>
				<div className="text-[10px] tracking-[2px] uppercase text-slate-400 mt-1">
					{title}
				</div>
			</div>
		</div>
	);
}

/* ─── APP ─────────────────────────────────────────────────────────────────── */
function App() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	return (
		<div className="min-h-screen bg-[#fdfdfd] selection:bg-[#b89c72] selection:text-white overflow-x-hidden">
			{/* ── NAVBAR ── */}
			<nav
				className={`px-[5%] py-5 sticky top-0 z-50 transition-all duration-500 ${
					scrolled
						? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
						: 'bg-[#fdfdfd] border-b border-gray-100'
				}`}
			>
				<div className="flex justify-between items-center max-w-[1400px] mx-auto">
					<div
						className="font-serif font-bold text-[#0f172a] tracking-[5px] text-base cursor-pointer"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						CORPORATE <span className="text-[#b89c72]">HEALTH</span>
					</div>
					<div className="hidden md:flex gap-8 items-center">
						{[
							['services', 'SERVICES'],
							['approach', 'APPROACH'],
							['testimonials', 'CLIENTS'],
							['contact', 'BOARD ACCESS'],
						].map(([id, label], i) => (
							<button
								key={id}
								onClick={() => scrollTo(id)}
								className={`text-[11px] font-bold tracking-widest hover:text-[#b89c72] transition ${
									id === 'contact'
										? 'border border-[#0f172a] px-4 py-2 hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a]'
										: ''
								}`}
							>
								{label}
							</button>
						))}
					</div>
					{/* Mobile */}
					<button
						className="md:hidden text-[#0f172a]"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							{menuOpen ? (
								<>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</>
							) : (
								<>
									<line x1="3" y1="7" x2="21" y2="7" />
									<line x1="3" y1="12" x2="21" y2="12" />
									<line x1="3" y1="17" x2="21" y2="17" />
								</>
							)}
						</svg>
					</button>
				</div>
				{menuOpen && (
					<div className="md:hidden bg-white border-t border-gray-100 px-[5%] py-4 flex flex-col gap-4">
						{[
							['services', 'SERVICES'],
							['approach', 'APPROACH'],
							['testimonials', 'CLIENTS'],
							['contact', 'BOARD ACCESS'],
						].map(([id, label]) => (
							<button
								key={id}
								onClick={() => scrollTo(id)}
								className="text-[11px] font-bold tracking-widest text-left hover:text-[#b89c72] transition py-1"
							>
								{label}
							</button>
						))}
					</div>
				)}
			</nav>

			{/* ── HERO ── */}
			<header className="px-[5%] py-32 text-center max-w-[1200px] mx-auto">
				<span
					className="uppercase text-[10px] tracking-[6px] text-[#b89c72] font-bold"
					style={{ animation: 'fadeUp 0.8s ease forwards' }}
				>
					Global Elite Medical Portfolio
				</span>
				<h1
					className="font-serif text-[#0f172a] text-4xl md:text-6xl lg:text-7xl mt-6 leading-[1.1]"
					style={{ animation: 'fadeUp 0.8s ease 0.15s both' }}
				>
					The Art of <span className="italic text-[#b89c72]">Longevity</span>
					<br className="hidden md:block" /> and Precision
				</h1>
				<p
					className="text-slate-500 mt-6 max-w-xl mx-auto text-base leading-relaxed font-light"
					style={{ animation: 'fadeUp 0.8s ease 0.3s both' }}
				>
					World-class healthcare infrastructure designed for global leaders,
					investors, and executives.
				</p>
				<div
					className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
					style={{ animation: 'fadeUp 0.8s ease 0.45s both' }}
				>
					<button
						onClick={() => scrollTo('services')}
						className="bg-[#0f172a] text-white px-10 py-4 text-[11px] tracking-[2px] hover:bg-[#b89c72] transition-colors duration-300"
					>
						VIEW PORTFOLIO
					</button>
					<button
						onClick={() => scrollTo('contact')}
						className="border border-[#0f172a] text-[#0f172a] px-10 py-4 text-[11px] tracking-[2px] hover:bg-[#0f172a] hover:text-white transition-colors duration-300"
					>
						REQUEST ACCESS
					</button>
				</div>
			</header>

			{/* ── STATS ── */}
			<section className="py-20 border-y border-gray-100 bg-[#0f172a]">
				<div className="max-w-[1100px] mx-auto px-[5%] grid grid-cols-2 md:grid-cols-4 gap-12">
					<Stat number="340+" label="Elite Clients" delay={0} />
					<Stat number="28" label="Countries Served" delay={100} />
					<Stat number="15+" label="Years of Excellence" delay={200} />
					<Stat number="99%" label="Client Retention" delay={300} />
				</div>
			</section>

			{/* Override stat colors for dark background */}
			<style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section:nth-of-type(1) .font-serif { color: #fdfdfd !important; }
        section:nth-of-type(1) .text-\\[\\#b89c72\\] { color: #b89c72 !important; }
      `}</style>

			{/* ── SERVICES ── */}
			<section
				id="services"
				className="px-[5%] py-24 max-w-[1400px] mx-auto scroll-mt-20"
			>
				<div className="text-center mb-16">
					<span className="uppercase text-[10px] tracking-[4px] text-[#b89c72] font-bold">
						Our Disciplines
					</span>
					<h2 className="font-serif text-3xl md:text-4xl text-[#0f172a] mt-3">
						Medical Excellence, Redefined
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<Service
						title="Molecular Diagnostics"
						text="Next-generation genomic sequencing and molecular screening technologies for precision medicine."
						img="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
						delay={0}
					/>
					<Service
						title="Preventive Medicine"
						text="Personalized preventive programs focused on longevity, risk reduction, and peak performance."
						img="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
						delay={100}
					/>
					<Service
						title="Executive Health Programs"
						text="Comprehensive annual health evaluations and concierge care designed for global executives."
						img="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
						delay={200}
					/>
					<Service
						title="AI Medical Analytics"
						text="Artificial intelligence systems for early disease detection, diagnostics, and treatment optimization."
						img="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
						delay={0}
					/>
					<Service
						title="Longevity Medicine"
						text="Advanced evidence-based therapies focused on healthy aging, cellular rejuvenation, and life extension."
						img="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80"
						delay={100}
					/>
					<Service
						title="Global Medical Concierge"
						text="Private medical coordination and access to the world's top specialists for executives and investors."
						img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
						delay={200}
					/>
				</div>
			</section>

			{/* ── APPROACH ── */}
			<section id="approach" className="py-24 bg-[#0f172a] scroll-mt-20">
				<div className="max-w-[1200px] mx-auto px-[5%]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div>
							<span className="uppercase text-[10px] tracking-[4px] text-[#b89c72] font-bold">
								Our Philosophy
							</span>
							<h2 className="font-serif text-3xl md:text-4xl text-white mt-4 leading-snug">
								Medicine at the Highest Standard
							</h2>
							<p className="text-slate-400 mt-6 leading-relaxed font-light">
								We combine cutting-edge science with the discreet, personalized
								service expected by the world's most demanding clients. Our
								protocols are built on decades of clinical research and refined
								by direct collaboration with leading academic medical centers.
							</p>
							<div className="mt-10 flex flex-col gap-5">
								{[
									'Direct access to top-tier specialists worldwide',
									'Evidence-based longevity and prevention protocols',
									'Complete discretion and data privacy',
									'24/7 medical coordination and emergency response',
								].map((item, i) => (
									<div key={i} className="flex items-start gap-4">
										<span className="w-1 h-1 rounded-full bg-[#b89c72] mt-2 shrink-0 block" />
										<p className="text-slate-300 text-sm">{item}</p>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
								alt="Medical Excellence"
								className="w-full h-[480px] object-cover"
							/>
							<div className="absolute -bottom-6 -left-6 bg-[#b89c72] p-6 hidden md:block">
								<p className="font-serif text-white text-2xl">15+</p>
								<p className="text-[10px] tracking-[2px] uppercase text-white/80 mt-1">
									Years of Excellence
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── TESTIMONIALS ── */}
			<section id="testimonials" className="px-[5%] py-24 scroll-mt-20">
				<div className="max-w-[1200px] mx-auto">
					<div className="text-center mb-16">
						<span className="uppercase text-[10px] tracking-[4px] text-[#b89c72] font-bold">
							Client Voices
						</span>
						<h2 className="font-serif text-3xl md:text-4xl text-[#0f172a] mt-3">
							Trusted by Global Leaders
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Testimonial
							quote="The level of care and discretion provided by Corporate Health is unmatched. Their preventive protocols have fundamentally changed how I approach my health."
							name="James Whitfield"
							title="Chairman, Whitfield Capital Group"
							delay={0}
						/>
						<Testimonial
							quote="Having access to world-class diagnostics through a single point of contact has been invaluable. The AI analytics identified a risk factor my previous physicians had missed for years."
							name="Elena Marchetti"
							title="CEO, Marchetti Ventures"
							delay={150}
						/>
						<Testimonial
							quote="Corporate Health represents the future of executive medicine. Their global network and 24/7 concierge model gives me complete peace of mind wherever I am in the world."
							name="Dr. Richard Osei"
							title="Managing Director, Osei Family Office"
							delay={300}
						/>
					</div>
				</div>
			</section>

			{/* ── CONTACT ── */}
			<section id="contact" className="px-[5%] py-24 bg-[#f8f8f6] scroll-mt-20">
				<div className="max-w-[580px] mx-auto text-center">
					<span className="uppercase text-[10px] tracking-[4px] text-[#b89c72] font-bold">
						Exclusive Access
					</span>
					<h2 className="font-serif text-3xl md:text-4xl text-[#0f172a] mt-4 mb-4">
						Request Confidential Access
					</h2>
					<p className="text-slate-500 mb-10 text-sm leading-relaxed">
						Contact our executive team to learn more about our global healthcare
						portfolio. All inquiries are handled with complete discretion.
					</p>
					<div className="flex flex-col gap-4 text-left">
						<input
							type="text"
							placeholder="Full Name"
							className="border border-gray-200 px-5 py-3.5 text-sm focus:outline-none focus:border-[#b89c72] transition-colors bg-white"
						/>
						<input
							type="text"
							placeholder="Organization"
							className="border border-gray-200 px-5 py-3.5 text-sm focus:outline-none focus:border-[#b89c72] transition-colors bg-white"
						/>
						<input
							type="email"
							placeholder="Email Address"
							className="border border-gray-200 px-5 py-3.5 text-sm focus:outline-none focus:border-[#b89c72] transition-colors bg-white"
						/>
						<textarea
							placeholder="Message"
							rows="4"
							className="border border-gray-200 px-5 py-3.5 text-sm focus:outline-none focus:border-[#b89c72] transition-colors bg-white resize-none"
						/>
						<button
							type="button"
							className="bg-[#0f172a] text-white py-4 text-[11px] tracking-[2px] hover:bg-[#b89c72] transition-colors duration-300 mt-2"
						>
							SEND MESSAGE
						</button>
					</div>
					<p className="text-xs text-slate-400 mt-6">
						Portfolio demonstration project — contact form disabled.
					</p>
				</div>
			</section>

			{/* ── FOOTER ── */}
			<footer className="py-12 border-t border-gray-100">
				<div className="max-w-[1400px] mx-auto px-[5%] flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="font-serif font-bold text-[#0f172a] tracking-[5px] text-sm">
						CORPORATE <span className="text-[#b89c72]">HEALTH</span>
					</div>
					<p className="text-[10px] text-slate-400 tracking-[4px] uppercase">
						Corporate Health Group © 2026
					</p>
					<div className="flex gap-6">
						{['Privacy Policy', 'Terms', 'Contact'].map((item) => (
							<span
								key={item}
								className="text-[10px] tracking-[1px] uppercase text-slate-400 hover:text-[#b89c72] cursor-pointer transition-colors"
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
