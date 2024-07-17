function object (menu) {

    if (menu === 'Coffie') {
        console.log(`${menu} added`);
        quantity1++;
        var cq = document.getElementById('numero1');
        cq.textContent = quantity1;
        console.log(`${menu} quantity: ${quantity1}`);
        price1 += 5;
        totalProduct1 = price1 + price1 * tax;
        var cp = document.getElementById('tot1');
        cp.textContent = '€' + totalProduct1 + ' | (tax 10%)';
        console.log(`${menu} price: €${totalProduct1}`);
        console.log('tax: (10%)');

    } else if (menu === 'Beagles') {
        console.log(`${menu} added`);
        quantity2++;
        var bq = document.getElementById('numero2');
        bq.textContent = quantity2;
        console.log(`${menu} quantity: ${quantity2}`);
        price2 += 3;
        totalProduct2 = price2 + price2 * tax;
        var bp = document.getElementById('tot2');
        bp.textContent = '€' + totalProduct2 + ' | (tax 10%)';
        console.log(`${menu} price: €${totalProduct2}`);
        console.log('tax: (10%)');

    } else if (menu === 'Soup') {
        console.log(`${menu} added`);
        quantity3++;
        var sq = document.getElementById('numero3');
        sq.textContent = quantity3;
        console.log(`${menu} quantity: ${quantity3}`);
        price3 += 9;
        totalProduct3 = price3 + price3 * tax;
        var sp = document.getElementById('tot3');
        sp.textContent = '€' + totalProduct3 + ' | (tax 10%)';
        console.log(`${menu} price: €${totalProduct3}`);
        console.log('tax: (10%)');

    } else if  (menu === 'Total') {
        total = totalProduct1 + totalProduct2 + totalProduct3;
        var tot = document.getElementById('tot4');
        tot.textContent = '€' + total + ' | (tax 10%)';
        console.log(`Total: €${total}`);
        console.log('tax: (10%)');}
}

let price1 = 0;
let price2 = 0;
let price3 = 0;
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let totalProduct1, totalProduct2, totalProduct3 = 0;
let total = price1 + price2 + price3;
const tax = 0.1;