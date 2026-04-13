# Python Encapsulation

Encapsulation is one of the fundamental concepts in object-oriented programming (OOP). It describes the idea of wrapping data and the methods that work on data within one unit.

## Private Members
In Python, we indicate private members by prefixing the name of the member with a double underscore `__`.

```python
class Base:
    def __init__(self):
        self.a = "Public"
        self.__c = "Private"
```
