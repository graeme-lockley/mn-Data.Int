const Parity = mrequire("core:Data.Parity:1.0.0");
const Visible = mrequire("core:Data.Visible:1.0.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");
const Number = mrequire("core:Data.Number:1.0.0");
const Bounded = mrequire("core:Data.Bounded:1.0.0");
const Integer = require("../mn-Data.Integer/index");

const Maybe = mrequire("core:Data.Maybe:1.2.0");
const String = require("../mn-Data.String/index");
const Tuple = mrequire("core:Data.Tuple:v1.0.0");

const NativeInt = require("../mn-Data.Native.Int/index");


function Int(value) {
    this.value = value;
}


//- Creates an `Integer` from a `Native Integer`.
//= of :: Data.Native.Integer -> Integer
const of = value =>
    new Int(value);


//- Tests whether or not the parameter has the same value as `this`.
//= Integer => (==) :: Integer -> Bool
Int.prototype.$EQUAL$EQUAL = function (other) {
    return this.value === other.value;
};
assumptionEqual(of(100).$EQUAL$EQUAL(of(100)), true);
assumptionEqual(of(100).$EQUAL$EQUAL(of(101)), false);


//- Tests whether or not the parameter has a different value to `this`.
//= Integer => (!=) :: Integer -> Bool
Int.prototype.$NOT$EQUAL = Parity.default$NOT$EQUAL;
assumptionEqual(of(100).$NOT$EQUAL(of(100)), false);
assumptionEqual(of(100).$NOT$EQUAL(of(101)), true);


//- Converts the `Int` to a visible `String` value.
//= Int => show :: () -> String
Int.prototype.show = function () {
    return String.of(NativeInt.toString(this.value));
};
assumptionEqual(of(0).show(), String.of("0"));
assumptionEqual(of(100).show(), String.of("100"));
assumptionEqual(of(-100).show(), String.of("-100"));


//= Int => (<=) :: Int -> Bool
Int.prototype.$LESS$EQUAL = function (other) {
    return this.value <= other.value;
};
assumptionEqual(of(10).$LESS$EQUAL(of(20)), true);
assumptionEqual(of(10).$LESS$EQUAL(of(10)), true);
assumptionEqual(of(10).$LESS$EQUAL(of(0)), false);


//= Int => (<) :: Int -> Bool
Int.prototype.$LESS = Ordered.default$LESS;
assumptionEqual(of(10).$LESS(of(20)), true);
assumptionEqual(of(10).$LESS(of(10)), false);
assumptionEqual(of(10).$LESS(of(0)), false);


//= Int => (>) :: Int -> Bool
Int.prototype.$GREATER = Ordered.default$GREATER;
assumptionEqual(of(10).$GREATER(of(20)), false);
assumptionEqual(of(10).$GREATER(of(10)), false);
assumptionEqual(of(10).$GREATER(of(0)), true);


//= Int => (>=) :: Int -> Bool
Int.prototype.$GREATER$EQUAL = Ordered.default$GREATER$EQUAL;
assumptionEqual(of(10).$GREATER$EQUAL(of(20)), false);
assumptionEqual(of(10).$GREATER$EQUAL(of(10)), true);
assumptionEqual(of(10).$GREATER$EQUAL(of(0)), true);


//= Int => compare :: Int -> Ordering
Int.prototype.compare = Ordered.defaultCompare;
assumptionEqual(of(10).compare(of(20)), Ordered.LT);
assumptionEqual(of(10).compare(of(10)), Ordered.EQ);
assumptionEqual(of(10).compare(of(0)), Ordered.GT);


//= Int => min :: Int -> Bool
Int.prototype.min = Ordered.defaultMin;
assumptionEqual(of(10).min(of(20)), of(10));
assumptionEqual(of(10).min(of(10)), of(10));
assumptionEqual(of(10).min(of(0)), of(0));


//= Int => max :: Int -> Bool
Int.prototype.max = Ordered.defaultMax;
assumptionEqual(of(10).max(of(20)), of(20));
assumptionEqual(of(10).max(of(10)), of(10));
assumptionEqual(of(10).max(of(0)), of(10));


//= Int => (+) :: Int -> Int
Int.prototype.$PLUS = function (other) {
    return of(this.value + other.value | 0);
};
assumptionEqual(of(10).$PLUS(of(20)), of(30));
assumptionEqual(of(10).$PLUS(of(10)), of(20));
assumptionEqual(of(10).$PLUS(of(0)), of(10));


//= Int => (-) :: Int -> Int
Int.prototype.$PLUS = function (other) {
    return of(this.value - other.value | 0);
};
assumptionEqual(of(10).$PLUS(of(20)), of(-10));
assumptionEqual(of(10).$PLUS(of(10)), of(0));
assumptionEqual(of(10).$PLUS(of(0)), of(10));


//= Int => negate :: () -> Int
Int.prototype.negate = function () {
    return of((-this.value) | 0);
};
assumptionEqual(of(-10).negate(), of(10));
assumptionEqual(of(10).negate(), of(-10));
assumptionEqual(of(0).negate(), of(0));


//= Int => abs :: () -> Int
Int.prototype.abs = function () {
    return this.value < 0 ? of((-this.value) | 0) : this;
};
assumptionEqual(of(-10).abs(), of(10));
assumptionEqual(of(10).abs(), of(10));
assumptionEqual(of(0).abs(), of(0));


//= Int => signum :: () -> Int
Int.prototype.signum = function () {
    return this.value < 0
        ? of(-1)
        : this.value === 0
            ? this
            : of(1);
};
assumptionEqual(of(-10).signum(), of(-1));
assumptionEqual(of(10).signum(), of(1));
assumptionEqual(of(0).signum(), of(0));


//= Int => toNative :: () -> NativeInt
Int.prototype.toNative = function () {
    return this.value;
};
assumptionEqual(of(-10).toNative(), -10);
assumptionEqual(of(0).toNative(), 0);
assumptionEqual(of(10).toNative(), 10);


//= Int => maxBound :: () -> Int
Int.prototype.maxBound = function() {
    return of(2147483647);
};
assumptionEqual(of(10).maxBound().toNative(), (Math.pow(2, 31) - 1) | 0);


//= Int => minBound :: () -> Int
Int.prototype.minBound = function() {
    return of(-2147483648);
};
assumptionEqual(of(10).minBound().toNative(), -Math.pow(2, 31) | 0);


//= Int => (/) :: Int -> Maybe Int
Int.prototype.$SLASH = function(denominator) {
    if (denominator.value === 0) {
        return Maybe.Nothing;
    } else {
        return Maybe.Just(of((this.value / denominator.value)| 0));
    }
};
assumptionEqual(of(10).$SLASH(of(0)), Maybe.Nothing);
assumptionEqual(of(10).$SLASH(of(3)), Maybe.Just(of(3)));
assumptionEqual(of(10).$SLASH(of(-3)), Maybe.Just(of(-3)));
assumptionEqual(of(-10).$SLASH(of(3)), Maybe.Just(of(-3)));
assumptionEqual(of(-10).$SLASH(of(-3)), Maybe.Just(of(3)));



//= Int => mod :: Int -> Maybe Int
Int.prototype.mod = function(denominator) {
    if (denominator.value === 0) {
        return Maybe.Nothing;
    } else {
        return Maybe.Just(of((this.value % denominator.value)| 0));
    }
};
assumptionEqual(of(10).mod(of(0)), Maybe.Nothing);
assumptionEqual(of(10).mod(of(3)), Maybe.Just(of(1)));
assumptionEqual(of(10).mod(of(-3)), Maybe.Just(of(1)));
assumptionEqual(of(-10).mod(of(3)), Maybe.Just(of(-1)));
assumptionEqual(of(-10).mod(of(-3)), Maybe.Just(of(-1)));


//= Int => divMod :: Int -> Maybe (Int * Int)
Int.prototype.divMod = Integer.defaultDivMod;
assumptionEqual(of(10).divMod(of(0)), Maybe.Nothing);
assumptionEqual(of(10).divMod(of(3)), Maybe.Just(Tuple(of(3))(of(1))));


module.exports = {
    of
};
