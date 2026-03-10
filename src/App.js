import React from 'react';

function App() {
	return (
		<div className="min-h-screen bg-[#fdfdfd] selection:bg-[#b89c72] selection:text-white overflow-x-hidden">
			{/* NAVBAR */}
			<nav className="px-[5%] py-6 border-b border-gray-100">
				<div className="flex justify-between items-center max-w-[1400px] mx-auto">
					<div className="font-serif font-bold text-[#0f172a] tracking-[5px] text-lg">
						CORPORATE <span className="text-[#b89c72]">HEALTH</span>
					</div>

					<div className="hidden md:flex gap-8 items-center">
						<a
							href="#services"
							className="text-[11px] font-bold tracking-widest hover:text-[#b89c72] transition"
						>
							SERVICES
						</a>

						<a
							href="#contact"
							className="text-[11px] font-bold border border-[#0f172a] px-4 py-2 hover:bg-[#0f172a] hover:text-white transition"
						>
							BOARD ACCESS
						</a>
					</div>
				</div>
			</nav>

			{/* HERO */}
			<header className="px-[5%] py-24 text-center max-w-[1200px] mx-auto">
				<span className="uppercase text-[10px] tracking-[4px] text-[#b89c72] font-bold">
					Global Elite Medical Portfolio
				</span>

				<h1 className="font-serif italic text-[#0f172a] text-4xl md:text-6xl lg:text-7xl mt-6 leading-tight">
					The Art of <span className="text-[#b89c72]">Longevity</span>
					<br className="hidden md:block" /> and Precision
				</h1>

				<p className="text-slate-500 mt-6 max-w-xl mx-auto">
					World-class healthcare infrastructure designed for global leaders.
				</p>

				<button className="mt-10 bg-[#0f172a] text-white px-8 py-4 text-[11px] tracking-[2px] hover:bg-[#b89c72] transition">
					VIEW PORTFOLIO
				</button>
			</header>

			{/* SERVICES */}
			<section id="services" className="px-[5%] py-20 max-w-[1400px] mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<Service
						title="Molecular Diagnostics"
						text="Next-generation genomic sequencing and molecular screening technologies."
						img="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
					/>

					<Service
						title="Preventive Medicine"
						text="Personalized preventive programs focused on longevity and risk reduction."
						img="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
					/>

					<Service
						title="Executive Health Programs"
						text="Comprehensive annual health evaluations designed for global executives."
						img="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800"
					/>

					<Service
						title="AI Medical Analytics"
						text="Artificial intelligence systems for early disease detection and diagnostics."
						img="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
					/>

					<Service
						title="Longevity Medicine"
						text="Advanced therapies focused on healthy aging and life extension."
						img="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"
					/>

					<Service
						title="Global Medical Concierge"
						text="Private medical coordination services for international executives and investors."
						img="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800"
					/>
				</div>
			</section>

			{/* CONTACT */}
			<section id="contact" className="px-[5%] py-24 bg-[#f8f8f8]">
				<div className="max-w-[600px] mx-auto text-center">
					<h2 className="font-serif text-3xl mb-6">
						Request Confidential Access
					</h2>

					<p className="text-slate-500 mb-10 text-sm">
						Contact our executive team to learn more about our global healthcare
						portfolio.
					</p>

					<form className="flex flex-col gap-4">
						<input
							type="text"
							placeholder="Full Name"
							className="border border-gray-300 px-4 py-3"
						/>

						<input
							type="email"
							placeholder="Email Address"
							className="border border-gray-300 px-4 py-3"
						/>

						<textarea
							placeholder="Message"
							rows="4"
							className="border border-gray-300 px-4 py-3"
						/>

						<button
							type="button"
							className="bg-[#0f172a] text-white py-3 hover:bg-[#b89c72] transition"
						>
							SEND MESSAGE
						</button>
					</form>

					<p className="text-xs text-slate-400 mt-6">
						Portfolio demonstration project — contact form disabled.
					</p>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="py-12 text-center border-t border-gray-100">
				<p className="text-[10px] text-slate-400 tracking-[4px] uppercase">
					Corporate Health Group © 2026
				</p>
			</footer>
		</div>
	);
}

/* SERVICE CARD COMPONENT */

function Service({ title, text, img }) {
	return (
		<div className="group">
			<img
				src={img}
				className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
				alt={title}
			/>

			<h3 className="font-serif text-xl mt-4">{title}</h3>

			<p className="text-slate-500 text-sm mt-2">{text}</p>
		</div>
	);
}

export default App;
