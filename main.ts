input.onButtonPressed(Button.A, function () {
    num_of_ppl += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num_of_ppl)
})
input.onButtonPressed(Button.B, function () {
    num_of_ppl += -1
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let num_of_ppl = 0
basic.showIcon(IconNames.Meh)
num_of_ppl = 0
basic.forever(function () {
	
})
