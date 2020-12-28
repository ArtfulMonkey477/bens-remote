basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(99)
radio.setTransmitPower(7)
led.enable(false)
basic.forever(function () {
    radio.sendValue("F", pins.digitalReadPin(DigitalPin.P10))
    radio.sendValue("B", pins.digitalReadPin(DigitalPin.P8))
    radio.sendValue("L", pins.digitalReadPin(DigitalPin.P11))
    radio.sendValue("R", pins.digitalReadPin(DigitalPin.P9))
})
