// Funktion, um eine Zufallszahl zwischen 1 und 6 zu generieren
function rollDice () {
    return Math.floor(Math.random() * 6) + 1
}
// Event-Handler für das Schütteln des Micro:bit
input.onGesture(Gesture.Shake, function () {
    // Zufallszahl generieren
    rollResult = rollDice()
    // Augenzahl auf dem Display anzeigen
    basic.showNumber(rollResult)
    basic.pause(500)
    basic.clearScreen()
})
let rollResult = 0
// Hauptprogramm
basic.showIcon(IconNames.Happy)
