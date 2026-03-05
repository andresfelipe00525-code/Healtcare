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

export default App;
