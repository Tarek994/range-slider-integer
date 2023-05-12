const range = require('range-slider_tar')
const integer = require('input-integer_tar')

module.exports = range_slider_integer

function range_slider_integer (opts){
    const state = {}

    const el = document.createElement('div')
    const rsi = document.createElement('div')
    rsi.classList.add('rsi')


    const range_slider = range(opts, protocol)
    const input_integer = integer(opts, protocol)

    rsi.append(range_slider, input_integer)

    const style = document.createElement('style')

    style.textContent = get_theme()

    shadow.append(rsi, style)

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

    function get_theme() {
        return `
        .rsi{
            padding: 5%;
            display: grid;
            grid-template-columns: 8fr 1fr;
            align-items: center;
            justify-items: center;
        }

        `
    }

}