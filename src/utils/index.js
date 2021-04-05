const { JSON } = window;

/* -------------------------------------------------------------------------- */

export const serialize = JSON.stringify;
export const deserialize = JSON.parse;

/* -------------------------------------------------------------------------- */

export const isFunction = o => typeof o === 'function';

/* -------------------------------------------------------------------------- */

/* eslint-disable no-useless-escape */

// 참고: https://emailregex.com/
export const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 참고: https://regexr.com/3bfsi
export const passwordRegExp = /^(?=.*\d)(?=.*[a-z]).{6,20}$/i;

export const isValidDisplayNameFormat = value => value.length >= 2;
export const isValidEmailFormat = value => emailRegExp.test(value);
export const isValidPasswordFormat = value => passwordRegExp.test(value);
export const isValidPasswordConfirmFormat = (value1, value2) => {
  return value1 === value2;
};
