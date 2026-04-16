# Python JSON

JSON is a syntax for storing and exchanging data. Python has a built-in package called `json`.

```python
import json

# some JSON:
x =  '{ "name":"John", "age":30, "city":"New York"}'

# parse x:
y = json.loads(x)

# the result is a Python dictionary:
print(y["age"])
```
