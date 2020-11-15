'use strict';

const Z = require ('sanctuary-type-classes');

const S = require ('..');

const eq = require ('./internal/eq');


test ('curry2', () => {

  eq (S.show (S.curry2)) ('curry2 :: ((a, b) -> c) -> a -> b -> c');

  eq (S.curry2 (Z.concat) ('foo') ('bar')) ('foobar');

});
