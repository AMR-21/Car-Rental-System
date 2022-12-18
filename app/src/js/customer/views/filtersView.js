import { filterHandler, regionHandler, seatingHandler } from "../controller.js";

class FilterView {
  #container = document.querySelector(".app-container");
  #countrySelect;
  #regionFlag;
  #range = document.querySelector(".form-range");
  #incSeats = document.querySelector(".seat-plus");
  #decSeats = document.querySelector(".seat-minus");
  #seatingLabel = document.querySelector(".seating-label");
  #seating = 1;

  initUI(countries) {
    this.#renderFilterContainer();
    this.#assign();

    this.#renderCountries(countries);
    this.#countrySelect.addEventListener(
      "change",
      this.#selectHandler.bind(this)
    );
    this.#seatingHandler();
  }

  #assign() {
    this.#countrySelect = document.querySelector(".form-select");
    this.#regionFlag = document.querySelector(".region-flag");
    this.#range = document.querySelector(".form-range");
    this.#incSeats = document.querySelector(".seat-plus");
    this.#decSeats = document.querySelector(".seat-minus");
    this.#seatingLabel = document.querySelector(".seating-label");
  }

  renderFilter(data) {
    const name = data.name;
    const categories = data.categories;
    categories.sort((a, b) => a.name.localeCompare(b.name));
    const container = document.querySelector(`.${name}-grp`);
    const frag = document.createDocumentFragment();

    categories.forEach((category, i) => {
      const div = document.createElement("div");
      if (i > 0) div.classList = "mt-3";
      div.insertAdjacentHTML(
        "afterbegin",
        this.#generateFilterHTML(name, category)
      );
      frag.appendChild(div);
    });

    container.append(frag);
  }

  addFiltersHandler() {
    const container = document.querySelector(".filters-container");
    const btns = container.querySelectorAll(".form-check-input");
    btns.forEach((btn) => {
      btn.addEventListener("change", filterHandler.bind(btn));
    });
  }

  #renderFilterContainer() {
    const html = `
        <h2 class="sub-heading">Filter by</h2>
        <div class="filters">
          <div class="filter mt-3" data-filter="type">
            <button
              class="btn-filter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseType"
              aria-expanded="false"
              aria-controls="collapseType"
            >
              <span class="filter-text">Car Type</span>
              <i class="bi bi-chevron-down ms-2"></i>
            </button>
            <div class="collapse" id="collapseType">
              <div class="collapse-body type-grp mt-2"></div>
            </div>
          </div>

          <div class="filter mt-5" data-filter="region">
            <button
              class="btn-filter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseRegion"
              aria-expanded="false"
              aria-controls="collapseRegion"
            >
              <span class="filter-text">Region</span>
              <i class="bi bi-chevron-down ms-2"></i>
            </button>

            <div class="collapse" id="collapseRegion">
              <div class="collapse-body region-grp mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/White_flag_of_surrender.svg/640px-White_flag_of_surrender.svg.png"
                  class="region-flag mb-3"
                  alt="Empty flag"
                />
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                ></select>
              </div>
            </div>
          </div>

          <div class="filter mt-5" data-filter="transmission">
            <button
              class="btn-filter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTransmission"
              aria-expanded="false"
              aria-controls="collapseTransmission"
            >
              <span class="filter-text">Transmission</span>
              <i class="bi bi-chevron-down ms-2"></i>
            </button>
            <div class="collapse" id="collapseTransmission">
              <div class="collapse-body transmission-grp mt-2"></div>
            </div>
          </div>

          <div class="filter mt-5" data-filter="seating">
            <button
              class="btn-filter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePassengers"
              aria-expanded="false"
              aria-controls="collapsePassengers"
            >
              <span class="filter-text">Seating Capacity</span>
              <i class="bi bi-chevron-down ms-2"></i>
            </button>
            <div class="collapse" id="collapsePassengers">
              <div class="collapse-body mt-2">
                <div class="seating-container">
                  <button class="btn-seat seat-minus">
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    type="range"
                    class="form-range mx-4"
                    min="1"
                    max="14"
                    value="1"
                    id="seatings"
                  />
                  <button class="btn-seat seat-plus">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
                <label for="seatings" class="form-label seating-label"
                  >Any (2-14)</label
                >
              </div>
            </div>
          </div>

          <div class="filter mt-5" data-filter="brand">
            <button
              class="btn-filter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBrand"
              aria-expanded="false"
              aria-controls="collapseBrand"
            >
              <span class="filter-text">Brand</span>
              <i class="bi bi-chevron-down ms-2"></i>
            </button>

            <div class="collapse" id="collapseBrand">
              <div class="collapse-body brand-grp mt-2"></div>
            </div>
          </div>

          <div class="filter mt-5" data-filter="color">
            <button
              class="btn-filter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseColor"
              aria-expanded="false"
              aria-controls="collapseColor"
            >
              <span class="filter-text">Color</span>
              <i class="bi bi-chevron-down ms-2"></i>
            </button>

            <div class="collapse" id="collapseColor">
              <div class="collapse-body color-grp mt-2"></div>
            </div>
          </div>
        </div>
    `;

    this.#container
      .querySelector(".sidebar-container")
      .insertAdjacentHTML("afterbegin", html);

    this.#container
      .querySelector(".sidebar-container")
      .classList.add("filters-container");

    document
      .querySelectorAll(".btn-filter")
      .forEach((btn) =>
        btn.addEventListener("click", this.#filterHandler.bind(btn))
      );
  }

  #generateFilterHTML(type, category) {
    let name = category.name;
    name = name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    if (name === "Cvt") name = name.toUpperCase();
    if (name.length < 4 && type === "brand") name = name.toUpperCase();

    return `
    <input
      class="form-check-input me-2"
      type="checkbox"
      value="${category.name}"
      id="check${category.name}"
    />
    <label class="form-check-label" for="check${category.name}">
    ${name} (${category.count})
    </label>
  `;
  }

  #renderCountries(countries) {
    const frag = document.createDocumentFragment();
    countries.forEach((country) => {
      const opt = document.createElement("option");
      opt.value = country.cca2;
      opt.textContent = country.name;
      opt.dataset.cca3 = country.cca3;
      opt.dataset.name = country.name;
      frag.appendChild(opt);
    });

    this.#countrySelect.append(frag);
    const opt = document.createElement("option");
    opt.value = "-";
    opt.textContent = "-";
    this.#countrySelect.insertAdjacentElement("afterbegin", opt);
    this.#countrySelect.value = "-";
  }

  #filterHandler() {
    this.classList.toggle("open");
    const icon = this.querySelector(".bi");
    icon.classList.toggle("rotate");
  }

  #seatingHandler() {
    this.#range.addEventListener("change", () => {
      this.#seating = +this.#range.value;
      this.#seatingLabel.textContent =
        this.#seating > 1 ? this.#seating + " Persons" : "Any (2-14)";
      seatingHandler(this.#seating);
    });

    this.#incSeats.addEventListener("click", () => {
      if (this.#seating === 14) return;
      this.#seating++;
      this.#range.value = this.#seating;
      this.#seatingLabel.textContent = this.#seating + " Persons";
      seatingHandler(this.#seating);
    });

    this.#decSeats.addEventListener("click", () => {
      if (this.#seating === 1) return;
      this.#seating--;
      range.value = this.#seating;
      this.#seatingLabel.textContent =
        this.#seating > 1 ? this.#seating + " Persons" : "Any (2-14)";
      seatingHandler(this.#seating);
    });
  }

  #selectHandler() {
    if (this.#countrySelect.value == "-") {
      this.#regionFlag.alt = "White Flag";
      this.#regionFlag.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/White_flag_of_surrender.svg/640px-White_flag_of_surrender.svg.png";
      regionHandler("");
      return;
    }

    this.#regionFlag.src = `https://flagicons.lipis.dev/flags/4x3/${this.#countrySelect.value.toLowerCase()}.svg`;

    this.#regionFlag.alt =
      this.#countrySelect.querySelector(
        `[value = "${this.#countrySelect.value}"]`
      ).textContent + " Flag";

    regionHandler(this.#countrySelect.value);
  }

  reset() {
    this.#container
      .querySelectorAll(".form-check-input")
      .forEach((box) => (box.checked = false));

    this.#countrySelect.value = "-";
    this.#regionFlag.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/White_flag_of_surrender.svg/640px-White_flag_of_surrender.svg.png";

    this.#range.value = 1;
    this.#seating = 1;
    this.#seatingLabel.textContent = "Any (2-14)";
  }
}

export default new FilterView();