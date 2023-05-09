const range = require('range-slider_tar')
const integer = require('input-integer_tar')

module.exports = range_slider_integer

function range_slider_integer (opts){
    const state = {}

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const range_slider =range(opts, listen)
    const input_integer =integer(opts, listen)

    const style = document.createElement('style')

    style.textContent = get_theme()

    const output = document.createElement('div')
    output.classList.add('output')
    output.innerText = 0

    shadow.append(range_slider, input_integer,style, output)

    return el

    function listen (message) {
        const {type, body} = message
        if (type === 'update') output.innerText = body
        console.log(message)
    }

    function get_theme () {
        return `
        .output {
            border: 1px solid red;
            padding: 10px;
            text-align: center;
            width:200px;
        }
        `
    }

}