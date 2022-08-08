const uuid = '27b40832-9344-4110-ace8-1e6bf277219f';
const flipped = '3208b427-4493-1041-ace8-1e6bf277219f';
const temp = flipped.replaceAll("-", '');
console.log(temp);
const bigNum = BigInt('0x' + temp);
console.log(bigNum);

console.log(BigInt('0x' + '3208b42744931041ace81e6bf277219f'));

