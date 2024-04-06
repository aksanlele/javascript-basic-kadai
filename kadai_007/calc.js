let num = 30;

if (num >= 1 && num%15 === 0) {
    console.log('3と5の倍数です');
}

else if (num >= 1 && num%3 === 0) {
    console.log('3の倍数です');
}

else if (num >= 1 && num%5 === 0) {
    console.log('5の倍数です');
}

else {
    console.log(num);
}