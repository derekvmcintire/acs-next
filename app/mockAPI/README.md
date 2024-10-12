# JSON-Server Mock API

## To start the server:

`json-server --watch app/mockAPI/racers.json --port 8000`

## Endpoints

- http://localhost:8000/racers
- http://localhost:8000/racers?id=1
- http://localhost:8000/history
- http://localhost:8000/history?racerId=1

## Developing

To add a new endpoint, create a new `.json` file in the `mockAPI` folder with JSON data you wish to return.
