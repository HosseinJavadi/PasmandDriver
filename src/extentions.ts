declare global {
  interface Date {
    toShamsi(): string;
    toShamsiDate(): string;
  }
  interface Number {
    toPersion(): string;
    toCurrency(): string;
  }
  interface String {
    toPersion(): string;
    toCurrency(): string;
  }
}
Date.prototype.toShamsi = function (): string {
  if (!this) return "";
  const date = this as Date;
  const datePersionArr = date.toLocaleString("fa").split(",");

  return `${datePersionArr[1]} ${datePersionArr[0]}`;
};
Date.prototype.toShamsiDate = function (): string {
  if (!this) return "";
  const date = this as Date;
  const datePersionArr = date.toLocaleString("fa").split(",");

  return datePersionArr[0];
};
Number.prototype.toPersion = function (): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return this.toString().replace(/\d/g, (x, i) => farsiDigits[parseInt(x)]);
};
Number.prototype.toCurrency = function (): string {
  if (!this) return "";
  const currency = new Intl.NumberFormat("en-US").format(Number(this));
  return currency;
};
String.prototype.toCurrency = function (): string {
  if (!this) return "";
  const currency = new Intl.NumberFormat("en-US").format(Number(this));
  return currency;
};
String.prototype.toPersion = function (): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return this.toString().replace(/\d/g, (x, i) => farsiDigits[parseInt(x)]);
};
export {};
