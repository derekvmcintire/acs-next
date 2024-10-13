# JSON-Server Mock API

## JSON-Server Documentation

This mock API was created with `json-server`. It allows you to define a JSON object inside a `.json` file, and will automatically create endpoints based on the shape of the data. Once you create your file and add your JSON object, you run the command below and will be able to call the endpoints as if they were a normal API. You can add multiple resources to a single file to have them available at the same time on the same local host.

JSON-server documentation can be found here: https://www.npmjs.com/package/json-server[https://www.npmjs.com/package/json-server]

## To start the server:

`json-server --watch app/mockAPI/endpoints.json --port 8000`

## Existing Endpoints

- http://localhost:8000/racers
- http://localhost:8000/racers?id=1
- http://localhost:8000/history
- http://localhost:8000/history?racerId=1

## Developing

To add a new endpoint, add a new field to the endpoints.json object
