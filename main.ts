radio.setGroup(8)
radio.setTransmitPower(7)
led.enable(false)
basic.showArrow(ArrowNames.East)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("B")
    } else {
        if (pins.digitalReadPin(DigitalPin.P9) == 0) {
            radio.sendString("L")
        } else {
            if (pins.digitalReadPin(DigitalPin.P10) == 0) {
                radio.sendString("F")
            } else {
                if (pins.digitalReadPin(DigitalPin.P11) == 0) {
                    radio.sendString("R")
                } else {
                    basic.clearScreen()
                }
            }
        }
    }
    basic.pause(200)
})
