const hqLocation = 42;

function distanceFromHqInBlocks(location) {
    let calc = hqLocation - location;
    return Math.abs(calc);
}

function distanceFromHqInFeet(location) {
    return (distanceFromHqInBlocks(location) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
  }

function calculatesFarePrice(start, destination) {
    let totalDistance = distanceTravelledInFeet(start, destination);
    let flatFare = 25;
    let free99 = 0;
    let twoCents = .02;
    let freeDistance = 400;
    let twoCentsThresh = 2000;
    let flatFareThresh = 2500;


    if (totalDistance <= freeDistance) {
        return totalDistance * free99;
    } else if (totalDistance > freeDistance && totalDistance < twoCentsThresh) {
        return (totalDistance - freeDistance) * twoCents;
    } else if (totalDistance > twoCentsThresh && totalDistance < flatFareThresh) {
        return flatFare;
    } else if (totalDistance > flatFareThresh) {
        return 'cannot travel that far'
    }
  }