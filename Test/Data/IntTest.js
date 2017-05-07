const Assert = require("assert");
const Unit = mrequire("core:Test.Unit:v1.0.0");

const Maybe = mrequire("core:Data.Maybe:1.2.0");
const Ordered = mrequire("core:Data.Ordered:1.0.0");
const String = mrequire("core:Data.String:1.0.2");
const Tuple = mrequire("core:Data.Tuple:v1.0.0");

const Int = require("../../index.js");
const of = Int.of;

Unit.newSuite("Data.Int")
    .case("(==)", () => {
        Assert.deepEqual(of(100).$EQUAL$EQUAL(of(100)), true);
        Assert.deepEqual(of(100).$EQUAL$EQUAL(of(101)), false);
    })
    .case("(!=)", () => {
        Assert.deepEqual(of(100).$NOT$EQUAL(of(100)), false);
        Assert.deepEqual(of(100).$NOT$EQUAL(of(101)), true);
    })
    .case("show", () => {
        Assert.deepEqual(of(0).show(), String.of("0"));
        Assert.deepEqual(of(100).show(), String.of("100"));
        Assert.deepEqual(of(-100).show(), String.of("-100"));
    })
    .case("(<=)", () => {
        Assert.deepEqual(of(10).$LESS$EQUAL(of(20)), true);
        Assert.deepEqual(of(10).$LESS$EQUAL(of(10)), true);
        Assert.deepEqual(of(10).$LESS$EQUAL(of(0)), false);
    })
    .case("(<)", () => {
        Assert.deepEqual(of(10).$LESS(of(20)), true);
        Assert.deepEqual(of(10).$LESS(of(10)), false);
        Assert.deepEqual(of(10).$LESS(of(0)), false);
    })
    .case("(>=)", () => {
        Assert.deepEqual(of(10).$GREATER$EQUAL(of(20)), false);
        Assert.deepEqual(of(10).$GREATER$EQUAL(of(10)), true);
        Assert.deepEqual(of(10).$GREATER$EQUAL(of(0)), true);
    })
    .case("(>)", () => {
        Assert.deepEqual(of(10).$GREATER(of(20)), false);
        Assert.deepEqual(of(10).$GREATER(of(10)), false);
        Assert.deepEqual(of(10).$GREATER(of(0)), true);
    })
    .case("compare", () => {
        Assert.deepEqual(of(10).compare(of(20)), Ordered.LT);
        Assert.deepEqual(of(10).compare(of(10)), Ordered.EQ);
        Assert.deepEqual(of(10).compare(of(0)), Ordered.GT);
    })
    .case("min", () => {
        Assert.deepEqual(of(10).min(of(20)), of(10));
        Assert.deepEqual(of(10).min(of(10)), of(10));
        Assert.deepEqual(of(10).min(of(0)), of(0));
    })
    .case("max", () => {
        Assert.deepEqual(of(10).max(of(20)), of(20));
        Assert.deepEqual(of(10).max(of(10)), of(10));
        Assert.deepEqual(of(10).max(of(0)), of(10));
    })
    .case("(+)", () => {
        Assert.deepEqual(of(10).$PLUS(of(20)), of(30));
        Assert.deepEqual(of(10).$PLUS(of(10)), of(20));
        Assert.deepEqual(of(10).$PLUS(of(0)), of(10));
    })
    .case("(-)", () => {
        Assert.deepEqual(of(10).$MINUS(of(20)), of(-10));
        Assert.deepEqual(of(10).$MINUS(of(10)), of(0));
        Assert.deepEqual(of(10).$MINUS(of(0)), of(10));
    })
    .case("negate", () => {
        Assert.deepEqual(of(-10).negate(), of(10));
        Assert.deepEqual(of(10).negate(), of(-10));
        Assert.deepEqual(of(0).negate(), of(0));
    })
    .case("abs", () => {
        Assert.deepEqual(of(-10).abs(), of(10));
        Assert.deepEqual(of(10).abs(), of(10));
        Assert.deepEqual(of(0).abs(), of(0));
    })
    .case("signum", () => {
        Assert.deepEqual(of(-10).signum(), of(-1));
        Assert.deepEqual(of(10).signum(), of(1));
        Assert.deepEqual(of(0).signum(), of(0));
    })
    .case("toNative", () => {
        Assert.deepEqual(of(-10).toNative(), -10);
        Assert.deepEqual(of(0).toNative(), 0);
        Assert.deepEqual(of(10).toNative(), 10);
    })
    .case("maxBound", () => {
        Assert.deepEqual(of(10).maxBound().toNative(), (Math.pow(2, 31) - 1) | 0);
    })
    .case("minBound", () => {
        Assert.deepEqual(of(10).minBound().toNative(), -Math.pow(2, 31) | 0);
    })
    .case("(/)", () => {
        Assert.deepEqual(of(10).$SLASH(of(0)), Maybe.Nothing);
        Assert.deepEqual(of(10).$SLASH(of(3)), Maybe.Just(of(3)));
        Assert.deepEqual(of(10).$SLASH(of(-3)), Maybe.Just(of(-3)));
        Assert.deepEqual(of(-10).$SLASH(of(3)), Maybe.Just(of(-3)));
        Assert.deepEqual(of(-10).$SLASH(of(-3)), Maybe.Just(of(3)));
    })
    .case("mod", () => {
        Assert.deepEqual(of(10).mod(of(0)), Maybe.Nothing);
        Assert.deepEqual(of(10).mod(of(3)), Maybe.Just(of(1)));
        Assert.deepEqual(of(10).mod(of(-3)), Maybe.Just(of(1)));
        Assert.deepEqual(of(-10).mod(of(3)), Maybe.Just(of(-1)));
        Assert.deepEqual(of(-10).mod(of(-3)), Maybe.Just(of(-1)));
    })
    .case("divMod", () => {
        Assert.deepEqual(of(10).divMod(of(0)), Maybe.Nothing);
        Assert.deepEqual(of(10).divMod(of(3)), Maybe.Just(Tuple(of(3))(of(1))));
    })
;