i = 0
bclicked = 0
atimes = 0
def interact(interval: number):
    global i
    basic.clear_screen()
    i = 1
    while i < interval + 1:
        basic.show_string("" + str(fibo(i)))
        basic.pause(500)
        i += 1
def fibo(n: number):
    if n == 1:
        return 1
    elif n == 2:
        return 1
    else:
        return fibo(n - 1) + fibo(n - 2)
def numElements():
    global atimes, bclicked
    while bclicked < 1:
        if input.button_is_pressed(Button.A):
            atimes += 1
            basic.show_string("" + str(atimes))
        elif input.button_is_pressed(Button.B):
            bclicked += 1
        basic.pause(500)
    interact(atimes)

def on_forever():
    global atimes, bclicked
    atimes = 0
    bclicked = 0
    basic.clear_screen()
    basic.show_string("Apreta A")
    numElements()
basic.forever(on_forever)
