const CARS = [
  {
    id: 1,
    name: "Toyota Camry",
    year: 2024,
    type: "sedan",
    price: 89,
    transmission: "automatic",
    fuel: "hybrid",
    seats: 5,
    engine: "2.5L Hybrid",
    featured: true,
    description:
      "The Camry Hybrid combines effortless long-distance comfort with exceptional fuel efficiency. A refined interior, smooth ride, and Toyota's renowned reliability make this one of our most popular daily drivers.",
    features: [
      "Adaptive cruise control",
      "Lane keep assist",
      "Apple CarPlay",
      "Android Auto",
      "Wireless charging",
      "Heated front seats",
      "Blind spot monitor",
      "Rear cross-traffic alert",
    ],
  },
  {
    id: 2,
    name: "BMW 5 Series",
    year: 2024,
    type: "sedan",
    price: 195,
    transmission: "automatic",
    fuel: "petrol",
    seats: 5,
    engine: "3.0L",
    featured: true,
    description:
      "The 5 Series is the benchmark for executive saloons. Precise steering, a beautifully appointed cabin, and the latest BMW OS make every journey - business or leisure - feel effortlessly purposeful.",
    features: [
      "BMW Live Cockpit Pro",
      "Driving Assistant Pro",
      "Harman Kardon audio",
      "Panoramic roof",
      "Ambient lighting",
      "Massage seats",
      "Head-up display",
      "Parking assistant",
    ],
  },
  {
    id: 3,
    name: "Range Rover Sport",
    year: 2024,
    type: "suv",
    price: 280,
    transmission: "automatic",
    fuel: "diesel",
    seats: 5,
    engine: "3.0L D",
    featured: true,
    description:
      "Authority and composure in equal measure. The Range Rover Sport's air suspension glides over any surface while the cabin remains a study in restrained luxury. The choice for those who refuse to compromise.",
    features: [
      "Terrain Response 2",
      "Air suspension",
      "Meridian audio",
      "SurroundCamera",
      "Head-up display",
      "Configurable dynamics",
      "Wireless charging",
      "22-inch alloys",
    ],
  },
  {
    id: 4,
    name: "Porsche 911 Carrera",
    year: 2024,
    type: "sports",
    price: 420,
    transmission: "automatic",
    fuel: "petrol",
    seats: 4,
    engine: "3.0L Turbo",
    featured: true,
    description:
      "Sixty years of refinement distilled into one machine. The 911 Carrera delivers flat-six precision, otherworldly balance, and a driving experience that requires nothing of you except presence. You will understand it on the first corner.",
    features: [
      "PASM sport suspension",
      "Sport Chrono",
      "Bose Surround Sound",
      "Sport exhaust",
      "PDK gearbox",
      "Lane change assist",
      "Night vision assist",
      "Porsche Track Precision",
    ],
  },
  {
    id: 5,
    name: "Mercedes-Benz S-Class",
    year: 2024,
    type: "luxury",
    price: 480,
    transmission: "automatic",
    fuel: "petrol",
    seats: 5,
    engine: "3.0L",
    featured: false,
    description:
      "The S-Class defines what a luxury saloon should be. E-Active Body Control virtually eliminates road disturbance, the Burmester 4D audio fills every cubic inch with sound, and the cabin sets standards no other car has matched.",
    features: [
      "E-Active Body Control",
      "Burmester 4D audio",
      "MBUX Hyperscreen",
      "Rear-axle steering",
      "Augmented reality nav",
      "Massage seats",
      "Fragrance system",
      "Night drive assist",
    ],
  },
  {
    id: 6,
    name: "Tesla Model 3",
    year: 2024,
    type: "sedan",
    price: 120,
    transmission: "automatic",
    fuel: "electric",
    seats: 5,
    engine: "Dual Motor",
    featured: false,
    description:
      "The Model 3 Long Range redefines the daily drive. Over-the-air updates, Autopilot, and 390 miles of range mean fewer stops and more focus on the destination. The minimalist interior does what good design always does: gets out of your way.",
    features: [
      "Autopilot",
      "Full Self-Driving capable",
      '15" touchscreen',
      "Premium audio",
      "Over-the-air updates",
      "HEPA filtration",
      "Glass roof",
      "App remote control",
    ],
  },
  {
    id: 7,
    name: "Audi Q7",
    year: 2023,
    type: "suv",
    price: 210,
    transmission: "automatic",
    fuel: "diesel",
    seats: 7,
    engine: "3.0L TDI",
    featured: false,
    description:
      "Seven seats. Space that doesn't compromise elegance. The Q7's air suspension and quattro all-wheel drive handle everything from motorway miles to mountain passes with identical confidence.",
    features: [
      "Adaptive air suspension",
      "Quattro AWD",
      "MMI touch response",
      "B&O 3D audio",
      "Night vision",
      "Head-up display",
      "Third-row seating",
      "Matrix LED headlights",
    ],
  },
  {
    id: 8,
    name: "Ferrari Roma",
    year: 2023,
    type: "sports",
    price: 890,
    transmission: "automatic",
    fuel: "petrol",
    seats: 4,
    engine: "3.9L Turbo",
    featured: false,
    description:
      "The Roma channels la dolce vita into machinery. A V8 soundtrack that rises and falls like a conductor's hand, bodywork that every Italian artisan would recognise as their own. This is the car you rent when the drive is the destination.",
    features: [
      "V8 Turbo 620hp",
      "Ferrari Dynamic Enhancer",
      "Prancing Horse logo detail",
      "JBL Professional audio",
      "Front lift system",
      "Manettino dial",
      "Curved digital cockpit",
      "Rosso Corsa upholstery",
    ],
  },
  {
    id: 9,
    name: "Volvo XC90",
    year: 2024,
    type: "suv",
    price: 175,
    transmission: "automatic",
    fuel: "hybrid",
    seats: 7,
    engine: "2.0L PHEV",
    featured: false,
    description:
      "The XC90 Recharge distils Scandinavian restraint into every surface. Seven seats, an electrified drivetrain, and Bowers & Wilkins audio make it the choice for families who won't settle for ordinary.",
    features: [
      "Plug-in hybrid",
      "Bowers & Wilkins audio",
      "Pilot Assist",
      "Air Quality System",
      "Panoramic roof",
      "Nappa leather",
      "Google infotainment",
      "City Safety",
    ],
  },
  {
    id: 10,
    name: "Bentley Continental GT",
    year: 2024,
    type: "luxury",
    price: 750,
    transmission: "automatic",
    fuel: "petrol",
    seats: 4,
    engine: "6.0L W12",
    featured: false,
    description:
      "The Continental GT is a grand tourer in the truest sense: capable of extraordinary velocity yet composed enough to cover a thousand miles without fatigue. Handcrafted in Crewe. Nothing else need be said.",
    features: [
      "6.0L W12 626hp",
      "Rotating dashboard",
      "Naim for Bentley audio",
      "3D diamond quilting",
      "Adaptive cruise",
      "Night vision",
      "All-wheel drive",
      "Handcrafted interior",
    ],
  },
  {
    id: 11,
    name: "Honda Civic",
    year: 2023,
    type: "sedan",
    price: 65,
    transmission: "manual",
    fuel: "petrol",
    seats: 5,
    engine: "1.5L",
    featured: false,
    description:
      "Understated, dependable, precise. The Civic's 1.5T punches above its displacement, the steering is honest, and the interior punishes no one with unnecessary complexity. The correct choice when the car should be invisible.",
    features: [
      "Honda Sensing",
      "Apple CarPlay",
      "Android Auto",
      "Lane keeping assist",
      "Collision mitigation",
      "Adaptive cruise",
      "LED headlights",
      '10.2" touchscreen',
    ],
  },
  {
    id: 12,
    name: "Lamborghini Urus",
    year: 2023,
    type: "suv",
    price: 650,
    transmission: "automatic",
    fuel: "petrol",
    seats: 5,
    engine: "4.0L Turbo",
    featured: false,
    description:
      "An SUV that defies the category entirely. The Urus does 0–100 in 3.6 seconds, corners with supercar conviction, and still fits the children in back. Outrageous in every sense. That is entirely the point.",
    features: [
      "V8 650hp",
      "Torque Vectoring",
      "Active Roll Stabilisation",
      "Lamborghini Dinamica Veicolo",
      "Carbon ceramic brakes",
      "Panoramic roof",
      "Alcantara interior",
      "Night vision",
    ],
  },
];

let activeFilters = {
  types: [],
  priceMax: 1000,
  years: [],
  transmissions: [],
  fuels: [],
};

let activeSortOrder = "featured";
let filteredCars = [...CARS];

function createCarCard(car, linkTarget) {
  const card = document.createElement("article");
  card.className = "car-card";
  card.setAttribute("data-id", car.id);

  const typeLabel = car.type.charAt(0).toUpperCase() + car.type.slice(1);
  const fuelLabel = car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1);

  card.innerHTML = `
    <div class="car-image">
      <div class="car-silhouette car-silhouette--${car.type}"></div>
      <span class="car-image-badge">${typeLabel}</span>
    </div>
    <div class="car-body">
      <div class="car-meta">
        <span class="car-year">${car.year}</span>
        <span class="car-type">${typeLabel}</span>
      </div>
      <h3 class="car-name">${car.name}</h3>
      <div class="car-specs">
        <span class="car-spec">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v6l3 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>
          </svg>
          ${car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1)}
        </span>
        <span class="car-spec">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 12V5l2.5-3h5L13 5v7H3z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M3 7h10" stroke="currentColor" stroke-width="1.2"/>
          </svg>
          ${fuelLabel}
        </span>
        <span class="car-spec">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>
            <path d="M5 9.5l1.5-5 1 3 1-2 1 2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          ${car.seats} seats
        </span>
      </div>
      <div class="car-footer">
        <div class="car-price">
          <span class="price-value">$${car.price}</span>
          <span class="price-unit">per day</span>
        </div>
        <a href="${linkTarget || `car-detail.html?id=${car.id}`}" class="car-btn">View details</a>
      </div>
    </div>
  `;

  return card;
}

function renderFeaturedGrid() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  const featured = CARS.filter((c) => c.featured).slice(0, 4);
  grid.innerHTML = "";
  featured.forEach((car) => grid.appendChild(createCarCard(car)));
}

function applyFilters() {
  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get("type");

  filteredCars = CARS.filter((car) => {
    if (
      activeFilters.types.length > 0 &&
      !activeFilters.types.includes(car.type)
    ) {
      return false;
    }
    if (car.price > activeFilters.priceMax) {
      return false;
    }
    if (
      activeFilters.years.length > 0 &&
      !activeFilters.years.includes(String(car.year))
    ) {
      return false;
    }
    if (
      activeFilters.transmissions.length > 0 &&
      !activeFilters.transmissions.includes(car.transmission)
    ) {
      return false;
    }
    if (
      activeFilters.fuels.length > 0 &&
      !activeFilters.fuels.includes(car.fuel)
    ) {
      return false;
    }
    return true;
  });

  sortCars();
  renderFleetGrid();
}

function sortCars() {
  switch (activeSortOrder) {
    case "price-asc":
      filteredCars.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredCars.sort((a, b) => b.price - a.price);
      break;
    case "year-desc":
      filteredCars.sort((a, b) => b.year - a.year);
      break;
    case "name-asc":
      filteredCars.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filteredCars.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

function renderFleetGrid() {
  const grid = document.getElementById("fleet-grid");
  const emptyState = document.getElementById("fleet-empty");
  const countEl = document.getElementById("results-count");

  if (!grid) return;

  grid.innerHTML = "";

  if (filteredCars.length === 0) {
    grid.hidden = true;
    if (emptyState) emptyState.hidden = false;
  } else {
    grid.hidden = false;
    if (emptyState) emptyState.hidden = true;
    filteredCars.forEach((car) => grid.appendChild(createCarCard(car)));
  }

  if (countEl) countEl.textContent = filteredCars.length;
}

function readFiltersFromDOM() {
  const typeChecks = document.querySelectorAll('input[name="type"]:checked');
  const yearChecks = document.querySelectorAll('input[name="year"]:checked');
  const transChecks = document.querySelectorAll(
    'input[name="transmission"]:checked',
  );
  const fuelChecks = document.querySelectorAll('input[name="fuel"]:checked');
  const priceMax = document.getElementById("price-max");

  activeFilters.types = Array.from(typeChecks).map((el) => el.value);
  activeFilters.years = Array.from(yearChecks).map((el) => el.value);
  activeFilters.transmissions = Array.from(transChecks).map((el) => el.value);
  activeFilters.fuels = Array.from(fuelChecks).map((el) => el.value);
  activeFilters.priceMax = priceMax ? parseInt(priceMax.value, 10) : 1000;
}

function resetFilters() {
  document
    .querySelectorAll('.fleet-sidebar input[type="checkbox"]')
    .forEach((cb) => {
      cb.checked = false;
    });

  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  const slider = document.getElementById("price-slider");

  if (priceMin) priceMin.value = "0";
  if (priceMax) priceMax.value = "1000";
  if (slider) slider.value = "1000";

  activeFilters = {
    types: [],
    priceMax: 1000,
    years: [],
    transmissions: [],
    fuels: [],
  };
}

function initFleetPage() {
  const grid = document.getElementById("fleet-grid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get("type");

  if (typeParam) {
    const matchingChip = document.querySelector(
      `input[name="type"][value="${typeParam}"]`,
    );
    if (matchingChip) {
      matchingChip.checked = true;
      activeFilters.types = [typeParam];
    }
  }

  filteredCars = [...CARS];
  applyFilters();

  const applyBtn = document.getElementById("apply-filters");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      readFiltersFromDOM();
      applyFilters();
    });
  }

  const resetBtns = document.querySelectorAll("#sidebar-reset, #empty-reset");
  resetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      resetFilters();
      applyFilters();
    });
  });

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSortOrder = e.target.value;
      sortCars();
      renderFleetGrid();
    });
  }

  const priceSlider = document.getElementById("price-slider");
  const priceMax = document.getElementById("price-max");

  if (priceSlider && priceMax) {
    priceSlider.addEventListener("input", (e) => {
      priceMax.value = e.target.value;
    });

    priceMax.addEventListener("input", (e) => {
      const val = Math.min(
        Math.max(parseInt(e.target.value, 10) || 0, 0),
        1000,
      );
      priceSlider.value = val;
    });
  }

  const mobileToggle = document.getElementById("mobile-filter-toggle");
  const sidebar = document.getElementById("fleet-sidebar");

  if (mobileToggle && sidebar) {
    let overlay = document.querySelector(".sidebar-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "sidebar-overlay";
      document.body.appendChild(overlay);
    }

    mobileToggle.addEventListener("click", () => {
      sidebar.classList.add("open");
      overlay.classList.add("visible");
      document.body.style.overflow = "hidden";
    });

    function closeSidebar() {
      sidebar.classList.remove("open");
      overlay.classList.remove("visible");
      document.body.style.overflow = "";
    }

    overlay.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("open")) {
        closeSidebar();
      }
    });

    if (applyBtn) {
      applyBtn.addEventListener("click", closeSidebar);
    }
  }
}

function initDetailPage() {
  const detailLayout = document.getElementById("detail-layout");
  if (!detailLayout) return;

  const params = new URLSearchParams(window.location.search);
  const carId = parseInt(params.get("id"), 10);
  const car = CARS.find((c) => c.id === carId) || CARS[0];

  const breadcrumb = document.getElementById("breadcrumb-current");
  if (breadcrumb) breadcrumb.textContent = car.name;

  document.title = `${car.name} - Aurum Drive`;

  const nameEl = document.getElementById("detail-name");
  if (nameEl) nameEl.textContent = car.name;

  const yearEl = document.getElementById("detail-year");
  if (yearEl) yearEl.textContent = car.year;

  const typeEl = document.getElementById("detail-type");
  if (typeEl)
    typeEl.textContent = car.type.charAt(0).toUpperCase() + car.type.slice(1);

  const transEl = document.getElementById("spec-transmission");
  if (transEl)
    transEl.textContent =
      car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1);

  const fuelEl = document.getElementById("spec-fuel");
  if (fuelEl)
    fuelEl.textContent = car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1);

  const seatsEl = document.getElementById("spec-seats");
  if (seatsEl) seatsEl.textContent = car.seats;

  const engineEl = document.getElementById("spec-engine");
  if (engineEl) engineEl.textContent = car.engine;

  const priceEl = document.getElementById("booking-price");
  if (priceEl) priceEl.textContent = `$${car.price}`;

  const descEl = document.getElementById("detail-description");
  if (descEl) descEl.textContent = car.description;

  const featuresList = document.getElementById("features-list");
  if (featuresList) {
    featuresList.innerHTML = "";
    car.features.forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      featuresList.appendChild(li);
    });
  }

  const silhouette = document.getElementById("detail-silhouette");
  if (silhouette) {
    silhouette.className = `placeholder-silhouette car-silhouette car-silhouette--${car.type}`;
  }

  window._currentCar = car;
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedGrid();
  initFleetPage();
  initDetailPage();
});
