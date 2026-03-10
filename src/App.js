<<<<<<< HEAD
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
=======
import './App.css';

function App() {
	return (
		<div>
			<nav className="navbar">
				<div className="logo">
					<img
						src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
						alt="logo"
					/>

					<h1>Corporate Health</h1>
				</div>

				<ul className="menu">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>

			<section className="hero" id="home">
				<div className="hero-text">
					<h2>MODERN OCCUPATIONAL HEALTHCARE</h2>

					<p>
						Corporate Health provides innovative occupational medicine solutions
						designed to protect employees, improve workplace safety and help
						organizations maintain the highest standards of corporate health
						management.
					</p>

					<button className="hero-btn">EXPLORE SERVICES</button>
				</div>

				<img
					className="hero-img"
					src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
					alt="Doctors team"
				/>
			</section>

			<section className="stats">
				<div className="stat">
					<h3>500+</h3>
					<p>Companies Served</p>
				</div>

				<div className="stat">
					<h3>12K</h3>
					<p>Medical Evaluations</p>
				</div>

				<div className="stat">
					<h3>98%</h3>
					<p>Client Satisfaction</p>
				</div>
			</section>

			<section id="services" className="services">
				<h2>OUR SERVICES</h2>

				<div className="services-grid">
					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1588776814546-daab30f310ce"
							alt="service"
						/>
						<h3>Medical Evaluations</h3>
						<p>Comprehensive medical assessments for employees.</p>
					</div>

					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1581056771107-24ca5f033842"
							alt="service"
						/>
						<h3>Work Certificates</h3>
						<p>Official occupational health certificates.</p>
					</div>

					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
							alt="service"
						/>
						<h3>Corporate Wellness</h3>
						<p>Programs designed to promote employee wellbeing.</p>
					</div>

					<div className="card">
						<img
							src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
							alt="service"
						/>
						<h3>Safety Training</h3>
						<p>Professional workplace health training.</p>
					</div>
				</div>
			</section>

			<section className="doctors">
				<h2>OUR MEDICAL SPECIALISTS</h2>

				<div className="doctors-grid">
					<div className="doctor">
						<img
							src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
							alt="doctor"
						/>

						<h4>Dr. Emily Carter</h4>

						<p>Occupational Medicine</p>
					</div>

					<div className="doctor">
						<img
							src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
							alt="doctor"
						/>

						<h4>Dr. Daniel Morris</h4>

						<p>Workplace Safety</p>
					</div>

					<div className="doctor">
						<img
							src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
							alt="doctor"
						/>

						<h4>Dr. Laura Bennett</h4>

						<p>Preventive Healthcare</p>
					</div>
				</div>
			</section>

			<section id="about" className="about">
				<h2>ABOUT CORPORATE HEALTH</h2>

				<p>
					Corporate Health is a modern occupational healthcare platform
					dedicated to protecting employee wellbeing and improving corporate
					safety standards through preventive medicine, diagnostics, and
					workplace health strategies.
				</p>
			</section>

			<section id="contact" className="contact">
				<h2>CONTACT US</h2>

				<p className="contact-text">
					This form is a prototype used for portfolio presentation and does not
					send real messages yet.
				</p>

				<form className="form">
					<input type="text" placeholder="Your Name" />

					<input type="email" placeholder="Your Email" />

					<textarea placeholder="Your Message"></textarea>

					<button type="button">Send Message</button>
				</form>
			</section>

			<footer className="footer">
				<p>© 2026 Corporate Health</p>

				<p>Occupational Healthcare Solutions</p>
			</footer>
		</div>
	);
}
>>>>>>> b3469766e1a524877702e54ea864541e5f136f3e

export default App;
