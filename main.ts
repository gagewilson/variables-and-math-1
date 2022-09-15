input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    number = 0
})
let number = 0
basic.showNumber(0)
