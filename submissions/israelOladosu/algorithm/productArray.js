const products = [
  'Canon Kit Lens 15-55mm',
  'Nikon 3100',
  'Samsung NX300',
  'Canon EOS 80D',
  'Sony Alpha A7s',
  'Sony NX 300M',
  'Panasonic Lumix GH4',
  'Panasonic Lumix DC-GH5',
  'Xiaomi Y1-M1',
  'Fujifilm X-A10',
  'Canon DSLR Rebel T7',
  'Canon DSLR EOS 2000D',
  'Sony A7ii',
  'Sony A6500 Mirrorless',
  'Sony Alpha A7r III',
  'Sony NEX-3N',
  'Nikon V1',
  'Sony NEX-F3',
  'Sony NEX-5',
  'Olympus PEN E-PL6',
];

const product_prices = [
  500,
  200,
  750,
  2000,
  1600,
  300,
  800,
  5000,
  500,
  600,
  1200,
  1200,
  2000,
  2000,
  5000,
  750,
  200,
  800,
  900,
  750,
];

//this function prints to the console
const print = (msg) => console.log(msg);

const checkArr = (arr1, arr2) => {
  for (var i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i].length % 2 == 0) {
      arr2[i] = arr2[i] * 2;
    } else {
      arr2[i] = arr2[i] / 2;
    }
    print(`The price of ${arr1[i]} is ${arr2[i]}`);
  }
};

checkArr(products, product_prices);
