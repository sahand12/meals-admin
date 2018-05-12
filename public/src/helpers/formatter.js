import {toJalaali} from 'jalaali-js';

const persianMonth = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن ', 'اسفند'];
const persianDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

function asEnglishText() {}

function asPersianText() {}

export function asPersianNumber(number) {
  const digits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

  return number
    .toString()
    .replace(/(\d)\.(\d)/, (match, p1, p2) => p1 + '\u066B' + p2)
    .replace(/\d/g, x => digits[x]);
}
function asEnNumber() {}

function asTomanCurrency() {}
function asDollarCurrency() {}

function asRialCurrency() {}
function asEuroCurrency() {}

export function asJalaiDate(date) {
  if ({}.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid argument type, must be a date object');
  }
  const {jy, jm, jd} = toJalaali(date);
  return jd + ' ' + persianMonth[jm - 1] + ' ' + jy;
}

function asJalaiDateTime() {}

export function asPersianBool(value, t = {true: 'بله', false: 'خیر'}) {
  return !!value ? t.true : t.false;
}
function asEnglishBool() {}

export function asPersianPhoneNumber(str) {
  const pattern = /^(0+9+)(\d{2})(\d{3})(\d{4})$/;
  return asPersianNumber(str
    .replace(pattern, (match, p1, p2, p3, p4) =>
      '09' + p2 + ' - ' + p3 + ' ' + p4
    ));
}
