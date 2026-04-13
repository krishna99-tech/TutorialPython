# Python Polymorphism

The word "polymorphism" means "many forms", and in programming it refers to methods/functions/operators with the same name that can be executed on many objects or classes.

```python
class Car:
  def move(self):
    print("Drive!")

class Boat:
  def move(self):
    print("Sail!")

car1 = Car()
boat1 = Boat()

for x in (car1, boat1):
  x.move()
```
