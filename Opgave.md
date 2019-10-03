# RESTful-API Opgave

Du skal i denne opgave lave dit eget RESTful web-API.

Brug `express` og `mysql` til dette. Dit API skal præsentere sit data som JSON.

Eksempel på et JSON objekt fra dit API:

```JSON
[{
  "id": 1,
  "name": "Feta",
  "country": "Greece",
  "basis": "sheepsmilk",
  "strength": "mild",
  "consistancy": "soft",
  "flavour": "salty",
  "colour": "white"
},{
  "id": 2,
  "name": "Parmasan",
  "country": "France",
  "basis": "cowsmilk",
  "strength": [
    "mild",
    "medium"
  ],
  "consistancy": "hard",
  "flavour": "salty",
  "colour": "yellow"
}]
```

Når dit API skal levere et JSON objekt, skal du sætte en header, som fortæller, at det data du sender er JSON:

```javascript
res.set('Content-Type': 'application/json');
```
