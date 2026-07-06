import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const contact = {
  phoneDisplay: '+92 311 83 04 563',
  phoneHref: 'tel:+923118304563',
  email: 'infabrandsmarketing@gmail.com',
  facebook: 'https://www.facebook.com/share/1D4p2ntdtL/',
  instagram: 'https://www.instagram.com/infa_brands?igsh=bGVnMWMzcWs0cmg=',
  headOffice:
    'Office # 624, Hoor Center, North Napier Road, Karachi - Pakistan',
  salesOffice:
    'Office # 9, 2nd Floor, Zeenat Medicine Market, Fatimah Jinnah Road, Quetta - Pakistan',
};

const brandAssets = {
  logo: '/assets/logo/infa-brands-logo.png',
  banner: '/assets/brand/infa-calendar-2026-banner.jpg',
};

const safeProductDescription =
  'Product details will be updated with official client-approved information. For availability and inquiry, please contact Infa Brands.';

const products = [
  {
    id: 'product-01',
    name: 'Infa Aqua Pack',
    image: '/assets/products/crops/product-01.jpg',
    accent: 'aqua',
    description: safeProductDescription,
  },
  {
    id: 'product-02',
    name: 'Infa Blue Pack',
    image: '/assets/products/crops/product-02.jpg',
    accent: 'pink',
    description: safeProductDescription,
  },
  {
    id: 'product-03',
    name: 'Infa Rose Pack',
    image: '/assets/products/crops/product-03.jpg',
    accent: 'yellow',
    description: safeProductDescription,
  },
  {
    id: 'product-04',
    name: 'Infa Pink Pack',
    image: '/assets/products/crops/product-04.jpg',
    accent: 'blue',
    description: safeProductDescription,
  },
  {
    id: 'product-05',
    name: 'Infa Green Pack',
    image: '/assets/products/crops/product-05.jpg',
    accent: 'aqua',
    description: safeProductDescription,
  },
  {
    id: 'product-06',
    name: 'Infa Mint Pack',
    image: '/assets/products/crops/product-06.jpg',
    accent: 'pink',
    description: safeProductDescription,
  },
  {
    id: 'product-07',
    name: 'Infa Yellow Pack',
    image: '/assets/products/crops/product-07.jpg',
    accent: 'yellow',
    description: safeProductDescription,
  },
  {
    id: 'product-08',
    name: 'Infa Gold Pack',
    image: '/assets/products/crops/product-08.jpg',
    accent: 'blue',
    description: safeProductDescription,
  },
];

const blogPosts = [
  {
    title: 'Understanding Product Awareness',
    category: 'Product Awareness',
    excerpt:
      'Clear product information helps customers and partners make informed inquiry decisions with confidence.',
  },
  {
    title: 'Why Quality and Trust Matter',
    category: 'Quality & Care',
    excerpt:
      'A reliable catalogue experience starts with organized details, careful communication, and responsive support.',
  },
  {
    title: 'How to Inquire About Infa Brands Products',
    category: 'Inquiry Support',
    excerpt:
      'Customers, retailers, and distributors can contact the Infa Brands team directly for availability and product details.',
  },
  {
    title: 'Company Updates from Infa Brands',
    category: 'Company Updates',
    excerpt:
      'Infa Brands continues to improve how customers discover product information and connect with the team.',
  },
  {
    title: 'Product Information Made Simple',
    category: 'Product Information',
    excerpt:
      'A focused digital presence keeps essential details accessible without overwhelming customers.',
  },
  {
    title: 'Connecting Customers and Partners',
    category: 'Partner Support',
    excerpt:
      'Professional inquiry channels make it easier for partners and distributors to start the right conversation.',
  },
];

const routes = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

function getRoute(pathname) {
  if (pathname === '/about') return 'about';
  if (pathname === '/products') return 'products';
  if (pathname === '/blogs') return 'blogs';
  if (pathname === '/contact') return 'contact';
  return 'home';
}

function App() {
  const [route, setRoute] = useState(getRoute(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(getRoute(path));
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePop = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  return (
    <>
      <Header
        currentRoute={route}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
      />
      <main>
        {route === 'home' && (
          <HomePage
            navigate={navigate}
            products={products}
            onProductSelect={setSelectedProduct}
          />
        )}
        {route === 'about' && <AboutPage />}
        {route === 'products' && (
          <ProductsPage products={products} onProductSelect={setSelectedProduct} />
        )}
        {route === 'blogs' && <BlogsPage />}
        {route === 'contact' && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

function Header({ currentRoute, menuOpen, setMenuOpen, navigate }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="/"
          className="brand-mark"
          onClick={(event) => {
            event.preventDefault();
            navigate('/');
          }}
          aria-label="Infa Brands home"
        >
          <span className="brand-logo-wrap">
            <img className="brand-logo-img" src={brandAssets.logo} alt="Infa Brands logo" />
          </span>
          <span>
            <strong>Infa Brands</strong>
            <small>Corporate Catalogue</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main">
          {routes.map((item) => {
            const active =
              (currentRoute === 'home' && item.path === '/') ||
              currentRoute === item.path.replace('/', '');
            return (
              <a
                key={item.path}
                href={item.path}
                className={active ? 'active' : ''}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.path);
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/contact"
            className="btn btn-primary nav-cta"
            onClick={(event) => {
              event.preventDefault();
              navigate('/contact');
            }}
          >
            Send Inquiry
          </a>
        </nav>
      </div>
    </header>
  );
}

function HomePage({ navigate, products, onProductSelect }) {
  return (
    <>
      <section className="hero-section section-soft">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Infa Brands</p>
            <h1>Quality Products, Trusted Care</h1>
            <p className="hero-subtitle">
              Infa Brands is committed to presenting reliable, carefully selected
              products for families, partners, and customers across Pakistan.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate('/products')}
              >
                Explore Products
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>

          <ProductStack />
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <p className="eyebrow">About Infa Brands</p>
            <h2>Focused on clear product information and dependable inquiry support.</h2>
          </div>
          <p>
            Infa Brands is a growing product-focused company with a commitment
            to quality, care, and customer trust. The brand aims to make product
            information simple, accessible, and professional through a clean
            digital experience.
          </p>
        </div>
        <div className="container feature-grid">
          <FeatureCard title="Quality Focused" text="A careful, organized catalogue experience built around trust and clarity." />
          <FeatureCard title="Trusted Product Range" text="Product information is presented cleanly so customers can inquire with ease." />
          <FeatureCard title="Easy Inquiry Support" text="Direct contact channels help customers, partners, and distributors reach the team." />
        </div>
      </section>

      <ProductsPreview
        products={products}
        onProductSelect={onProductSelect}
        navigate={navigate}
      />

      <BrandHighlight />

      <OfficialChannels />

      <FaqSection />

      <BlogsPreview navigate={navigate} />

      <ContactCta navigate={navigate} />
    </>
  );
}

function BrandHighlight() {
  return (
    <section className="section brand-highlight-section">
      <div className="container brand-highlight">
        <div className="brand-highlight-copy">
          <p className="eyebrow">Latest Brand Highlight</p>
          <h2>Infa Brands Updates</h2>
          <p>
            Explore the latest brand visuals, catalogue updates, and product
            information shared through Infa Brands' official channels.
          </p>
        </div>
        <div className="brand-banner-card">
          <img
            src={brandAssets.banner}
            alt="Infa Brands Calendar 2026 brand artwork"
          />
        </div>
      </div>
    </section>
  );
}

function OfficialChannels() {
  return (
    <section className="section channels-section">
      <div className="container channels-card">
        <div>
          <p className="eyebrow">Official Channels</p>
          <h2>Follow Infa Brands</h2>
          <p>
            Use the official social links for product updates, catalogue
            information, and brand announcements.
          </p>
        </div>
        <div className="channel-actions">
          <a className="btn btn-primary" href={contact.instagram} target="_blank" rel="noreferrer">
            View Instagram
          </a>
          <a className="btn btn-secondary" href={contact.facebook} target="_blank" rel="noreferrer">
            View Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductStack() {
  const heroCrops = products.slice(0, 6);

  return (
    <div className="product-stack crop-showcase" aria-label="Infa Brands product pack visuals">
      <div className="stack-card stack-card-large crop-hero-card">
        <ProductImage
          src={products[0].image}
          alt={`${products[0].name} visual`}
        />
      </div>
      <div className="stack-card stack-card-small crop-hero-card">
        <ProductImage
          src={products[2].image}
          alt={`${products[2].name} visual`}
        />
      </div>
      <div className="hero-crop-strip" aria-hidden="true">
        {heroCrops.slice(1).map((product) => (
          <span className="hero-crop-thumb" key={product.id}>
            <img src={product.image} alt="" loading="eager" />
          </span>
        ))}
      </div>
      <div className="stack-badge">
        <span>Product Catalogue</span>
        <strong>Pakistan</strong>
      </div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <article className="feature-card">
      <span className="feature-dot" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ProductsPreview({ products, onProductSelect, navigate }) {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="section section-blue">
      <div className="container section-heading-row">
        <div>
          <p className="eyebrow">Our Products</p>
          <h2>Product catalogue preview</h2>
        </div>
        <button
          className="text-link"
          type="button"
          onClick={() => navigate('/products')}
        >
          View all products
        </button>
      </div>
      <div className="container product-grid featured-product-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductSelect={onProductSelect}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onProductSelect }) {
  return (
    <article
      className={`product-card accent-${product.accent}`}
      tabIndex="0"
      role="button"
      aria-label={`View details for ${product.name}`}
      onClick={() => onProductSelect(product)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onProductSelect(product);
        }
      }}
    >
      <div className="product-image-frame">
        <ProductImage src={product.image} alt={`${product.name} visual`} />
      </div>
      <div className="product-card-body">
        <span className="product-tag">Infa Brands</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button className="btn btn-small" type="button">
          View Details
        </button>
      </div>
    </article>
  );
}

function ProductImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="image-fallback" role="img" aria-label={alt}>
        <span>Infa Brands</span>
        <strong>Product visual pending</strong>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}

function FaqSection() {
  const faqs = [
    {
      question: 'What does Infa Brands offer?',
      answer:
        'Infa Brands presents a product-focused catalogue experience for customers, partners, and distributors seeking clear product information.',
    },
    {
      question: 'How can I inquire about products?',
      answer:
        'You can call, email, or submit the inquiry form with your product interest and contact details.',
    },
    {
      question: 'Where are Infa Brands offices located?',
      answer:
        'Infa Brands has a head office in Karachi and a sales office in Quetta, Pakistan.',
    },
    {
      question: 'How can distributors or partners contact Infa Brands?',
      answer:
        'Distributors and partners can contact the team through the official phone number, email address, or inquiry form.',
    },
  ];

  return (
    <section className="section">
      <div className="container faq-layout">
        <div>
          <p className="eyebrow">Basic Info</p>
          <h2>Frequently asked questions</h2>
          <p>
            Simple answers for customers and partners looking to connect with
            Infa Brands.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className={`faq-item ${open ? 'open' : ''}`}>
      <button type="button" onClick={() => setOpen((value) => !value)}>
        <span>{faq.question}</span>
        <span aria-hidden="true">{open ? '-' : '+'}</span>
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{faq.answer}</p>
      </div>
    </article>
  );
}

function BlogsPreview({ navigate }) {
  return (
    <section className="section section-warm">
      <div className="container section-heading-row">
        <div>
          <p className="eyebrow">Latest Updates</p>
          <h2>News and product information</h2>
        </div>
        <button className="text-link" type="button" onClick={() => navigate('/blogs')}>
          Read more
        </button>
      </div>
      <div className="container blog-grid preview-grid">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <span>{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <a href="/contact" onClick={(event) => event.preventDefault()}>
        Learn more
      </a>
    </article>
  );
}

function ContactCta({ navigate }) {
  return (
    <section className="section contact-band">
      <div className="container contact-band-inner">
        <div>
          <p className="eyebrow">Have a product inquiry?</p>
          <h2>Speak with the Infa Brands team.</h2>
          <p>
            Phone: <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <br />
            Email:{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
        <button className="btn btn-light" type="button" onClick={() => navigate('/contact')}>
          Contact Infa Brands
        </button>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Infa Brands"
        title="A reliable product-focused company with a growing presence in Pakistan."
        text="Infa Brands is built on quality, reliability, and customer trust, with offices in Karachi and Quetta."
      />
      <section className="section">
        <div className="container about-grid">
          <article>
            <p className="eyebrow">Who We Are</p>
            <h2>Product information with clarity and care.</h2>
            <p>
              Infa Brands is a product-focused company built on quality,
              reliability, and customer trust. With its presence in Karachi and
              Quetta, the brand aims to provide a simple, professional, and
              accessible product information experience for customers, partners,
              and distributors.
            </p>
          </article>
          <article>
            <p className="eyebrow">Our Commitment</p>
            <h2>Professional support for every inquiry.</h2>
            <p>
              The company is committed to presenting product details in a clean,
              reliable, and customer-friendly way. Official product information
              can be updated as client-approved details become available.
            </p>
          </article>
          <article className="presence-card">
            <p className="eyebrow">Our Presence in Pakistan</p>
            <h2>Karachi and Quetta offices</h2>
            <div className="office-list">
              <div className="office-row">
                <strong>Head Office</strong>
                <p>{contact.headOffice}</p>
              </div>
              <div className="office-row">
                <strong>Sales Office</strong>
                <p>{contact.salesOffice}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function ProductsPage({ products, onProductSelect }) {
  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title="Our Products"
        text="Browse the current Infa Brands catalogue preview and send an inquiry for availability or official product details."
      />
      <section className="section section-blue">
        <div className="container product-grid page-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductSelect={onProductSelect}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Latest Updates"
        text="Professional product information, company news, and customer inquiry guidance from Infa Brands."
      />
      <section className="section">
        <div className="container blog-grid blog-page-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Infa Brands"
        text="Call, email, or send a product inquiry to connect with the Infa Brands team."
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <p className="eyebrow">Official Details</p>
            <h2>Get in touch</h2>
            <ContactList />
          </div>

          <form
            className="inquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="form-heading">
              <p className="eyebrow">Inquiry Form</p>
              <h2>Send a product inquiry</h2>
            </div>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="+92..." required />
            </label>
            <label>
              Product Interest
              <select name="productInterest" defaultValue="">
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="full-span">
              Message
              <textarea
                name="message"
                placeholder="Tell us what you would like to know."
                rows="5"
              />
            </label>
            <button className="btn btn-primary full-span" type="submit">
              Submit Inquiry
            </button>
            {submitted && (
              <p className="form-note full-span">
                Thank you. This static demo captured the inquiry interaction.
                A WordPress form handler can be connected in production.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function ContactList() {
  return (
    <div className="contact-list">
      <div>
        <span>Phone</span>
        <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
      </div>
      <div>
        <span>Facebook</span>
        <a href={contact.facebook} target="_blank" rel="noreferrer">
          facebook.com/share/1D4p2ntdtL
        </a>
      </div>
      <div>
        <span>Instagram</span>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          instagram.com/infa_brands
        </a>
      </div>
      <div>
        <span>Head Office</span>
        <p>{contact.headOffice}</p>
      </div>
      <div>
        <span>Sales Office</span>
        <p>{contact.salesOffice}</p>
      </div>
    </div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero section-soft">
      <div className="container page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function ProductModal({ product, onClose }) {
  const modalTitleId = useMemo(() => `${product.id}-title`, [product.id]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          Close
        </button>
        <div className="modal-image">
          <ProductImage src={product.image} alt={`${product.name} large visual`} />
        </div>
        <div className="modal-copy">
          <p className="eyebrow">Product Detail</p>
          <h2 id={modalTitleId}>{product.name}</h2>
          <p>{product.description}</p>
          <div className="modal-actions">
            <a className="btn btn-primary" href="/contact">
              Send Inquiry
            </a>
            <a className="btn btn-secondary" href={contact.phoneHref}>
              Call {contact.phoneDisplay}
            </a>
            <a className="text-link" href={`mailto:${contact.email}`}>
              Email Infa Brands
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a
            className="brand-mark"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigate('/');
            }}
          >
            <span className="brand-logo-wrap">
              <img className="brand-logo-img" src={brandAssets.logo} alt="Infa Brands logo" />
            </span>
            <span>
              <strong>Infa Brands</strong>
              <small>Corporate Catalogue</small>
            </span>
          </a>
          <p>
            Infa Brands is committed to presenting quality-focused products with
            a clean, reliable, and customer-friendly experience.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {routes.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>{contact.headOffice}</li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <ul>
            <li>
              <a href={contact.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Copyright {new Date().getFullYear()} Infa Brands. All rights reserved.</p>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
