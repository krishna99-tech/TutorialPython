# Python self Parameter

The `self` parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.

It does not have to be named `self` , you can call it whatever you like, but it has to be the first parameter of any function in the class.

```python
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

p1 = Person("John", 36)
```
