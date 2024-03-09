# this project is based on the data from the kepler satellite launched by Nasa 

## planets are sorted from the data accoring to the following set of parameters given in the data file kepler-data.csv


``` javascript
function isHabbitable (planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  )
```


## open the project folder and then open the termial and run this commands below to run this project. 

``` javascript
npm install 

node index.js

```

## in your terminal