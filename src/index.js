const range = require('range-slider_tar')
const integer = require('input-integer_tar')

module.exports = range_slider_integer

function range_slider_integer (opts){

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const range_slider =range(opts, listen)
    const input_integer =integer(opts)

    const output = document.createElement('div')
    output.innerText = 0

    shadow.append(range_slider, input_integer, output)

    return el

    function listen (message) {
        const {type, body} = message
        if (type === 'update') output.innerText = body
        console.log(message)
    }
}