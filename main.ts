microIoT.microIoT_initDisplay()
let wifi_name = "DGINCB_WT6F"
microIoT.microIoT_WIFI(wifi_name, "20210601")
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"DanDCZznR",
microIoT.SERVERS.English
)
microIoT.microIoT_showUserText(0, wifi_name)
basic.forever(function () {
    microIoT.microIoT_SendMessage(convertToText(1023 - pins.analogReadPin(AnalogPin.P0)), microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(2, "Light: " + (1023 - pins.analogReadPin(AnalogPin.P0)))
    basic.pause(5000)
})
