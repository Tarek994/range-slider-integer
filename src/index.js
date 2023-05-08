const range = require('range-slider_tar')
const integer = require('input-integer_tar')

module.exports = range_slider_integer

function range_slider_integer (opts){

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const range_slider =range(opts)
    const input_integer =integer(opts)

    shadow.append(range_slider, input_integer)

    return el

    function listen (message) {
        const {type, body} = message
        console.log(message)
    }
}