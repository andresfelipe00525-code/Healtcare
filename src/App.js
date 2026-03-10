import React from 'react';

function App() {
	return (
		<div className="min-h-screen bg-[#fdfdfd] selection:bg-[#b89c72] selection:text-white overflow-x-hidden">
			{/* NAVIGATION BAR - RESPONSIVE */}
			<nav className="navbar px-[5%] py-6">
				<div className="flex justify-between items-center max-w-[1400px] mx-auto">
					<div className="logo font-serif font-bold text-[#0f172a] tracking-[3px] md:tracking-[5px] text-sm md:text-lg">
						CORPORATE <span className="text-[#b89c72]">HEALTH</span>
					</div>
					{/* Los links se ocultan en móvil para no amontonar, se ven en iPad (md) en adelante */}
					<div className="hidden md:flex gap-8 items-center">
						<a
							href="#services"
							className="text-[10px] font-bold tracking-widest hover:text-[#b89c72] transition-colors"
						>
							SERVICES
						</a>
						<a
							href="#theatre"
							className="text-[10px] font-bold tracking-widest hover:text-[#b89c72] transition-colors"
						>
							THEATRES
						</a>
						<a
							href="#contact"
							className="nav-cta text-[10px] font-bold border border-[#0f172a] px-4 py-2 hover:bg-[#0f172a] hover:text-white transition-all"
						>
							BOARD ACCESS
						</a>
					</div>
				</div>
			</nav>

			{/* HERO SECTION - ADAPTATIVO */}
			<header className="hero px-[5%] py-20 md:py-32 text-center max-w-[1400px] mx-auto reveal">
				<span className="gold-tag uppercase text-[8px] md:text-[10px] tracking-[4px] text-[#b89c72] font-bold">
					Global Elite Medical Portfolio
				</span>
				<h1 className="font-serif italic text-[#0f172a] text-3xl md:text-5xl lg:text-7xl mt-6 leading-tight">
					The Art of <span className="text-[#b89c72]">Longevity</span>{' '}
					<br className="hidden md:block" /> and Precision
				</h1>
				<p className="font-light text-slate-500 mt-6 max-w-2xl mx-auto text-sm md:text-base px-4">
					World-class healthcare infrastructure designed for global leaders,
					combining innovative biotechnology with five-star hospitality.
				</p>
				<div className="flex flex-col md:flex-row gap-4 justify-center mt-10 px-8 md:px-0">
					<button className="btn-primary bg-[#0f172a] text-white px-8 py-4 text-[10px] tracking-[2px] hover:bg-[#b89c72] transition-all">
						VIEW PORTFOLIO
					</button>
					<button className="border border-[#0f172a] px-8 py-4 text-[10px] tracking-[2px] hover:bg-[#0f172a] hover:text-white transition-all uppercase font-bold">
						Virtual Tour
					</button>
				</div>
			</header>

			{/* SERVICES SECTION - GRID RESPONSIVO */}
			<section
				id="services"
				className="px-[5%] py-16 md:py-24 max-w-[1400px] mx-auto"
			>
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-serif text-[#0f172a]">
						Elite Specializations
					</h2>
					<div className="w-10 h-[2px] bg-[#b89c72] mx-auto mt-4"></div>
				</div>

				{/* Aquí está el truco: 1 col en móvil, 2 en tablet (sm), 3 en PC (lg) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
					{/* Service 1: Molecular Lab */}
					<div className="service-card group">
						<div className="overflow-hidden h-64">
							<img
								src="https://images.unsplash.com/photo-1511174511562-5f7f185854c8?q=80&w=800&auto=format&fit=crop"
								alt="Molecular Lab"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
						</div>
						<div className="py-8">
							<h3 className="font-serif text-xl mb-4">Molecular Diagnostics</h3>
							<p className="text-slate-500 text-sm leading-relaxed mb-6">
								Next-gen genomic sequencing providing real-time biological
								insights.
							</p>
							<button className="text-[#b89c72] text-[10px] font-bold tracking-widest border-b border-[#b89c72] pb-1">
								LAB CAPABILITIES
							</button>
						</div>
					</div>

					{/* Service 2: Neuro-Psychology */}
					<div className="service-card group">
						<div className="overflow-hidden h-64">
							<img
								src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=60&w=800"
								alt="Neuro"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
						</div>
						<div className="py-8">
							<h3 className="font-serif text-xl mb-4">Neuro-Psychology</h3>
							<p className="text-slate-500 text-sm leading-relaxed mb-6">
								Cognitive optimization and stress resilience for
								high-performance leaders.
							</p>
							<button className="text-[#b89c72] text-[10px] font-bold tracking-widest border-b border-[#b89c72] pb-1">
								MENTAL PEAK
							</button>
						</div>
					</div>

					{/* Service 3: Advanced Imaging */}
					<div className="service-card group">
						<div className="overflow-hidden h-64">
							<img
								src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=60&w=800"
								alt="MRI"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
						</div>
						<div className="py-8">
							<h3 className="font-serif text-xl mb-4">Predictive Imaging</h3>
							<p className="text-slate-500 text-sm leading-relaxed mb-6">
								AI-enhanced MRI scans for early detection of sub-clinical
								conditions.
							</p>
							<button className="text-[#b89c72] text-[10px] font-bold tracking-widest border-b border-[#b89c72] pb-1">
								SCAN TECH
							</button>
						</div>
					</div>

					{/* Service 4: Bio-Regeneration */}
					<div className="service-card group">
						<div className="overflow-hidden h-64">
							<img
								src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=60&w=800"
								alt="Bio"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
						</div>
						<div className="py-8">
							<h3 className="font-serif text-xl mb-4">Bio-Regeneration</h3>
							<p className="text-slate-500 text-sm leading-relaxed mb-6">
								Stem cell therapies to optimize cellular age and biological
								vitality.
							</p>
							<button className="text-[#b89c72] text-[10px] font-bold tracking-widest border-b border-[#b89c72] pb-1">
								CELLULAR CARE
							</button>
						</div>
					</div>

					{/* Service 5: Robotic Surgery */}
					<div className="service-card group">
						<div className="overflow-hidden h-64">
							<img
								src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=60&w=800"
								alt="Surgery"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
						</div>
						<div className="py-8">
							<h3 className="font-serif text-xl mb-4">Robotic Surgery</h3>
							<p className="text-slate-500 text-sm leading-relaxed mb-6">
								Precision operating suites with DaVinci robotic assistance.
							</p>
							<button className="text-[#b89c72] text-[10px] font-bold tracking-widest border-b border-[#b89c72] pb-1">
								THEATRES
							</button>
						</div>
					</div>

					{/* Service 6: Concierge */}
					<div className="service-card group">
						<div className="overflow-hidden h-64">
							<img
								src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=60&w=800"
								alt="Concierge"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
						</div>
						<div className="py-8">
							<h3 className="font-serif text-xl mb-4">Concierge Medicine</h3>
							<p className="text-slate-500 text-sm leading-relaxed mb-6">
								24/7 dedicated medical board access for worldwide logistics.
							</p>
							<button className="text-[#b89c72] text-[10px] font-bold tracking-widest border-b border-[#b89c72] pb-1">
								MEMBERSHIP
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT SECTION - ADAPTATIVO */}
			<section id="contact" className="bg-[#f8f8f8] py-20 px-[5%]">
				<div className="max-w-[1000px] mx-auto bg-white p-8 md:p-16 border border-slate-100 flex flex-col md:flex-row gap-12">
					<div className="md:w-1/3">
						<h2 className="text-3xl font-serif text-[#0f172a]">
							Executive Mailbox
						</h2>
						<p className="text-[#b89c72] text-[10px] tracking-[2px] mt-4 uppercase font-bold">
							Priority Line
						</p>
						<p className="text-slate-500 text-sm italic mt-2">
							Secure & Confidential
						</p>
						<div className="mt-8 space-y-4">
							<p className="text-xs font-bold tracking-widest">
								+1 (212) 555-0800
							</p>
							<p className="text-xs font-bold tracking-widest leading-loose">
								725 FIFTH AVE,
								<br />
								NEW YORK, NY
							</p>
						</div>
					</div>

					<form
						className="md:w-2/3 space-y-6"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<input
								type="text"
								placeholder="FULL NAME"
								className="border-b border-slate-200 py-3 text-[10px] tracking-widest outline-none focus:border-[#b89c72] transition-colors w-full"
							/>
							<input
								type="email"
								placeholder="CORPORATE EMAIL"
								className="border-b border-slate-200 py-3 text-[10px] tracking-widest outline-none focus:border-[#b89c72] transition-colors w-full"
							/>
						</div>
						<textarea
							placeholder="MESSAGE FOR THE BOARD..."
							className="border-b border-slate-200 py-3 text-[10px] tracking-widest outline-none focus:border-[#b89c72] transition-colors w-full h-32"
						></textarea>
						<button className="w-full bg-[#0f172a] text-white py-5 text-[10px] tracking-[4px] font-bold hover:bg-[#b89c72] transition-all">
							ESTABLISH SECURE INQUIRY
						</button>
					</form>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="py-12 text-center border-t border-slate-50 px-4">
				<p className="text-[8px] md:text-[10px] text-slate-400 tracking-[3px] md:tracking-[6px] uppercase font-light">
					Corporate Health Group © 2026 | New York · London · Dubai · Zurich
				</p>
			</footer>
		</div>
	);
}

export default App;
