//  1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayOfNumbers);


//  2. Array доторх тоонуудын нийлбэрийг ол.

let sum = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i];
}
console.log('тоонуудын нийлбэр = ' + sum);


//  3. Хамгийн их тоог ол.

let max = -9999;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (max < arrayOfNumbers[i]) {
    max = arrayOfNumbers[i];
  } else {
    min = arrayOfNumbers[i]
  }
}
console.log('Хамгийн их тоо = ' + max);


//  4. Хамгийн бага тоог ол.

console.log('Хамгийн бага тоо = ' + min);

//  Array - ийн эхэнд дурын 1 тоог нэм.

console.log(arrayOfNumbers.unshift(999));
console.log(arrayOfNumbers);


//  6. Array - ийн төгсгөлд дурын 1 тоог нэм.

arrayOfNumbers.splice(arrayOfNumbers.length, 0, 888)
console.log(arrayOfNumbers);