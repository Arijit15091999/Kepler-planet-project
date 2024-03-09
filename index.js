const fs = require('fs')
const { parse } = require('csv-parse')
const results = []

function isHabbitable (planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  )
}

fs.createReadStream('kepler_data.csv')
  .pipe(
    parse({
      columns: true,
      comment: '#'
    })
  )
  .on('data', data => {
    if (isHabbitable(data))
      results.push({ kepid: data['kepid'], kepoi_name: data['kepoi_name'] })
  })
  .on('end', () => {
    console.log(results)
    console.log('done')
  })
  .on('error', err => {
    console.log(err)
  })
