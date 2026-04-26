# Map and Filter

Python has built-in functions that allow you to process collections in a functional way.

## The `map()` Function
The `map()` function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.

```python
def myfunc(n):
  return len(n)

x = map(myfunc, ('apple', 'banana', 'cherry'))
print(list(x)) # Output: [5, 6, 6]
```

Using lambda with `map()`:
```python
numbers = [1, 2, 3, 4]
squared = map(lambda x: x**2, numbers)
print(list(squared)) # Output: [1, 4, 9, 16]
```

## The `filter()` Function
The `filter()` function returns an iterator where the items are filtered through a function to test if the item is accepted or not.

```python
ages = [5, 12, 17, 18, 24, 32]

def myFunc(x):
  if x < 18:
    return False
  else:
    return True

adults = filter(myFunc, ages)

for x in adults:
  print(x)
```

Using lambda with `filter()`:
```python
numbers = [1, 2, 3, 4, 5, 6]
evens = filter(lambda x: x % 2 == 0, numbers)
print(list(evens)) # Output: [2, 4, 6]
```
