import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="portfolio">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="brand">Hope</div>
        <ul class="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    /*the welcome section below navigation bars tab*/
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h1>Welcome to <span class="brand-highlight">Hope</span></h1>
        <p class="hero-description">
          A modern and elegant starter template with a clean design using black,<br>
          gold, and silver gray colors.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" id="counter">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="about">
      <div class="container">
        <h2>Key Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-header">
              <div class= ></div>
              <h3>Responsive Design</h3>
            </div>
            <p>Fully responsive layout that looks great on all devices from mobile to desktop.</p>
          </div>
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-line"></div>
              <h3>Modern Stack</h3>
            </div>
            <p>Built with React, TypeScript, and Tailwind CSS for a modern development experience.</p>
          </div>
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-line"></div>
              <h3>Easy Customization</h3>
            </div>
            <p>Simple to customize with Tailwind utility classes and component-based architectures.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <h2>Our Services</h2>
        <p class="section-description">
          We offer a range of digital solutions to help your business grow and succeed.
        </p>
        <div class="services-grid">
          <div class="service-item">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern technologies.</p>
          </div>
          <div class="service-item">
            <div class="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive user interfaces that engage users.</p>
          </div>
          <div class="service-item">
            <div class="service-icon">💡</div>
            <h3>Consulting</h3>
            <p>Strategic guidance for your digital transformation journey.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <h3>Hope</h3>
              <p>A modern starter template with a clean design using black, gold, and silver gray colors.</p>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Links</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Resources</h4>
            <ul class="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact</h4>
            <div class="contact-info">
              <p>123 Main Street</p>
              <p>Musgrave, Durban 4001</p>
              <p><a href="mailto:info@yourbrand.com">madlalahope@gmail.com</a></p>
              <p><a href="tel:+1234567890">(+27) 79 456-7890</a></p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`

// Interactive counter for the "Get Started" button
function setupInteractiveButton(element) {
  let clickCount = 0
  const messages = [
    "Get Started",
    "Projects: 1",
    "Projects: 5", 
    "Projects: 10",
    "Projects: 25",
    "Projects: 50+",
    "Industry Leader",
    "Get Started" // Reset
  ]
  
  const updateButton = (count) => {
    clickCount = count
    element.textContent = messages[count]
    
    // Add visual feedback
    element.style.transform = 'scale(0.95)'
    setTimeout(() => {
      element.style.transform = 'scale(1)'
    }, 100)
    
    // Add special styling for higher counts
    if (count > 4) {
      element.style.background = 'linear-gradient(135deg, #ffd700, #ffed4e)'
      element.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)'
    } else {
      element.style.background = ''
      element.style.boxShadow = ''
    }
  }
  
  element.addEventListener('click', () => {
    const nextCount = clickCount >= messages.length - 1 ? 0 : clickCount + 1
    updateButton(nextCount)
  })
  
  updateButton(0)
}

setupInteractiveButton(document.querySelector('#counter'))