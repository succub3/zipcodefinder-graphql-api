Go to: `localhost:4000/graphql`:
```
query {
  getAllPeople {
    id
    name
  }
}
```
```
query ($getPersonId: Int) {
  getPerson(id: 1) {
    name
    id
  }
}

```
