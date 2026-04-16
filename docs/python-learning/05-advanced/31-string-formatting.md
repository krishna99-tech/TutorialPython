# Python String Formatting

To make sure a string will display as expected, we can format the result with the `format()` method.

## F-Strings
f-strings were introduced in Python 3.6, and is now the preferred way of formatting strings.
```python
txt = f"The price is {price:.2f} dollars"
```

## String format()
```python
price = 49
txt = "The price is {} dollars"
print(txt.format(price))
```
