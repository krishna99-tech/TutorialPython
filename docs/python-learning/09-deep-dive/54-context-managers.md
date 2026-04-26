# Context Managers

Context managers allow you to manage resources efficiently, ensuring that resources are properly acquired and released.

## The `with` Statement
The most common way to use a context manager is with the `with` statement. It is often used for file handling or database connections.

```python
with open("test.txt", "w") as f:
    f.write("Hello World")
# File is automatically closed here
```

## Creating Custom Context Managers
You can create your own context managers using a class with `__enter__` and `__exit__` methods.

```python
class MyContext:
    def __enter__(self):
        print("Entering context...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context...")

with MyContext() as m:
    print("Inside context")
```

## The `contextlib` Module
You can also use the `@contextmanager` decorator from the `contextlib` module.

```python
from contextlib import contextmanager

@contextmanager
def temp_file():
    print("Setup")
    yield "The Resource"
    print("Teardown")

with temp_file() as res:
    print(f"Using {res}")
```
