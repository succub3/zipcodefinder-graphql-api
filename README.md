# Setup
## Download and install Node.js (14+)
https://nodejs.org/en/download/

## Install yarn (globally)
```
npm install -g yarn
```

## Run
```
yarn start
```

## To manually run GraphQL command
Go to: `localhost:4000/graphql`:
```
query getZipCodeInfo($countryCode: String!, $postalCode: String!) {
  getZipCodeInfo(countryCode: "US", postalCode: "90210") {
    zipCode
    countryCode
    country
    locations {
      locationName
      stateCode
      state
      longitude
      latitude
    }
  }
}
```
