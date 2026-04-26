# Python Decorators

Decorators allow you to "wrap" another function in order to extend the behavior of the wrapped function, without permanently modifying it.

## Basic Decorator
A decorator is a function that takes another function and extends its behavior.

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

## Decorators with Arguments
If the function you are decorating takes arguments, you need to use `*args` and `**kwargs` in the wrapper.

```python
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}")
        return func(*args, **kwargs)
    return wrapper

@debug
def add(a, b):
    return a + b

print(add(5, 10))
```

## The `@property` Decorator
The `@property` decorator is a built-in decorator that allows you to define methods in a class that can be accessed like attributes.

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
```
