import { getRandomArrayElement, getID, getRandomInt } from '../utils/common';
import { SOME_PICTURES_LIMIT, CITIES, DESCRIPTIONS } from '../const';

const destinationID = getID();

const createPicture = () => ({
  src: `https://loremflickr.com/248/152?random=${getRandomInt(5)}`,
  description: getRandomArrayElement(DESCRIPTIONS),
});

const destinations = CITIES.map((city) =>
  ({
    id: destinationID(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: `${city}`,
    pictures: Array.from({ length: getRandomInt(SOME_PICTURES_LIMIT) }, createPicture),
  })
);

const getMockedDestinations = () => destinations;
const getRandomDestination = () => getRandomArrayElement(destinations);

export { getMockedDestinations, getRandomDestination };
