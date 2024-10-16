import { buildMockRacingHistory } from "../mock-data/generators/results/build-results-history.mjs";
import { buildMockRacerInfo } from "../mock-data/generators/rider/build-rider.mjs";

const racers = [];
const history = [];
for (let i=1; i < 100; i++) {
    const newRider = buildMockRacerInfo({id: i});
    racers.push(newRider);
    const newHistory = {racerId: i, results: buildMockRacingHistory()}
    history.push(newHistory)
}

const endpoints = {
    racers,
    history
}

console.log(JSON.stringify(endpoints));

// node src/_db/mock-api/generate-endpoints.mjs > src/_db/mock-api/endpoints.json


