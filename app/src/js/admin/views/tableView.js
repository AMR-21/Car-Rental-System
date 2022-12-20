class TableView {
  #table = document.querySelector(".query-result");
  #viewTitle = document.querySelector(".view-title");
  #infoContainer = document.querySelector(".car-info");
  #footerContainer = document.querySelector(".view-footer");
  #carouselContainer = document.querySelector(".carousel-inner");
  #activeCar;

  render(data, head, active = "cars") {
    const frag = document.createDocumentFragment();
    const tr = document.createElement("tr");
    tr.classList = "table-row table-head";
    tr.innerHTML = head;

    frag.appendChild(tr);

    if (active === "cars")
      if (data)
        data.forEach((car) => {
          const div = document.createElement("tr");
          div.insertAdjacentHTML("afterbegin", this.#generateCarHTML(car));
          frag.appendChild(div);
        });

    if (active === "customers")
      if (data)
        data.forEach((customer) => {
          const div = document.createElement("tr");
          div.insertAdjacentHTML(
            "afterbegin",
            this.#generateCustomerHTML(customer)
          );
          frag.appendChild(div);
        });

    if (active === "reservations")
      if (data)
        data.forEach((car) => {
          const div = document.createElement("tr");
          div.insertAdjacentHTML(
            "afterbegin",
            this.#generateReservationsHTML(car)
          );
          frag.appendChild(div);
        });

    this.#table.innerHTML = "";
    this.#table.appendChild(frag);
  }

  renderCarView(car) {
    let brand = car.brand;
    brand = brand
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    if (brand.length < 4) brand = brand.toUpperCase();
    this.#viewTitle.textContent = brand + " " + car.model.toUpperCase();
    this.#carouselContainer.innerHTML = this.#generateCarouselHTML(car);
    this.#infoContainer.innerHTML = this.#generateInfoHTML(car, brand);
    if (car.status === "rented" || car.status === "reserved") {
      if (this.#infoContainer.classList.contains("gap"))
        this.#infoContainer.classList.remove("gap");
    } else this.#infoContainer.classList.add("gap");
    //prettier-ignore
    this.#footerContainer.innerHTML = this.#generateFooterHTML(car);
  }

  #generateCustomerHTML(customer) {
    //prettier-ignore
    return `
        <tr class="table-row"">
            <td class="table-field">${customer.id}</td>
            <td class="table-field">${customer.fname[0].toUpperCase() + customer.fname.slice(1).toLowerCase()}</td>
            <td class="table-field">${customer.lname[0].toUpperCase() + customer.lname.slice(1).toLowerCase()}</td>
            <td class="table-field">${customer.email.toLowerCase()}</td>
            <td class="table-field">${customer.region[0].toUpperCase() + customer.region.slice(1).toLowerCase()}</td>
            <td class="table-field">${customer.phone_no}</td>
            <td class="table-field">${customer.license}</td>
            <td class="table-field">${customer.ncars}</td>
            <td class="table-field">${customer.debt}</td>
            <td class="table-field">${customer.transactions}</td>
            <td class="table-field">
              <button
                class="btn btn-primary btn-delete mx-auto"
                data-customer-id="${customer.id}"
              >
                revoke
              </button>
            </td>
          </tr>`;
  }

  #generateReservationsHTML(car) {
    let brand = car.brand;
    brand = brand
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    if (brand.length < 4) brand = brand.toUpperCase();

    //prettier-ignore
    return `
        <tr class="table-row"">
            <td class="table-field">${car.resId}</td>
            <td class="table-field">${car.carId}</td>
            <td class="table-field">${car.custId}</td>
            <td class="table-field">${car.custName}</td>
            <td class="table-field">${brand}</td>
            <td class="table-field">${car.model.toUpperCase()}</td>
            <td class="table-field">${car.plateNo}</td>
            <td class="table-field">${car.region}</td>
            <td class="table-field">${car.pickup.split('T')[0]}</td>
            <td class="table-field">${car.drop.split('T')[0]}</td>
            <td class="table-field">${car.date.split('T')[0]}</td>
            <td class="table-field">
              <button
                class="btn btn-primary btn-view mx-auto"
                data-car-id="${car.carId}"
                data-bs-toggle="modal"
                data-bs-target="#car-info"
              >
                view
              </button>
            </td>
          </tr>
  `;
  }

  #generateCarHTML(car) {
    let brand = car.brand;
    brand = brand
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    if (brand.length < 4) brand = brand.toUpperCase();

    //prettier-ignore
    return `
        <tr class="table-row"">
            <td class="table-field">${car.carId}</td>
            <td class="table-field">${brand}</td>
            <td class="table-field">${car.model.toUpperCase()}</td>
            <td class="table-field">${car.plateNo.toUpperCase() + car.plateNo.slice(1).toLowerCase()}</td>
            <td class="table-field">${car.type[0].toUpperCase() + car.type.slice(1).toLowerCase()}</td>
            <td class="table-field">${car.year}</td>
            <td class="table-field">${car.seating}</td>
            <td class="table-field">${car.transmission}</td>
            <td class="table-field">${car.rate}</td>
            <td class="table-field">${car.region}</td>
            <td class="table-field">${car.power}</td>
            <td class="table-field">${car.color}</td>
            <td class="table-field">${car.status}</td>
            <td class="table-field">
              <button
                class="btn btn-primary btn-view mx-auto"
                data-car-id="${car.carId}"
                data-bs-toggle="modal"
                data-bs-target="#car-info"
              >
                view
              </button>
            </td>
          </tr>
  `;
  }

  #generateInfoHTML(car, brand) {
    //prettier-ignore
    return `
    <div class="field">
                <div class="info-icon">
                  <ion-icon name="construct"></ion-icon>
                </div>
                <div class="info-text">${brand}</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="speedometer"></ion-icon>
                </div>
                <div class="info-text">${car.model.toUpperCase()}</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="calendar-number"></ion-icon>
                </div>
                <div class="info-text">${car.year}</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="settings"></ion-icon>
                </div>
                <div class="info-text">${
                  car.transmission[0].toUpperCase() +
                  car.transmission.slice(1).toLowerCase()
                }</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="info-text">${
                  car.type[0].toUpperCase() + car.type.slice(1).toLowerCase()
                }</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="flash"></ion-icon>
                </div>
                <div class="info-text">${
                  car.power[0].toUpperCase() + car.power.slice(1).toLowerCase()
                }</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="person"></ion-icon>
                </div>
                <div class="info-text">${car.seating}</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="color-palette"></ion-icon>
                </div>
                <div class="info-text">${
                  car.color[0].toUpperCase() + car.color.slice(1).toLowerCase()
                }</div>
              </div>

              <div class="field">
                <div class="info-icon">
                  <ion-icon name="logo-usd"></ion-icon>
                </div>
                <div class="info-text">${
                  car.rate
                }<span class="car-rate">/d</span></div>
              </div>
             
               <div class="field 
              ">
                <div class="info-icon">
                  <ion-icon name="car-sport"></ion-icon>
                </div>
                <div class="info-text">${car.plateNo}</div>
              </div>

              <div class="field 
              ">
                <div class="info-icon">
                  <ion-icon name="location-sharp"></ion-icon>
                </div>
                <div class="info-text">${
                  car.region.length < 4
                    ? car.region.toUpperCase()
                    : car.region[0].toUpperCase() +
                      car.region.slice(1).toLowerCase()
                }</div>
              </div>


               ${
                 car.status === "reserved" || car.status === "rented"
                   ? `
                <div class="field">
                  <div class="info-icon">
                    <ion-icon name="calendar-number"></ion-icon>
                  </div>
                  <div class="info-text"><span class="text-sub">reserve date</span>${
                    car.date.split("T")[0]
                  }</div>
                </div>

                <div class="field info-date">
                  <div class="info-icon me-3">
                    <ion-icon name="calendar"></ion-icon>
                  </div>
                  <div class="info-text me-2"><span class="text-sub">pick-up date</span>${car.pickup.split("T")[0]}</div>
                  <div class="info-text"><span class="text-sub">drop-off date</span>${car.drop.split("T")[0]}</div>
                </div>

                <div class="field info-order">
                  <div class="info-icon me-3">
                    <ion-icon name="cube"></ion-icon>
                  </div>
                  <div class="info-text me-2"><span class="text-sub">reservation number</span>${car.resId}</div>
                </div>
              `
                   : ""
               }

              ${car.status === "reserved" || car.status === "rented" ? `` : ""}
    `;
  }

  #generateFooterHTML(car) {
    let type;

    if (car.status === "reserved") type = "revoke";

    if (car.status === "rented") type = "return";

    if (car.status === "active") type = "suspend";

    if (car.status === "oos") type = "activate";

    if (!type) return "";

    return `<button type="button" data-bs-dismiss="modal" class="btn btn-primary btn-${type}">${type}</button>`;
  }

  #generateCarouselHTML(car) {
    return `
    <div class="carousel-item active">
                  <img
                    src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}&angle=09"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}&angle=22"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}&angle=23"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}&angle=13"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}&angle=29"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>`;
  }
}

export default new TableView();