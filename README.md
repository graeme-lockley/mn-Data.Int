

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

#### Examples:

```haskell
of(100).$EQUAL$EQUAL(of(100)) == true
of(100).$EQUAL$EQUAL(of(101)) == false
```

### (!=)

```haskell
Int => (!=) :: Int -> Bool
```

Tests whether or not the parameter has a different value to `this`.

#### Examples:

```haskell
of(100).$NOT$EQUAL(of(100)) == false
of(100).$NOT$EQUAL(of(101)) == true
```

### show

```haskell
Int => show :: () -> Data.String
```

Converts the `Int` to a visible `String` value.

### (<=)

```haskell
Int => (<=) :: Int -> Bool
```


#### Examples:

```haskell
of(10).$LESS$EQUAL(of(20)) == true
of(10).$LESS$EQUAL(of(10)) == true
of(10).$LESS$EQUAL(of(0)) == false
```

### (<)

```haskell
Int => (<) :: Int -> Bool
```


#### Examples:

```haskell
of(10).$LESS(of(20)) == true
of(10).$LESS(of(10)) == false
of(10).$LESS(of(0)) == false
```

### (>)

```haskell
Int => (>) :: Int -> Bool
```


#### Examples:

```haskell
of(10).$GREATER(of(20)) == false
of(10).$GREATER(of(10)) == false
of(10).$GREATER(of(0)) == true
```

### (>=)

```haskell
Int => (>=) :: Int -> Bool
```


#### Examples:

```haskell
of(10).$GREATER$EQUAL(of(20)) == false
of(10).$GREATER$EQUAL(of(10)) == true
of(10).$GREATER$EQUAL(of(0)) == true
```

### compare

```haskell
Int => compare :: Int -> Ordering
```


#### Examples:

```haskell
of(10).compare(of(20)) == Ordered.LT
of(10).compare(of(10)) == Ordered.EQ
of(10).compare(of(0)) == Ordered.GT
```

### min

```haskell
Int => min :: Int -> Bool
```


#### Examples:

```haskell
of(10).min(of(20)) == of(10)
of(10).min(of(10)) == of(10)
of(10).min(of(0)) == of(0)
```

### max

```haskell
Int => max :: Int -> Bool
```


#### Examples:

```haskell
of(10).max(of(20)) == of(20)
of(10).max(of(10)) == of(10)
of(10).max(of(0)) == of(10)
```

### (+)

```haskell
Int => (+) :: Int -> Int
```


#### Examples:

```haskell
of(10).$PLUS(of(20)) == of(30)
of(10).$PLUS(of(10)) == of(20)
of(10).$PLUS(of(0)) == of(10)
```

### (-)

```haskell
Int => (-) :: Int -> Int
```


#### Examples:

```haskell
of(10).$PLUS(of(20)) == of(-10)
of(10).$PLUS(of(10)) == of(0)
of(10).$PLUS(of(0)) == of(10)
```

### negate

```haskell
Int => negate :: () -> Int
```


#### Examples:

```haskell
of(-10).negate() == of(10)
of(10).negate() == of(-10)
of(0).negate() == of(0)
```

### abs

```haskell
Int => abs :: () -> Int
```


#### Examples:

```haskell
of(-10).abs() == of(10)
of(10).abs() == of(10)
of(0).abs() == of(0)
```

### signum

```haskell
Int => signum :: () -> Int
```


#### Examples:

```haskell
of(-10).signum() == of(-1)
of(10).signum() == of(1)
of(0).signum() == of(0)
```

### toNative

```haskell
Int => toNative :: () -> NativeInt
```


#### Examples:

```haskell
of(-10).toNative() == -10
of(0).toNative() == 0
of(10).toNative() == 10
```

### maxBound

```haskell
Int => maxBound :: () -> Int
```


#### Examples:

```haskell
of(10).maxBound().toNative() == (Math.pow(2, 31) - 1) | 0
```

### minBound

```haskell
Int => minBound :: () -> Int
```


#### Examples:

```haskell
of(10).minBound().toNative() == -Math.pow(2, 31) | 0
```

### (/)

```haskell
Int => (/) :: Int -> Maybe Int
```


#### Examples:

```haskell
of(10).$SLASH(of(0)) == Maybe.Nothing
of(10).$SLASH(of(3)) == Maybe.Just(of(3))
of(10).$SLASH(of(-3)) == Maybe.Just(of(-3))
of(-10).$SLASH(of(3)) == Maybe.Just(of(-3))
of(-10).$SLASH(of(-3)) == Maybe.Just(of(3))
```

### mod

```haskell
Int => mod :: Int -> Maybe Int
```


#### Examples:

```haskell
of(10).mod(of(0)) == Maybe.Nothing
of(10).mod(of(3)) == Maybe.Just(of(1))
of(10).mod(of(-3)) == Maybe.Just(of(1))
of(-10).mod(of(3)) == Maybe.Just(of(-1))
of(-10).mod(of(-3)) == Maybe.Just(of(-1))
```

### divMod

```haskell
Int => divMod :: Int -> Maybe (Int * Int)
```


#### Examples:

```haskell
of(10).divMod(of(0)) == Maybe.Nothing
of(10).divMod(of(3)) == Maybe.Just(Tuple(of(3))(of(1)))
```


## Dependencies

* [Data.Parity (1.0.0)](https://github.com/graeme-lockley/mn-Data.Parity)
* [Data.Visible (1.0.0)](https://github.com/graeme-lockley/mn-Data.Visible)
* [Data.Ordered (1.0.0)](https://github.com/graeme-lockley/mn-Data.Ordered)
* [Data.Number (1.0.0)](https://github.com/graeme-lockley/mn-Data.Number)
* [Data.Bounded (1.0.0)](https://github.com/graeme-lockley/mn-Data.Bounded)
* [Data.Integer (2.0.0)](https://github.com/graeme-lockley/mn-Data.Integer)
* [Data.Maybe (1.2.0)](https://github.com/graeme-lockley/mn-Data.Maybe)
* [Data.String (1.0.0)](https://github.com/graeme-lockley/mn-Data.String)
* [Data.Tuple (v1.0.0)](https://github.com/graeme-lockley/mn-Data.Tuple)
* [Data.Native.Int (1.0.0)](https://github.com/graeme-lockley/mn-Data.Native.Int)