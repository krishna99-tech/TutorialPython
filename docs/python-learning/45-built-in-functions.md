# Python Built-in Functions

Python has a set of built-in functions that are always available. Each function is designed to handle common tasks efficiently.

## Most Common Functions

| Function | Description |
| :--- | :--- |
| `print()` | Prints output to the console |
| `len()` | Returns the number of items in an object |
| `type()` | Returns the type of an object |
| `int()`, `float()`, `str()` | Used for type casting |
| `range()` | Returns a sequence of numbers |
| `input()` | Allows user input |

## Full List of Built-ins

### Mathematical Functions
- **`abs(x)`**: Returns the absolute value of a number.
- **`max(iterable)`**: Returns the largest item.
- **`min(iterable)`**: Returns the smallest item.
- **`pow(x, y)`**: Returns x to the power of y.
- **`round(x, n)`**: Rounds a number to n digits.
- **`sum(iterable)`**: Sums the items of an iterator.

### Sequence/Iterable Functions
- **`all(iterable)`**: True if all elements are true.
- **`any(iterable)`**: True if any element is true.
- **`enumerate(iterable)`**: Returns an enumerate object (index, value).
- **`filter(func, iterable)`**: Filters elements based on a function.
- **`map(func, iterable)`**: Applies a function to all items.
- **`reversed(seq)`**: Returns a reversed iterator.
- **`sorted(iterable)`**: Returns a new sorted list.
- **`zip(*iterables)`**: Aggregates elements from multiple iterables.

### Object/Type Functions
- **`dir(object)`**: Returns a list of properties and methods.
- **`id(object)`**: Returns the unique id of an object.
- **`help(object)`**: Invokes the built-in help system.
- **`super()`**: Returns a proxy object that delegates method calls to a parent or sibling class.

### Data Conversion
- **`bin(x)`**: Converts an integer to a binary string.
- **`hex(x)`**: Converts an integer to a hexadecimal string.
- **`oct(x)`**: Converts an integer to an octal string.
- **`chr(i)`**: Returns the string representing a character at Unicode code point i.
- **`ord(c)`**: Returns an integer representing the Unicode code point of a character.

### Execution
- **`eval(expression)`**: Evaluates a string as a Python expression.
- **`exec(object)`**: Executes Python code dynamically.
- **`open(file)`**: Opens a file and returns a file object.
