# Python Inner Classes

A class defined inside another class is known as an inner class or nested class.

```python
class Student:
    def __init__(self, name, rollno):
        self.name = name
        self.rollno = rollno
        self.lap = self.Laptop() # Creating object of inner class

    class Laptop:
        def __init__(self):
            self.brand = 'HP'
            self.cpu = 'i5'
```
