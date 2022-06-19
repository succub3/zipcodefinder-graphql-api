Go to: `localhost:4000/graphql`:
```
query GetZipCodeInfo($countryCode: String!, $zipCode: String!) {
  getZipCodeInfo(countryCode: $countryCode, zipCode: $zipCode) {
    zipCode
    countryCode
    country
    places {
      locationName
      stateCode
      state
      longitude
      latitude
    }
  }
}
```
```
query GetZipCodeInfo($countryCode: String!, $zipCode: String!) {
  getZipCodeInfo(countryCode: "US", zipCode: "90210") {
    zipCode
    countryCode
    country
    places {
      locationName
      stateCode
      state
      longitude
      latitude
    }
  }
}
```
