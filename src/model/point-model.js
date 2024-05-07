import { getMockedPoints } from '../mock/point-mock';
import { getMockedDestinations } from '../mock/destination';
import { getMockedOffers } from '../mock/offer-mock';
import { getRandomBoolean } from '../utils';


export default class PointModel {
  constructor() {
    this.destinations = getMockedDestinations();
    this.offers = getMockedOffers();

    this.tripPoints = getMockedPoints().map((tripPoint) => {
      const { offers } = this.offers.find((offer) => offer.type === tripPoint.type);

      return {
        ...tripPoint,
        destination: this.destinations.find((dest) => dest.id === tripPoint.destination),
        offers: offers.map((offer) => ({
          type: tripPoint.type,
          ...offer,
          selected: getRandomBoolean(),
        })),
      };
    });
  }

  getTripPoints() {
    return this.tripPoints;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}
