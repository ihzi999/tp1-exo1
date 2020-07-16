input.onButtonPressed(Button.A, function () {
    led.unplot(led2, 0)
    led2 = Math.min(4, led2 - 1)
    led.plot(led2, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(led2, 0)
    led2 = Math.min(4, led2 + 1)
    led.plot(led2, 0)
})
let led2 = 0
led2 = 2
led.plot(led2, 0)
let dirc = 1
basic.forever(function () {
    led.unplot(led2, 0)
    led2 += dirc
    led.plot(led2, 0)
    basic.pause(500)
    if (led2 >= 4) {
        dirc = -1
    } else if (led2 <= 0) {
        dirc = 1
    }
})
