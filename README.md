

### of

```haskell
of :: Data.Native.Integer -> Int
```

Creates an `Int` from a `Native Integer`.

### (==)

```haskell
Int => (==) :: Int -> Bool
```

Tests whether or not the parameter has the same value as `this`.

### (!=)

```haskell
Int => (!=) :: Int -> Bool
```

Tests whether or not the parameter has a different value to `this`.

### show

```haskell
Int => show :: () -> Data.String
```

Converts the `Int` to a visible `String` value.

### (<=)

```haskell
Int => (<=) :: Int -> Bool
```


### (<)

```haskell
Int => (<) :: Int -> Bool
```


### (>=)

```haskell
Int => (>=) :: Int -> Bool
```


### (>)

```haskell
Int => (>) :: Int -> Bool
```


### compare

```haskell
Int => compare :: Int -> Ordering
```


### min

```haskell
Int => min :: Int -> Bool
```


### max

```haskell
Int => max :: Int -> Bool
```


### (+)

```haskell
Int => (+) :: Int -> Int
```


### (-)

```haskell
Int => (-) :: Int -> Int
```


### negate

```haskell
Int => negate :: () -> Int
```


### abs

```haskell
Int => abs :: () -> Int
```


### signum

```haskell
Int => signum :: () -> Int
```


### toNative

```haskell
Int => toNative :: () -> NativeInt
```


### maxBound

```haskell
Int => maxBound :: () -> Int
```


### minBound

```haskell
Int => minBound :: () -> Int
```


### (/)

```haskell
Int => (/) :: Int -> Maybe Int
```


### mod

```haskell
Int => mod :: Int -> Maybe Int
```


### divMod

```haskell
Int => divMod :: Int -> Maybe (Int * Int)
```



## Dependencies

* [Data.Parity (1.0.0)](https://github.com/graeme-lockley/mn-Data.Parity)
* [Data.Visible (1.0.0)](https://github.com/graeme-lockley/mn-Data.Visible)
* [Data.Ordered (1.0.0)](https://github.com/graeme-lockley/mn-Data.Ordered)
* [Data.Number (1.0.0)](https://github.com/graeme-lockley/mn-Data.Number)
* [Data.Bounded (1.0.0)](https://github.com/graeme-lockley/mn-Data.Bounded)
* [Data.Integer (2.0.0)](https://github.com/graeme-lockley/mn-Data.Integer)
* [Data.Maybe (1.2.0)](https://github.com/graeme-lockley/mn-Data.Maybe)
* [Data.String (1.0.1)](https://github.com/graeme-lockley/mn-Data.String)
* [Data.Tuple (v1.0.0)](https://github.com/graeme-lockley/mn-Data.Tuple)
* [Data.Native.Int (1.0.0)](https://github.com/graeme-lockley/mn-Data.Native.Int)