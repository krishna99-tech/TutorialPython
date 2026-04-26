# Python Delete Files

To delete a file, you must import the `os` module, and run its `os.remove()` function.

## Check if File Exists
To avoid getting an error, you might want to check if the file exists before you try to delete it:
```python
import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")
```

## Delete Folder
To delete an entire folder, use the `os.rmdir()` method:
```python
import os
os.rmdir("myfolder")
```
:::warning
You can only remove empty folders.
:::
