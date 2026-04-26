# Python Generators

Generators are functions that return an iterable set of items, one at a time, in a special way.

## The `yield` Keyword
When a generator function is called, it returns a generator object without even beginning execution of the function. When the `next()` method is called for the first time, the function starts executing until it reaches the `yield` statement, which returns the yielded value.

```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
print(next(gen)) # 1
print(next(gen)) # 2
print(next(gen)) # 3
```

## Why Use Generators?
Generators are memory-efficient because they only produce one item at a time, rather than storing the entire sequence in memory.

```python
def firstn(n):
    num = 0
    while num < n:
        yield num
        num += 1

# This uses very little memory even if n is huge
for i in firstn(1000000):
    pass 
```

## Generator Expressions
Just like list comprehensions, you can create generators using parentheses:
```python
my_gen = (x**2 for x in range(10))
for val in my_gen:
    print(val)
```
