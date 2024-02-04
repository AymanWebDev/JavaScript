function add(num, num1) {
    const total = num + num1;
    return total;
  }
  
  const addition = function add2(num, num1) {
    return num + num1;
  };
  
  const addition4 = (num, num1) => num + num1;
  
  const addition3 = function (num, num1) {
    return num + num1;
  };
  const sum = add(50, 40);
  const sum2 = addition(20, 10);
  const sum3 = addition3(10, 10);
  const sum4 = addition3(30, 10);
  console.log(sum, sum2, sum3, sum4);
  
  const member = [12, 32, 25, 14, 85, 96, 38, 28];
  
  const itemSquare = member.map((item) => item * item);
  
  console.log(itemSquare);
  
  const products = [
    { name: "shirt", color: "blacky", price: 200 },
    { name: "Pant", color: "blue", price: 200 },
    { name: "t-shirt", color: "white", price: 200 },
    { name: "shirt", color: "black", price: 200 },
  ];
  
  products.map((product) => console.log(product));
  