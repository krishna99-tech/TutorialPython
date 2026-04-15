# Python Data Types

In programming, data type is an important concept. Variables can store data of different types, and different types can do different things.

## Text Type: `str`
Used for text data.
```python
x = "Hello World"
print(type(x)) # <class 'str'>
```

## Numeric Types: `int`, `float`, `complex`
Used for various types of numbers.
```python
x = 20    # int
y = 20.5  # float
z = 1j    # complex
```

## Sequence Types: `list`, `tuple`, `range`
Used to store collections of data.
```python
x = ["apple", "banana"] # list
y = ("apple", "banana") # tuple
z = range(6)            # range
```

## Mapping Type: `dict`
Used to store data values in key:value pairs.
```python
x = {"name": "John", "age": 36}
```

## Set Types: `set`, `frozenset`
Used to store unique items.
```python
x = {"apple", "banana"} # set
y = frozenset({"apple", "banana"})
```

## Boolean Type: `bool`
Used for True/False values.
```python
x = True
```

## Binary Types: `bytes`, `bytearray`, `memoryview`
Used for binary data manipulation.
```python
x = b"Hello"
```
