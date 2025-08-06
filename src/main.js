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
        <div class="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h1>Welcome to <span class="brand-highlight">Hope</span></h1>
        <p class="hero-description">
          A modern and elegant starter template with a clean design using black,<br>
          gold, and silver gray colors.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" id="get-started-btn">Get Started</button>
          <button class="btn btn-secondary" id="learn-more-btn">Learn More</button>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="about">
      <div class="container">
        <h2>Key Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">📱</div>
              <h3>Responsive Design</h3>
            </div>
            <p>Fully responsive layout that looks great on all devices from mobile to desktop.</p>
          </div>
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">⚡</div>
              <h3>Modern Stack</h3>
            </div>
            <p>Built with modern web technologies and optimized for performance and user experience.</p>
          </div>
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">🎨</div>
              <h3>Easy Customization</h3>
            </div>
            <p>Simple to customize with clean CSS and modular component-based architecture.</p>
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
            <button class="service-btn">Learn More</button>
          </div>
          <div class="service-item">
            <div class="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive user interfaces that engage users.</p>
            <button class="service-btn">Learn More</button>
          </div>
          <div class="service-item">
            <div class="service-icon">💡</div>
            <h3>Consulting</h3>
            <p>Strategic guidance for your digital transformation journey.</p>
            <button class="service-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <h2>Get In Touch</h2>
        <p class="section-description">
          Ready to start your project? Let's discuss how we can help bring your vision to life.
        </p>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@hope.com">info@hope.com</a></p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>123 Main Street<br>Anytown, USA 12345</p>
              </div>
            </div>
          </div>
          
          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required>
            </div>
            
            <div class="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required>
            </div>
            
            <div class="form-group">
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary submit-btn">
              <span class="btn-text">Send Message</span>
              <span class="btn-loading">Sending...</span>
            </button>
          </form>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <footer class="footer">
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
              <p>Anytown, USA 12345</p>
              <p><a href="mailto:info@hope.com">info@hope.com</a></p>
              <p><a href="tel:+1234567890">(123) 456-7890</a></p>
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

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Hero buttons functionality
function setupHeroButtons() {
  const getStartedBtn = document.querySelector('#get-started-btn');
  const learnMoreBtn = document.querySelector('#learn-more-btn');
  
  getStartedBtn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  learnMoreBtn.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Service buttons functionality
function setupServiceButtons() {
  document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceTitle = e.target.parentElement.querySelector('h3').textContent;
      showNotification(`Learn more about ${serviceTitle} - Contact us for details!`);
      
      setTimeout(() => {
        document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
        });
      }, 1500);
    });
  });
}

// Contact form functionality
function setupContactForm() {
  const form = document.querySelector('#contact-form');
  const submitBtn = form.querySelector('.submit-btn');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    submitBtn.classList.add('loading');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    
    // Reset form
    form.reset();
    submitBtn.classList.remove('loading');
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => notification.classList.add('show'), 100);
  
  // Remove notification
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.feature-card, .service-item, .contact-item').forEach(el => {
    observer.observe(el);
  });
}

// Navbar scroll effect
function setupNavbarScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Scroll indicator
function setupScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  scrollIndicator.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  // Hide scroll indicator when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  });
}

// Initialize all functionality
setupSmoothScrolling();
setupMobileMenu();
setupHeroButtons();
setupServiceButtons();
setupContactForm();
setupScrollAnimations();
setupNavbarScroll();
setupScrollIndicator();