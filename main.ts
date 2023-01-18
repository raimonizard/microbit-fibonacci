let i = 0
let bclicked = 0
let atimes = 0
function interact(interval: number) {
    
    basic.clearScreen()
    i = 1
    while (i < interval + 1) {
        basic.showString("" + ("" + fibo(i)))
        basic.pause(500)
        i += 1
    }
}

function fibo(n: number): number {
    if (n == 1) {
        return 1
    } else if (n == 2) {
        return 1
    } else {
        return fibo(n - 1) + fibo(n - 2)
    }
    
}

function numElements() {
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            atimes += 1
            basic.showString("" + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            bclicked += 1
        }
        
        basic.pause(500)
    }
    interact(atimes)
}

basic.forever(function on_forever() {
    
    atimes = 0
    bclicked = 0
    basic.clearScreen()
    basic.showString("Apreta A")
    numElements()
})
