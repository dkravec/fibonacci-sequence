Future Functions will be created into the Fibonacci Sequence project.

functions you can run

## allResults Function
Web - allResults()
Package - fibseq.allResults()
returns all results from sequence in an array



## indexArray Function
Web - indexArray(number)
Package - fibseq.indexArray(number)

fibseq.indexArray(number / array)

returns index in sequence
check justAnswers.json for array of numbers

examples
- fibseq.indexArray(3)
returns: 2
- fibseq.indexArray(5) 
returns: 8



## closestIndex function:
``` 
Web - closestIndex(number, rounding?)
Package - fibseq.closestIndex(data, rounding?);

fibseq.closestIndex(number / array, up / down?); 
```
returns closest number to that number input

you can return mutiple into an array
will take closest of each + closest of all


you can add rounding type, (up / down)
by default rounding is up

### example array with default rounding

```js
const array = [1, 3, 4, 29]

fibseq.closestResult(array)

returns : [1, 3, 5, 34] 
```

### example array plus rounding up

``` js
const array = [1, 3, 4, 29]

fibseq.closestResult(array, up)

returns : [1, 3, 5, 34] // which is 
```

### example array plus rounding down

``` js
const array = [1, 3, 4, 29]

fibseq.closestResult(array, down)

returns : [1, 3, 3, 21] // which is 
```


### example number with default rounding #1

```js
fibseq.closestResult(3)
returns : 3 // which is 3
```

### example number with default rounding #2

``` js
fibseq.closestResult(4)

returns : 3  // which is 4
```

### example number with rounding down

``` js
fibseq.closestResult(4, down)

returns : 3  // which is 3
```

### example number with rounding up
``` js
fibseq.closestResult(4, up)

returns : 3  // which is 4```
```