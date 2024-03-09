# this project is based on the data from the kepler satellite launched bt Nasa 

## planets are sorted fro the data accoring to the following set of parameters given in the data file kepler-data.csv


``` javascript
function isHabbitable (planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  )
```


## to run this project type open the project folder and the  open the termial and run this commands below . 

``` javascript
npm install 

node index.js

```

## in your terminal