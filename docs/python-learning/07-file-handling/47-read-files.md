# Python Read Files

To read the content of a file, use the `read()` method.

## Reading the Entire File
```python
f = open("demofile.txt", "r")
print(f.read())
f.close()
```

## Reading Only Parts of the File
By default the `read()` method returns the whole text, but you can also specify how many characters you want to return:
```python
f = open("demofile.txt", "r")
print(f.read(5))
f.close()
```

## Reading Lines
You can return one line by using the `readline()` method:
```python
f = open("demofile.txt", "r")
print(f.readline())
f.close()
```

## Using a Loop
By looping through the lines of the file, you can read the whole file, line by line:
```python
f = open("demofile.txt", "r")
for x in f:
  print(x)
f.close()
```

## The `with` Statement
It is a good practice to use the `with` statement. The file is automatically closed when the block is finished:
```python
with open("demofile.txt", "r") as f:
    print(f.read())
```
