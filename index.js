const Parity = mrequire("core:Data.Parity:1.0.0");
const Visible = mrequire("core:Data.Visible:1.0.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");
const Number = mrequire("core:Data.Number:1.0.0");
const Bounded = mrequire("core:Data.Bounded:1.0.0");
const Integer = mrequire("core:Data.Integer:2.0.0");

const Maybe = mrequire("core:Data.Maybe:1.2.0");
const String = mrequire("core:Data.String:1.1.0");
const Tuple = mrequire("core:Data.Tuple:v1.0.0");

const NativeInt = mrequire("core:Data.Native.Int:1.0.0");


function Int(value) {
    this.value = value;
}


//- Creates an `Int` from a `Native Integer`.
//= of :: Data.Native.Integer -> Int
const of = value =>
    new Int(value);


//- Tests whether or not the parameter has the same value as `this`.
//= Int => (==) :: Int -> Bool
Int.prototype.$EQUAL$EQUAL = function (other) {
    return this.value === other.value;
};


//- Tests whether or not the parameter has a different value to `this`.
//= Int => (!=) :: Int -> Bool
Int.prototype.$NOT$EQUAL = Parity.default$NOT$EQUAL;


//- Converts the `Int` to a visible `String` value.
//= Int => show :: () -> Data.String
Int.prototype.show = function () {
    return String.of(NativeInt.toString(this.value));
};


//= Int => (<=) :: Int -> Bool
Int.prototype.$LESS$EQUAL = function (other) {
    return this.value <= other.value;
};


//= Int => (<) :: Int -> Bool
Int.prototype.$LESS = Ordered.default$LESS;


//= Int => (>=) :: Int -> Bool
Int.prototype.$GREATER$EQUAL = Ordered.default$GREATER$EQUAL;


//= Int => (>) :: Int -> Bool
Int.prototype.$GREATER = Ordered.default$GREATER;


//= Int => compare :: Int -> Ordering
Int.prototype.compare = Ordered.defaultCompare;


//= Int => min :: Int -> Bool
Int.prototype.min = Ordered.defaultMin;


//= Int => max :: Int -> Bool
Int.prototype.max = Ordered.defaultMax;


//= Int => (+) :: Int -> Int
Int.prototype.$PLUS = function (other) {
    return of(this.value + other.value | 0);
};


//= Int => (-) :: Int -> Int
Int.prototype.$MINUS = function (other) {
    return of(this.value - other.value | 0);
};


//= Int => negate :: () -> Int
Int.prototype.negate = function () {
    return of((-this.value) | 0);
};


//= Int => abs :: () -> Int
Int.prototype.abs = function () {
    return this.value < 0 ? of((-this.value) | 0) : this;
};


//= Int => signum :: () -> Int
Int.prototype.signum = function () {
    return this.value < 0
        ? of(-1)
        : this.value === 0
            ? this
            : of(1);
};


//= Int => toNative :: () -> NativeInt
Int.prototype.toNative = function () {
    return this.value;
};


//= Int => maxBound :: () -> Int
Int.prototype.maxBound = function() {
    return of(2147483647);
};


//= Int => minBound :: () -> Int
Int.prototype.minBound = function() {
    return of(-2147483648);
};


//= Int => (/) :: Int -> Maybe Int
Int.prototype.$SLASH = function(denominator) {
    if (denominator.value === 0) {
        return Maybe.Nothing;
    } else {
        return Maybe.Just(of((this.value / denominator.value)| 0));
    }
};


//= Int => mod :: Int -> Maybe Int
Int.prototype.mod = function(denominator) {
    if (denominator.value === 0) {
        return Maybe.Nothing;
    } else {
        return Maybe.Just(of((this.value % denominator.value)| 0));
    }
};


//= Int => divMod :: Int -> Maybe (Int * Int)
Int.prototype.divMod = Integer.defaultDivMod;


module.exports = {
    of
};
