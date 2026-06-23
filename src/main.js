import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="portfolio">
    <!-- Particle Background -->
    <div class="particle-container" id="particles"></div>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="#home" class="brand">Hope</a>
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
          <p class="hero-description" id="typing-text">
            Crafting digital experiences with elegance and precision.
          </p>
        </div>
        <div class="hero-buttons">
          <button class="btn btn-primary ripple-effect" id="get-started-btn">
            <span>Get Started</span>
          </button>
          <button class="btn btn-secondary ripple-effect" id="learn-more-btn">
            <span>Learn More</span>
          </button>
        </div>
        <div class="global-stats">
          <div class="stat-item" data-count="5">
            <span class="stat-number">0</span>
            <span class="stat-label">Years Excellence</span>
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
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">&#128241;</div>
              <h3>Responsive Design</h3>
            </div>
            <p>Seamlessly adapts to every screen size, delivering an optimal experience across all devices.</p>
          </div>
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">&#9889;</div>
              <h3>Modern Stack</h3>
            </div>
            <p>Built with cutting-edge technologies for exceptional performance and maintainability.</p>
          </div>
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon">&#127912;</div>
              <h3>Easy Customization</h3>
            </div>
            <p>Thoughtfully structured code that makes personalization effortless and intuitive.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
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
          Transforming ideas into exceptional digital solutions.
        </p>
        <div class="services-grid">
          <div class="service-item">
            <div class="service-icon">&#128187;</div>
            <h3>Web Development</h3>
            <p>Custom web applications engineered for scale, performance, and seamless user experiences.</p>
            <button class="service-btn ripple-effect">Learn More</button>
          </div>
          <div class="service-item">
            <div class="service-icon">&#127912;</div>
            <h3>UI/UX Design</h3>
            <p>Intuitive interfaces that captivate users and drive meaningful engagement.</p>
            <button class="service-btn ripple-effect">Learn More</button>
          </div>
          <div class="service-item">
            <div class="service-icon">&#128161;</div>
            <h3>Consulting</h3>
            <p>Strategic guidance to navigate your digital transformation with confidence.</p>
            <button class="service-btn ripple-effect">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item" data-year="2020">
            <div class="timeline-content">
              <h3>Company Founded</h3>
              <p>Started with a vision to create exceptional digital experiences.</p>
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
          Ready to bring your vision to life? Let's start a conversation.
        </p>

        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">&#128231;</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:madlalahope@gmail.com">madlalahope@gmail.com</a></p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">&#128222;</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+27764567890">(27) 76 456-7890</a></p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">&#128205;</div>
              <div>
                <h4>Location</h4>
                <p>123 Main Street<br>Musgrave, Durban 4001</p>
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

            <button type="submit" class="btn btn-primary submit-btn ripple-effect">
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
              <p>Crafting digital experiences with elegance and precision.</p>
            </div>
          </div>

          <div class="footer-section">
            <h4>Navigation</h4>
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
              <p><a href="mailto:madlalahope@gmail.com">madlalahope@gmail.com</a></p>
              <p><a href="tel:+27764567890">(27) 76 456-7890</a></p>
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

// Optimized Particle System
class ParticleSystem {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.animationId = null;

    this.setupCanvas();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  setupCanvas() {
    const container = document.getElementById('particles');
    container.appendChild(this.canvas);
    this.canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:1;';
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 20000), 50);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1
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

    const len = this.particles.length;
    for (let i = 0; i < len; i++) {
      const p = this.particles[i];

      // Mouse interaction
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.vx += (dx / dist) * force * 0.005;
        p.vy += (dy / dist) * force * 0.005;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Boundary wrap
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(201, 169, 98, ${p.opacity})`;
      this.ctx.fill();
    }

    // Draw connections (optimized)
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(201, 169, 98, ${0.08 * (1 - dist / 100)})`;
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Ripple Effect
function createRipple(e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);

  ripple.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${e.clientX - rect.left - size / 2}px;
    top: ${e.clientY - rect.top - size / 2}px;
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-anim 0.6s ease-out;
    pointer-events: none;
  `;
  ripple.classList.add('ripple');

  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-item');

  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const numberElement = counter.querySelector('.stat-number');
    let current = 0;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      current = Math.ceil(easeOut * target);
      numberElement.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
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
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillItems.forEach(item => observer.observe(item));
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * 100);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .service-item, .contact-item, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// Smooth Scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').classList.remove('active');
      }
    });
  });
}

// Mobile Menu
function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Hero Buttons
function setupHeroButtons() {
  document.querySelector('#get-started-btn').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('#learn-more-btn').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
}

// Service Buttons
function setupServiceButtons() {
  document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceTitle = e.target.closest('.service-item').querySelector('h3').textContent;
      showNotification(`Learn more about ${serviceTitle} - Contact us for details!`);

      setTimeout(() => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    });
  });
}

// Contact Form
function setupContactForm() {
  const form = document.querySelector('#contact-form');
  const submitBtn = form.querySelector('.submit-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.classList.add('loading');

    await new Promise(resolve => setTimeout(resolve, 2000));

    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');

    form.reset();
    submitBtn.classList.remove('loading');
  });
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  requestAnimationFrame(() => {
    notification.classList.add('show');
  });

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 400);
  }, 4000);
}

// Scroll Indicator
function setupScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');

  scrollIndicator.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
  }, { passive: true });
}

// Ripple Effects Setup
function setupRippleEffects() {
  document.querySelectorAll('.ripple-effect').forEach(button => {
    button.addEventListener('click', createRipple);
  });
}

// Initialize
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

  setTimeout(() => {
    animateCounters();
    animateSkillBars();
  }, 500);
});
