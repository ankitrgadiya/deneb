---
layout: post
title: "Syntax Highlighting"
date: 2017-04-13
tag: "Jekyll"
image: https://raw.githubusercontent.com/ankitrgadiya/deneb/master/assets/images/post-1.jpeg
---

This template supports syntax highlighting in 172 languages 
using Highlight Js library.

## Bash
```bash
#! /bin/bash

# Location Variables
scr="/tmp/lockbg.png"
logo="$HOME/Pictures/Logo/Logo-small.png"
final="/tmp/lockfinal.png"

# Script
scrot "$scr"
convert "$scr" -blur 0x5 $f "$scr"
convert -gravity center -composite "$scr" "$logo" "$final"
i3lock -u -i "$final"
rm "$final" "$scr"
```

## C
```c
#include <stdio.h>

int a = 100;
int b = 2;

int multiply(void);

int main(void)
{
        printf("Multiplying...\n");

        int result = multiply();

        printf("Result = %i\n", result);

        return 0;
}

int multiply(void)
{
        int product = a * b;

        return product;
}
```

## Ruby
```ruby
rno = rand(100) + 1
print "Your magic number is ", rno, "\n"

if rno % 2 == 1 then
    print "Ooooh, that's an odd number.\n"
else
    print "That's an even number.\n"
    if rno > 2 then
        print "It's not prime, BTW.\n"
    end
end

if rno > 50 
    print "That's more than half as big as it could be!\n"
elsif rno == 42
    print "That's the ultimate magic number!!!!\n"
elsif rno < 10
    print "That's pretty small, actually.\n"
else
    print "What a boring number.\n"
end

if rno == 100 then print "Gosh, you've maxxed out!\n" end
```

## Python
```python
def fact(a):
	if a == 1:
		return 1
	else:
		return (a * fact(a - 1))

def main():
	num = int(input("Enter the num: "))
	result = fact(num)
	print("Result is {}".format(result))

main()
```
	
