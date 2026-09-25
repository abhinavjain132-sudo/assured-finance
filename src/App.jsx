import { useState } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app">

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">ASSURED FINANCE</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
  Book Consultation
</a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">FINANCIAL CONSULTANCY</p>

          <h1>
            Financial clarity.
            <br />
            Confident decisions.
          </h1>

          <p className="hero-text">
            Professional financial consultation and planning
            for individuals and businesses.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
  Get Started
</a>
            <a href="#services" className="secondary-button">
  Our Services
</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Our Services</h2>
          <p>
            Practical financial guidance designed around your goals,
            priorities and long-term plans.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-number">01</div>
            <h3>Investment Planning</h3>
            <p>
              Structured planning to help you understand your
              financial goals and investment options.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>
            <h3>Wealth Management</h3>
            <p>
              A thoughtful approach to organizing, protecting
              and planning your financial resources.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>
            <h3>Business Finance</h3>
            <p>
              Financial planning and guidance for entrepreneurs
              and growing businesses.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-content">
          <p className="eyebrow">ABOUT ASSURED FINANCE</p>

          <h2>Clear advice. Long-term thinking.</h2>

          <p>
            At Assured Finance, we focus on making financial
            decisions easier to understand. Our approach combines
            careful planning, clear communication and a focus on
            long-term objectives.
          </p>

          <a href="#insights" className="primary-button">
  Learn More
</a>
        </div>
      </section>

      {/* Insights */}
      <section className="insights" id="insights">
        <div className="section-heading">
          <p className="eyebrow">FINANCIAL INSIGHTS</p>
          <h2>Knowledge that supports better decisions.</h2>
        </div>

        <div className="insight-grid">
          <article>
            <span>Planning</span>
            <h3>Building a structured financial plan</h3>
            <p>
              Understand the key elements that can shape a
              practical long-term financial plan.
            </p>
          </article>

          <article>
            <span>Business</span>
            <h3>Understanding business finance</h3>
            <p>
              Explore financial considerations that matter when
              running and growing a business.
            </p>
          </article>

          <article>
            <span>Wealth</span>
            <h3>Thinking beyond short-term goals</h3>
            <p>
              Why long-term financial planning can help bring
              greater structure to financial decisions.
            </p>
          </article>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact" id="contact">
  <div className="contact-content">
    <p className="eyebrow">LET'S TALK</p>

    <h2>Ready to take the next step?</h2>

    <p>
      Start a conversation about your financial goals
      and planning needs.
    </p>
  </div>

  <form
  className="consultation-form"
  id="contact-form"
  onSubmit={handleSubmit}
>

    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your full name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+91 XXXXX XXXXX"
      />
    </div>

    <div className="form-group">
      <label htmlFor="service">Service Required</label>

      <select id="service" name="service">
        <option value="">Select a service</option>
        <option value="investment">
          Investment Planning
        </option>
        <option value="wealth">
          Wealth Management
        </option>
        <option value="business">
          Business Finance
        </option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>

      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Tell us briefly about your requirements"
      ></textarea>
    </div>

    <button type="submit" className="primary-button">
  {submitted ? 'Request Submitted ✓' : 'Submit Consultation Request'}
</button>

{submitted && (
  <p className="success-message">
    Thank you. Your consultation request has been received.
  </p>
)}

  </form>
</section>

      {/* Footer */}
      <footer>
        <div className="logo">ASSURED FINANCE</div>

        <p>
          © 2026 Assured Finance. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App