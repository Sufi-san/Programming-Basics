from Dog import Dog
from Dalmatian import Dalmatian

myDog = Dog()
myDog.dog_barks()
myDog.dog_jumps()
myDog.height_check()  # original method from Dog Class

myDalmatian = Dalmatian()
myDalmatian.dog_barks()
myDalmatian.dog_jumps()
myDalmatian.height_check()  # overrided method from Dalmatian class
