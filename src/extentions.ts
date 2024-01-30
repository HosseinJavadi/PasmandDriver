declare global {
  interface Date {
    toShamsi(): string;
  }
  interface Number {
    toPersion(): string;
  }
  interface String {
    toPersion(): string;
  }
}
Date.prototype.toShamsi = function (): string {
  if (!this) return "";
  const date = this as Date;
  const datePersionArr = date.toLocaleString("fa").split(",");

  return `${datePersionArr[1]} ${datePersionArr[0]}`;
};
Number.prototype.toPersion = function (): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return this.toString().replace(/\d/g, (x, i) => farsiDigits[parseInt(x)]);
};
String.prototype.toPersion = function (): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return this.toString().replace(/\d/g, (x, i) => farsiDigits[parseInt(x)]);
};
export {};
