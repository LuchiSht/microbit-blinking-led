let rowCount = 0
let columnCount = 0
let x = 0
let y = 0
basic.forever(function () {
    rowCount = 5
    columnCount = 4
    led.plot(x, y)
    led.unplot(x - 1, y)
    basic.pause(100)
    if (x > columnCount) {
        x = 0
        y += 1
    } else {
        x += 1
    }
    if ((x && y) == rowCount) {
        y = 0
        x = 0
    }
})
