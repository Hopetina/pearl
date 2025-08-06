import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="portfolio">
    <!-- Particle Background -->
    <div class="particle-container" id="particles"></div>
    
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
        <div class="typing-container">
          <h1>Welcome to <span class="brand-highlight">Hope</span></h1>
          <p class="hero-description typing-text" id="typing-text">
            A modern and elegant starter template with a clean design using black, gold, and silver gray colors.
          </p>
        </div>
        <div class="hero-buttons">
          <button class="btn btn-primary ripple-effect" id="get-started-btn">
            <span>Get Started</span>
            <div class="btn-particles"></div>
          </button>
          <button class="btn btn-secondary ripple-effect" id="learn-more-btn">
            <span>Learn More</span>
            <div class="btn-particles"></div>
          </button>
        </div>
        <div class="hero-stats">
          <div class="stat-item" data-count="150">
            <span class="stat-number">0</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-item" data-count="50">
            <span class="stat-number">0</span>
            <span class="stat-label">Clients</span>
          </div>
          <div class="stat-item" data-count="5">
            <span class="stat-number">0</span>
            <span class="stat-label">Years</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="about">
      <div class="container">
        <h2 class="section-title">Key Features</h2>
        <div class="features-grid">
          <div class="feature-card interactive-card" data-tilt>
            <div class="feature-header">
              <div class="feature-icon">📱</div>
              <h3>Responsive Design</h3>
            </div>
            <p>Fully responsive layout that looks great on all devices from mobile to desktop.</p>
            <div class="card-glow"></div>
          </div>
          <div class="feature-card interactive-card" data-tilt>
            <div class="feature-header">
              <div class="feature-icon">⚡</div>
              <h3>Modern Stack</h3>
            </div>
            <p>Built with modern web technologies and optimized for performance and user experience.</p>
            <div class="card-glow"></div>
          </div>
          <div class="feature-card interactive-card" data-tilt>
            <div class="feature-header">
              <div class="feature-icon">🎨</div>
              <h3>Easy Customization</h3>
            </div>
            <p>Simple to customize with clean CSS and modular component-based architecture.</p>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Skills Section -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-grid">
          <div class="skill-item" data-skill="95">
            <div class="skill-info">
              <span class="skill-name">Web Development</span>
              <span class="skill-percentage">95%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress"></div>
            </div>
          </div>
          <div class="skill-item" data-skill="88">
            <div class="skill-info">
              <span class="skill-name">UI/UX Design</span>
              <span class="skill-percentage">88%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress"></div>
            </div>
          </div>
          <div class="skill-item" data-skill="92">
            <div class="skill-info">
              <span class="skill-name">JavaScript</span>
              <span class="skill-percentage">92%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress"></div>
            </div>
          </div>
          <div class="skill-item" data-skill="85">
            <div class="skill-info">
              <span class="skill-name">React</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-description">
          We offer a range of digital solutions to help your business grow and succeed.
        </p>
        <div class="services-grid">
          <div class="service-item interactive-card" data-tilt>
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern technologies.</p>
            <button class="service-btn ripple-effect">Learn More</button>
            <div class="card-glow"></div>
          </div>
          <div class="service-item interactive-card" data-tilt>
            <div class="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive user interfaces that engage users.</p>
            <button class="service-btn ripple-effect">Learn More</button>
            <div class="card-glow"></div>
          </div>
          <div class="service-item interactive-card" data-tilt>
            <div class="service-icon">💡</div>
            <h3>Consulting</h3>
            <p>Strategic guidance for your digital transformation journey.</p>
            <button class="service-btn ripple-effect">Learn More</button>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item" data-year="2020">
            <div class="timeline-content">
              <h3>Company Founded</h3>
              <p>Started with a vision to create amazing digital experiences.</p>
            </div>
          </div>
          <div class="timeline-item" data-year="2021">
            <div class="timeline-content">
              <h3>First Major Project</h3>
              <p>Delivered our first enterprise-level web application.</p>
            </div>
          </div>
          <div class="timeline-item" data-year="2023">
            <div class="timeline-content">
              <h3>Team Expansion</h3>
              <p>Grew our team to 15+ talented developers and designers.</p>
            </div>
          </div>
          <div class="timeline-item" data-year="2025">
            <div class="timeline-content">
              <h3>Innovation Hub</h3>
              <p>Launched our innovation lab for cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-description">
          Ready to start your project? Let's discuss how we can help bring your vision to life.
        </p>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item interactive-card" data-tilt>
              <div class="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@hope.com">info@hope.com</a></p>
              </div>
              <div class="card-glow"></div>
            </div>
            
            <div class="contact-item interactive-card" data-tilt>
              <div class="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
              <div class="card-glow"></div>
            </div>
            
            <div class="contact-item interactive-card" data-tilt>
              <div class="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>123 Main Street<br>Anytown, USA 12345</p>
              </div>
              <div class="card-glow"></div>
            </div>
          </div>
          
          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required>
              <div class="input-highlight"></div>
            </div>
            
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required>
              <div class="input-highlight"></div>
            </div>
            
            <div class="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required>
              <div class="input-highlight"></div>
            </div>
            
            <div class="form-group">
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              <div class="input-highlight"></div>
            </div>
            
            <button type="submit" class="btn btn-primary submit-btn ripple-effect">
              <span class="btn-text">Send Message</span>
              <span class="btn-loading">Sending...</span>
              <div class="btn-particles"></div>
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

// Particle System
class ParticleSystem {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    
    this.setupCanvas();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }
  
  setupCanvas() {
    const container = document.getElementById('particles');
    container.appendChild(this.canvas);
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '1';
    this.resizeCanvas();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  bindEvents() {
    window.addEventListener('resize', () => this.resizeCanvas());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      // Mouse interaction
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += (dx / distance) * force * 0.01;
        particle.vy += (dy / distance) * force * 0.01;
      }
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Boundary check
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`;
      this.ctx.fill();
      
      // Draw connections
      this.particles.forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.strokeStyle = `rgba(255, 215, 0, ${0.1 * (1 - distance / 80)})`;
          this.ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Ripple Effect
function createRipple(e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Tilt Effect
function setupTiltEffect() {
  document.querySelectorAll('[data-tilt]').forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// Typing Animation
function setupTypingAnimation() {
  const text = "A modern and elegant starter template with a clean design using black, gold, and silver gray colors.";
  const element = document.getElementById('typing-text');
  let index = 0;
  
  element.textContent = '';
  
  function typeWriter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  
  setTimeout(typeWriter, 1000);
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-item');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const numberElement = counter.querySelector('.stat-number');
    let current = 0;
    const increment = target / 100;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        numberElement.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        numberElement.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Skill Bar Animation
function animateSkillBars() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillLevel = entry.target.dataset.skill;
        const progressBar = entry.target.querySelector('.skill-progress');
        
        setTimeout(() => {
          progressBar.style.width = skillLevel + '%';
        }, 200);
      }
    });
  }, { threshold: 0.5 });
  
  skillItems.forEach(item => observer.observe(item));
}

// Timeline Animation
function setupTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.3 });
  
  timelineItems.forEach(item => observer.observe(item));
}

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

// Setup ripple effects
function setupRippleEffects() {
  document.querySelectorAll('.ripple-effect').forEach(button => {
    button.addEventListener('click', createRipple);
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
  setupSmoothScrolling();
  setupMobileMenu();
  setupHeroButtons();
  setupServiceButtons();
  setupContactForm();
  setupScrollAnimations();
  setupNavbarScroll();
  setupScrollIndicator();
  setupRippleEffects();
  setupTiltEffect();
  setupTypingAnimation();
  setupTimelineAnimation();
  
  // Delayed animations
  setTimeout(() => {
    animateCounters();
    animateSkillBars();
  }, 1000);
});