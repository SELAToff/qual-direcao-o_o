input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Silly)
    basic.pause(500)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Confused)
    basic.pause(500)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Meh)
    basic.pause(500)
    basic.showArrow(ArrowNames.East)
})
basic.showIcon(IconNames.Happy)
