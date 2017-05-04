const Parity = mrequire("core:Data.Parity:1.0.0");
const Visible = mrequire("core:Data.Visible:1.0.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");
const Number = mrequire("core:Data.Number:1.0.0");
const Integer = mrequire("core:Data.Integer:1.0.0");

const Maybe = mrequire("core:Data.Maybe:v1.0.0");
const String = require("../mn-Data.String/index");

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
Int.prototype.$EQUAL$EQUAL = function(other) {
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
Int.prototype.show = function() {
    return String.of(NativeInt.toString(this.value));
};
assumptionEqual(of(0).show(), String.of("0"));
assumptionEqual(of(100).show(), String.of("100"));
assumptionEqual(of(-100).show(), String.of("-100"));


//= Int => (<=) :: Int -> Bool
Int.prototype.$LESS$EQUAL = function(other) {
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


module.exports = {
    of
};
