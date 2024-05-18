import { getMockedPoints } from '../mock/point-mock';
import { getMockedDestinations } from '../mock/destination';
import { getMockedOffers } from '../mock/offer-mock';
import { FilterType, SORT_TYPES } from '../const';

export default class PointModel {
  #tripPoints = [];
  #destinations = [];
  #offers = [];
  #filters = [];
  #sortTypes = [];

  // constructor() {
  //   this.#filters = Object.values(FilterType);
  //   this.#destinations = getMockedDestinations();
  //   this.#offers = getMockedOffers();
  //   this.#sortTypes = SORT_TYPES;
  //   // this.#tripPoints = []; //надо порефакторить модель
  //   this.#tripPoints = getMockedPoints().map((tripPoint) => {
  //     const { offers } = this.#offers.find((offer) => offer.type === tripPoint.type);

  //     return {
  //       ...tripPoint,
  //       destination: this.#destinations.find((dest) => dest.id === tripPoint.destination),
  //       offers: offers.map((offer) => ({
  //         type: tripPoint.type,
  //         ...offer,
  //         selected: getRandomBoolean(),
  //       })),
  //     };
  //   });
  // }

  init() {
    this.destinations = getMockedDestinations();
    this.offers = getMockedOffers();
    this.tripPoints = getMockedPoints();
    this.#filters = Object.values(FilterType);
    this.#sortTypes = SORT_TYPES;
  }

  get tripPoints() {
    return this.#tripPoints;
  }

  set tripPoints(tripPoints) {
    this.#tripPoints = tripPoints;
  }

  get offers() {
    return this.#offers;
  }

  set offers(offers) {
    this.#offers = offers;
  }

  get destinations() {
    return this.#destinations;
  }

  set destinations(destinations) {
    this.#destinations = destinations;
  }

  get sortTypes() {
    return this.#sortTypes;
  }

  get filters() {
    return this.#filters;
  }
}


