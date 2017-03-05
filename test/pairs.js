'use strict';

var S = require('..');

var eq = require('./internal/eq');


test('pairs', function() {

  function comparePairsAsc(a, b) {
    var a0 = a.fst;
    var b0 = b.fst;
    return a0 < b0 ? -1 : a0 > b0 ? 1 : 0;
  }

  eq(typeof S.pairs, 'function');
  eq(S.pairs.length, 1);
  eq(S.pairs.toString(), 'pairs :: StrMap a -> Array (Pair String a)');

  eq(S.pairs({}), []);
  eq(S.pairs({a: 1, b: 2, c: 3}).sort(comparePairsAsc), [S.Pair('a', 1), S.Pair('b', 2), S.Pair('c', 3)]);

  var proto = {a: 1, b: 2};
  var obj = Object.create(proto);
  obj.c = 3;
  obj.d = 4;

  eq(S.pairs(obj).sort(comparePairsAsc), [S.Pair('c', 3), S.Pair('d', 4)]);

});
