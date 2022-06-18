Go to: `localhost:4000/graphql`:
```
query {
  getAllZipCodes {
    id
    name
  }
}
```
```
query ($zipCode: String!) {
  getZipCode(id: 1) {
    id
    name
  }
}

```
