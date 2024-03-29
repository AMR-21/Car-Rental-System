"use strict";

import { favouriteHandler } from "../controller.js";

class CarsView {
  #cars = document.querySelector(".cars");
  #viewTitle = document.querySelector(".view-title");
  #infoContainer = document.querySelector(".car-info");
  #footerContainer = document.querySelector(".view-footer");
  #carouselContainer = document.querySelector(".carousel-inner");
  #error = document.querySelector(".error-message");
  #message = this.#error.querySelector(".message");
  payContainer = document.querySelector(".payment-container");

  modal = false;
  openCard;

  #renderError = function () {
    this.#error.classList.remove("hide");
    this.#message.textContent = "no cars found";
  };

  #hideError() {
    this.#error.classList.add("hide");
  }

  #clearActive = (active) => {
    active.querySelector(".card-img-top").classList.remove("img-active");
    active.querySelector(".btn-view").classList.add("hidden");
    active.classList.remove("card-active");
  };

  #toggleCard = function (container) {
    if (this.modal) return;

    const card = container.querySelector(".card");
    const active = document.querySelector(".card-active");

    card.querySelector(".card-img-top").classList.toggle("img-active");
    card.querySelector(".btn-view").classList.toggle("hidden");
    card.classList.toggle("card-active");

    if (active && active !== card) this.#clearActive(active);
  };

  setModal() {
    this.modal = true;
  }

  clearModal() {
    this.modal = false;
  }

  #closeModal() {
    this.modal = false;

    const card = document.querySelector(".card-active");

    if (!card) return;
    card.querySelector(".card-img-top").classList.toggle("img-active");
    card.querySelector(".btn-view").classList.toggle("hidden");
    card.classList.toggle("card-active");
  }

  handle() {
    [...document.querySelectorAll(".card-container")].forEach((card) => {
      card.addEventListener("mouseover", this.#toggleCard.bind(this, card));
      card.addEventListener("mouseout", this.#toggleCard.bind(this, card));
    });

    document.querySelectorAll(".btn-fav").forEach((btn) => {
      btn.addEventListener("click", favouriteHandler.bind(btn));
    });

    document
      .querySelectorAll(".btn-close-modal")
      .forEach((btn) =>
        btn.addEventListener("click", this.#closeModal.bind(this))
      );
  }

  render(data, favs, favFlag = false) {
    const frag = document.createDocumentFragment();
    this.#hideError();
    this.#cars.innerHTML = "";

    if (data.length > 0) {
      data.forEach((car) => {
        const div = document.createElement("div");
        div.classList = "card-container";
        div.insertAdjacentHTML(
          "afterbegin",
          this.#generateHTML(
            car,
            favs.some((fCar) => fCar.car_id === car.car_id),
            favFlag
          )
        );
        frag.appendChild(div);
      });
      this.#cars.appendChild(frag);
    } else {
      this.#renderError();
    }

    document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((tooltip) => {
        new bootstrap.Tooltip(tooltip);
      });
  }

  #generateHTML(car, flag, favFlag) {
    let brand = car.brand;
    brand = brand
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    if (brand.length < 4) brand = brand.toUpperCase();

    let btn =
      favFlag &&
      (car.status === "rented"
        ? "rented"
        : car.status === "reserved"
        ? "reserved"
        : car.status === "oos"
        ? "out of service"
        : "");

    if (!btn) btn = "view";

    //prettier-ignore
    return `
        <div class = "card" data-car-id ="${car.car_id}" data-region="${car.region}">
            <div class="card-header">
              <h3 class="car-brand">${brand} ${car.model.toUpperCase()}</h3>
              <button class="btn-fav">
                <ion-icon class ="fav-icon fav-outer" name="heart-outline">
                </ion-icon>
                <ion-icon class ="fav-icon fav-inner ${
                  flag ? "fav-active" : ""
                }" name="heart"></ion-icon>
              </button>

              <span class="car-type">${ car.type.length <4?car.type.toUpperCase():
                car.type[0].toUpperCase() + car.type.slice(1).toLowerCase()
              }</span>
            </div>

            <div class="img-container mx-auto mb-3">
              <img
                src="https://cdn.imagin.studio/getImage?customer=egalexu&target=make&make=${car.brand}&modelFamily=${car.model}&modelYear=${car.year}&paintId=imagin-${car.color}"
                class="card-img-top "
                alt="${car.brand} car photo"
              />
            </div>

            <div class="card-body mx-2">
              <div class="seating-label">
                <ion-icon class="car-icon" name="person"></ion-icon>
                <span class="car-seating">${car.seating}</span>
              </div>

              <button class="region-label" data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="${   car.region.length < 4
                    ? car.region.toUpperCase()
                    : car.region[0].toUpperCase() +
                      car.region.slice(1).toLowerCase()}" 
                >
                <ion-icon 
                 
                class="car-icon" name="location-sharp"></ion-icon>
                <span class="car-region">${car.cca3.toUpperCase()}</span>
              </button>

              <div class="rate-label">
                <span class="currency">$</span>
                <span class="car-amount me-1">${car.rate}</span>
                <span class="car-rate">/d</span>
              </div>
              
              <button
               class="btn btn-primary btn-view hidden mt-4 ${btn === 'view'? "": "disabled"}"
               data-bs-toggle="modal"
               data-bs-target="#car-info"
               ${car.status === 'rented'||car.status === 'reserved'?`data-res-id=${car.res_id}`:""}
              >${btn}</button>
            </div>
          </div>
  `;
  }

  renderCarView(car, active, location) {
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
    this.#footerContainer.innerHTML = this.#generateFooterHTML(active,location);
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
                  car.powertrain[0].toUpperCase() + car.powertrain.slice(1).toLowerCase()
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
                <div class="info-text">${car.plate_no.toUpperCase()}</div>
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
                  <div class="info-text"><span class="pay-sub">reserve date</span>${
                    car.date.split("T")[0]
                  }</div>
                </div>

                <div class="field info-date">
                  <div class="info-icon me-3">
                    <ion-icon name="calendar"></ion-icon>
                  </div>
                  <div class="info-text me-2"><span class="pay-sub">pick-up date</span>${car.pick_date.split("T")[0]}</div>
                  <div class="info-text"><span class="pay-sub">drop-off date</span>${car.drop_date.split("T")[0]}</div>
                </div>

                <div class="field info-order">
                  <div class="info-icon me-3">
                    <ion-icon name="cube"></ion-icon>
                  </div>
                  <div class="info-text me-2"><span class="pay-sub">reservation number</span>${car.res_id}</div>
                </div>
              `
                   : ""
               }
    `;
  }

  #generateFooterHTML(active) {
    let type;

    if (active === "home" || active === "favourites") type = "reserve";

    if (active === "reserved") type = "pick-up";

    if (active === "rented") type = "return";

    // get location for favourites

    let html = `
            <button 
            ${
              type === "reserve"
                ? `form="action"
                   type="submit"
                   `
                : ""
            } 

            type="button" class="btn btn-primary btn-${type}">${type}</button>`;

    if (type === "pick-up")
      return (
        ` <button type="button"  class="btn btn-outline-primary btn-revoke">revoke</button>` +
        " " +
        html
      );

    return html;
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

  renderPayments(data) {
    this.payContainer.innerHTML = "";

    data.forEach((payment) => {
      let brand = payment.brand;
      brand = brand
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

      if (brand.length < 4) brand = brand.toUpperCase();

      //prettier-ignore
      const html = `
    <div class="payment ${payment.pay_status === "paid" ? "paid" : ""}" data-order-id="${
        payment.res_id
      }" data-car-id="${payment.car_id}">
        <div class="pay-car">${brand + " " + payment.model.toUpperCase()}</div>
        <div class="pay-rate"><span class="pay-sub">rate/day</span>$${
          payment.rate
        }</div>

        <div class="pay-status">
          <ion-icon class="pay-icon ${
            payment.pay_status === "paid" ? "hide" : ""
          }" name="close-outline"></ion-icon>
          <ion-icon
            class="pay-icon pay-check ${payment.pay_status === "paid" ? "" : "hide"}"
            name="checkmark-outline"
          ></ion-icon>
        </div>

        <div class="pay-date">
          <span class="pay-sub">Order number</span> ${payment.res_id}
        </div>
        <div class="pay-total"><span class="pay-sub">Total ${
          payment.pay_status === "paid"? `(${payment.method})` : ""
        }</span>$${payment.total}</div>

        <div class="pay-footer">
          <div class="pay-date">
            <span class="pay-sub">Pick-up Date</span>${
              payment.pick_date.split("T")[0]
            }
          </div>
          <div class="pay-date">
            <span class="pay-sub">Drop-off Date</span>${
              payment.drop_date.split("T")[0]
            }
          </div>
          <div class="pay-date">
            <span class="pay-sub">Return Date</span>${
              payment.return_date.split("T")[0]
            }
          </div>
          <div class="pay-date">
            <span class="pay-sub">payment Date</span>${
              payment.pay_date ? `${payment.pay_date.split("T")[0]}` : "-"
            }
          </div>
          <div class="pay-date">
            <span class="pay-sub">Duration</span>${payment.period}
            <span class="pay-sub">day${payment.period>1?'s':""}</span>
          </div>
        </div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#pay" class="btn btn-primary btn-pay ${
          payment.pay_status === "paid" ? "hide" : ""
        }">pay</button>
        <button type="button" class="btn btn-primary btn-paid disabled ${
          payment.pay_status === "paid" ? "" : "hide"
        }">
          paid
        </button>
      </div>
      `;

      this.payContainer.insertAdjacentHTML("beforeend", html);
    });
  }
}

export default new CarsView();
