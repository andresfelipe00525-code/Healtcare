import React from 'react';
import './App.css';

const App = () => {
	const services = [
		{
			t: 'Executive Diagnostics',
			d: 'Bespoke medical screenings for leadership. Precision analytics to ensure sustained peak performance.',
			img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce',
		},
		{
			t: 'Strategic Compliance',
			d: 'Global certification protocols. We align your workforce with international health standards.',
			img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842',
		},
		{
			t: 'Longevity Programs',
			d: 'Advanced preventive strategies focusing on cognitive vitality and long-term health.',
			img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb',
		},
	];

	return (
		<div className="luxury-app">
			{/* NAVBAR */}
			<nav className="navbar">
				<div className="nav-container">
					<div className="logo">
						CORPORATE <strong>HEALTH</strong>
					</div>
					<div className="nav-links">
						<a href="#services">SPECIALTIES</a>
						<a href="#contact" className="nav-cta">
							BOOK BRIEFING
						</a>
					</div>
				</div>
			</nav>

			{/* HERO */}
			<header className="hero reveal">
				<div className="hero-content">
					<span className="gold-tag">ESTABLISHED 2026</span>
					<h1>
						Defining the Standard of <span>Workplace Wellbeing.</span>
					</h1>
					<p>
						Strategic healthcare tailored for global organizations with the
						discretion and excellence your company deserves.
					</p>
					<button className="btn-primary">OUR SOLUTIONS</button>
				</div>
			</header>

			{/* STATS - EL DETALLE DE NIVEL */}
			<section className="stats-grid reveal">
				<div className="stat-item">
					<span className="stat-num">500+</span>
					<span className="stat-desc">GLOBAL PARTNERS</span>
				</div>
				<div className="stat-item">
					<span className="stat-num">12K</span>
					<span className="stat-desc">ANNUAL EVALUATIONS</span>
				</div>
				<div className="stat-item">
					<span className="stat-num">100%</span>
					<span className="stat-desc">DISCRETION GUARANTEED</span>
				</div>
			</section>

			{/* SERVICES - GRID DE 3 */}
			<section id="services" className="services-section reveal">
				<div className="section-title">
					<span className="gold-tag">EXPERTISE</span>
					<h2>World-Class Services</h2>
					<div className="divider"></div>
				</div>
				<div className="services-grid">
					{services.map((s, i) => (
						<div key={i} className="service-card">
							<div className="img-wrapper">
								<img src={s.img} alt={s.t} />
							</div>
							<div className="card-content">
								<h3>{s.t}</h3>
								<p>{s.d}</p>
								<button className="btn-text">EXPLORE SPECIALTY →</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CONTACT - BUZÓN FALSO */}
			<section id="contact" className="contact-section reveal">
				<div className="contact-container">
					<div className="contact-info">
						<h2>Secure Inquiry</h2>
						<p>
							Request a private consultation with our strategic medical board.
						</p>
					</div>
					<form className="contact-form" onSubmit={(e) => e.preventDefault()}>
						<div className="form-group">
							<input type="text" placeholder="Full Name" />
							<input type="email" placeholder="Corporate Email" />
						</div>
						<textarea placeholder="Organization Requirements"></textarea>
						<button className="btn-submit">SEND MESSAGE</button>
					</form>
				</div>
			</section>

			<footer className="footer">
				<p>© 2026 CORPORATE HEALTH SOLUTIONS • LONDON • NY • ZURICH</p>
			</footer>
		</div>
	);
};

export default App;
