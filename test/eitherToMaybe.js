'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('eitherToMaybe', () => {

  eq (S.show (S.eitherToMaybe)) ('eitherToMaybe :: Either a b -> Maybe b');

  eq (S.eitherToMaybe (S.Left ('Cannot divide by zero'))) (S.Nothing);
  eq (S.eitherToMaybe (S.Right (42))) (S.Just (42));

});
