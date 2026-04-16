# Python None

The `None` keyword is used to define a null value, or no value at all. `None` is not the same as 0, False, or an empty string. `None` is a data type of its own (NoneType) and only None can be None.

```python
x = None

if x:
  print("Do you think None is True?")
elif x is None:
  print("None is None")
else:
  print("None is False")
```
