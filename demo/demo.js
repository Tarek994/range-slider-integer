const range = require ('range-slider_tar')
const integer = require ('input-integer_tar')


const opts = { min: 0, max: 10 }
const range_slider = range(opts)
const input_integer = integer(opts)

document.body.append(range_slider, input_integer)