# Python Lambda

A lambda function is a small anonymous function.

A lambda function can take any number of arguments, but can only have one expression.

## Syntax
```python
lambda arguments : expression
```

The expression is executed and the result is returned.

## Examples
A lambda function that adds 10 to the number passed in as an argument, and print the result:
```python
x = lambda a : a + 10
print(x(5)) # Output: 15
```

Lambda functions can take multiple arguments:
```python
x = lambda a, b : a * b
print(x(5, 6)) # Output: 30
```

## Why Use Lambda Functions?
The power of lambda is better shown when you use them as an anonymous function inside another function.

Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:
```python
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11)) # Output: 22
print(mytripler(11)) # Output: 33
```
