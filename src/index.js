const range = require('range-slider_tar')
const integer = require('input-integer_tar')

module.exports = range_slider_integer

function range_slider_integer (opts){
    const state = {}

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    rsi.append(range_slider, input_integer)

    const style = document.createElement('style')

    style.textContent = get_theme()

    const output = document.createElement('div')
    output.classList.add('output')
    output.innerText = 0

    shadow.append(range_slider, input_integer,style, output)

    return el

    function protocol (message, notify) {
        const {from} = message
        state[from] = {value: 0, notify}
        return listen
    }

    function listen (message) {
        const {from, type, data } = message
        state[from].value = data
                console.log(state)
        if (type === 'update') {
            output.innerText = data
            var notify
            if (from === 'range-0') notify = state['input-integer-0'].notify
            else if (from === 'input-integer-0') notify = state['range-0'].notify
            notify({type, data})
        }


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