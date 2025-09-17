import React, { useState, useMemo } from "react";
import Header from "../../components/header/header.jsx";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLocationDot,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/** ===== HOTEL FEATURES (Know Us) SLIDES ===== */
const slides = [
  {
    id: 1,
    badge: "Infinity Pool",
    image:
      "https://images.unsplash.com/photo-1603085429201-64dadaec4061?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Heated rooftop infinity pool overlooking the skyline",
    location: "Level 9 • 6AM–10PM",
    blurb:
      "Swim laps or unwind on sun loungers with towel service and poolside refreshments.",
  },
  {
    id: 2,
    badge: "Skyline Gym",
    image:
      "https://images.unsplash.com/photo-1662386392805-573808794a21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "State-of-the-art fitness studio with panoramic views",
    location: "Level 3 • 24/7 Access",
    blurb:
      "Cardio, strength, and functional zones, plus complimentary instructor-led sessions.",
  },
  {
    id: 3,
    badge: "Lobby Bar",
    image:
      "https://images.unsplash.com/photo-1660486048108-3fff01be883c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Signature cocktails and small plates in a cozy setting",
    location: "Lobby • 4PM–12AM",
    blurb:
      "Craft beverages, live piano on weekends, and an expert mixology menu.",
  },
  {
    id: 4,
    badge: "Spa & Wellness",
    image:
      "https://images.unsplash.com/photo-1693578538512-fc66f318c833?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Holistic treatments for deep relaxation and recovery",
    location: "Level 2 • 10AM–8PM",
    blurb:
      "Massage, facials, sauna/steam suites, and private treatment rooms.",
  },
  {
    id: 5,
    badge: "Rooftop Lounge",
    image:
      "https://images.unsplash.com/photo-1639563978014-0313208c2f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sunset views with DJ sets and fire-pit seating",
    location: "Rooftop • 5PM–Late",
    blurb:
      "Hand-picked wines, sharable plates, and reserved cabana seating.",
  },
  {
    id: 6,
    badge: "Gourmet Restaurant",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    title: "Seasonal tasting menus by our award-winning chef",
    location: "Mezzanine • Lunch & Dinner",
    blurb:
      "Local produce, open kitchen counter, and curated wine pairings.",
  },
];

/** ===== FEATURED STAY CATEGORIES ===== */
const categories = [
  {
    id: "deluxe",
    label: "Deluxe",
    headline: "Relax in comfort. Style meets simplicity.",
    copy:
      "Our Deluxe rooms are designed for travelers who want both relaxation and convenience. Spacious, warm, and inviting — your home away from home.",
    cta: "Explore Deluxe",
    rooms: [
      {
        title: "City View Deluxe",
        blurb: "Spacious corner room with skyline views.",
        image:
          "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Deluxe King",
        blurb: "King-sized bed, curated minibar, and walk-in shower.",
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Garden Deluxe",
        blurb: "Private terrace with serene morning views.",
        image:
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "suite",
    label: "Suites",
    headline: "Space, luxury, and unforgettable experiences.",
    copy:
      "Our Suites offer refined luxury with generous space, premium service, and elevated interiors — perfect for both business and leisure stays.",
    cta: "View Suites",
    rooms: [
      {
        title: "Executive Suite",
        blurb: "Business-ready with private lounge access.",
        image:
          "https://images.unsplash.com/photo-1685592437742-3b56edb46b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Presidential Suite",
        blurb: "Unmatched elegance with city panoramas.",
        image:
          "https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Junior Suite",
        blurb: "Cozy yet spacious, perfect for extended stays.",
        image:
          "https://images.unsplash.com/photo-1628736878056-4d827f9cee1c?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "premium",
    label: "Premium",
    headline: "For travelers who want the very best.",
    copy:
      "Premium rooms are tailored for those who expect more: exclusive amenities, premium bedding, and elegant touches that make every stay unforgettable.",
    cta: "Book Premium",
    rooms: [
      {
        title: "Premium Loft",
        blurb: "Open, airy design with modern luxury.",
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Ocean View Premium",
        blurb: "Wake up to endless blue horizons.",
        image:
          "https://images.unsplash.com/photo-1598928334118-f86743750cd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Penthouse Premium",
        blurb: "The height of indulgence with private lounge.",
        image:
          "https://images.unsplash.com/photo-1702411200201-3061d0eea802?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

const Home = () => {
  /** ===== STATE: Hotel Features carousel (Know Us) ===== */
  const [curr, setCurr] = useState(0);
  const next = () => setCurr((i) => (i + 1) % slides.length);
  const prev = () => setCurr((i) => (i - 1 + slides.length) % slides.length);
  const main = slides[curr];
  const side = slides[(curr + 1) % slides.length];

  /** ===== STATE: Featured Stay categories/rooms ===== */
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCat),
    [activeCat]
  );
  const activeRoom = activeCategory.rooms[activeIndex];

  const prevRoom = () =>
    setActiveIndex((i) => (i === 0 ? activeCategory.rooms.length - 1 : i - 1));
  const nextRoom = () =>
    setActiveIndex((i) =>
      i === activeCategory.rooms.length - 1 ? 0 : i + 1
    );

  return (
    <div className="home">
      <Header />

      {/* === HERO === */}
      <section className="hero">
        <div className="hero-content">
          <h1>The Savoy Hotel on Little Collins Melbourne</h1>
          <p>
            The Savoy Hotel on Little Collins offers a timelessly elegant space
            to escape. Located in the heart of Melbourne, you won’t have to
            travel far to enjoy all this lively city has to offer.
          </p>
        </div>

        <div className="booking-card">
          <form className="booking-grid" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label>Location</label>
              <div className="control">
                <input type="text" placeholder="Lisbon, Portugal" />
                <span className="chev">▾</span>
              </div>
            </div>
            <div className="field">
              <label>Type</label>
              <div className="control">
                <select defaultValue="Minimalist">
                  <option>Minimalist</option>
                  <option>Luxury</option>
                  <option>Boutique</option>
                  <option>Business</option>
                </select>
                <span className="chev">▾</span>
              </div>
            </div>
            <div className="field">
              <label>Price</label>
              <div className="control">
                <select defaultValue="10000-12000">
                  <option value="0-5000">0 – 5,000</option>
                  <option value="5000-10000">5,000 – 10,000</option>
                  <option value="10000-12000">10,000 – 12,000</option>
                  <option value="12000+">12,000+</option>
                </select>
                <span className="chev">▾</span>
              </div>
            </div>
            <button className="submit">Search Hotel</button>
          </form>
        </div>
      </section>

      {/* === HOTEL FEATURES / KNOW US === */}
      <section className="knowus section-padding">
        <div className="knowus-header">
          <button className="pill ghost">
            Hotel Features <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
          <h2>Experience Luxury, Wellness, and Entertainment All in One Place</h2>
        </div>

        <div className="knowus-grid">
          {/* Left: empathy copy */}
          <div className="about-card">
            <button className="pill light">Exactly What You’ve Been Looking For</button>
            <h3>
              Sometimes we all need a pause — to recharge, to reconnect, or simply to breathe.
              <br />
              This is that pause.
              <br />
              More than a stay, it’s the escape you didn’t know you needed.
            </h3>
          </div>

          {/* Middle: LARGE card (current slide) */}
          <article
            className="img-card lg fade"
            key={`main-${main.id}`}
            style={{ backgroundImage: `url(${main.image})` }}
            aria-label={main.title}
          >
            <div className="badge-row">
              <span className="pill light">{main.badge}</span>
            </div>
            <div className="img-card-body">
              <p className="overlay-title">{main.title}</p>
              <div className="bottom-row">
                <span className="chip">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {main.location}
                </span>
                <button className="round" aria-label="Open slide">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>
          </article>

          {/* Right: SMALL card (next slide) + controls */}
          <div className="right-col">
            <article
              className="img-card sm fade"
              key={`side-${side.id}`}
              style={{ backgroundImage: `url(${side.image})` }}
              aria-label={side.title}
            >
              <div className="badge-row">
                <span className="pill light">{side.badge}</span>
              </div>
              <div className="img-card-body">
                <div className="bottom-row">
                  <span className="chip">
                    <FontAwesomeIcon icon={faLocationDot} />
                    {side.location}
                  </span>
                  <button className="round" aria-label="Open slide">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                </div>
              </div>
            </article>

            <p className="side-blurb">{side.blurb}</p>

            <div className="carousel-controls">
              <button className="circle ghost" onClick={prev} aria-label="Previous">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="circle dark" onClick={next} aria-label="Next">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURED STAY (Rooms by Category) === */}
      <section className="featured-stay section-padding">
        <div className="featured-stay-header">
          <button className="pill ghost">
            Featured Stays <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
          <h2>Find Your Perfect Room Experience</h2>
          <p>Each of our room categories offers a unique atmosphere and amenities tailored to different travel needs.</p>
        </div>

        {/* Category Pills */}
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCat === cat.id ? "active" : ""}`}
              onClick={() => { setActiveCat(cat.id); setActiveIndex(0); }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="featured-content">
          {/* Left Column: Category Description & Thumbnails */}
          <div className="category-column">
            {/* Category Description */}
            <div className="category-description">
              <h3>{activeCategory.headline}</h3>
              <p>{activeCategory.copy}</p>
              <button className="cta-button">
                {activeCategory.cta} <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>

            {/* Room Thumbnails */}
            <div className="room-thumbnails">
              {activeCategory.rooms.map((room, i) => (
                <div
                  key={i}
                  className={`thumbnail ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <img src={room.image} alt={room.title} />
                  <div className="thumbnail-overlay">
                    <span>{room.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Room Spotlight */}
          <div className="spotlight-column">
            <div className="spotlight-card">
              <div className="image-container">
                <img src={activeRoom.image} alt={activeRoom.title} />
                <div className="spotlight-controls">
                  <button className="circle ghost" onClick={prevRoom} aria-label="Previous room">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className="circle dark" onClick={nextRoom} aria-label="Next room">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
                <div className="progress-dots">
                  {activeCategory.rooms.map((_, i) => (
                    <span key={i} className={`dot ${i === activeIndex ? "on" : ""}`} />
                  ))}
                </div>
              </div>

              <div className="spotlight-info">
                <h4>{activeRoom.title}</h4>
                <p>{activeRoom.blurb}</p>
                <button className="details-button">
                  See Details <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
