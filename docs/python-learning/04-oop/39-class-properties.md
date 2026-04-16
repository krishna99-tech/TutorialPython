# Python Class Properties

Properties are variables that belong to a class or an object.

## Instance Properties
Variables defined in `__init__` are unique to each instance.

## Class Properties
Variables defined directly in the class are shared by all instances.

```python
class Dog:
    species = "Canine" # Class property

    def __init__(self, name):
        self.name = name # Instance property
```
