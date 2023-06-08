var id__ = document.getElementsByClassName("mshXob"); //mshXob may not be for all browser. needs to be checked first lol
var length__ = id__.length;
var i = 0;
var z = 0;

for(i; length__ > i; i++ ) {
    let value = id__[i].innerHTML;
    let currency_default = "$"; //needs to be changed per country
    let currency = "₱"; //needs to be changed per country
    let final_ = value.replace(currency_default, '');
    final_ = final_.replace(currency, '');
    let floatfin_ = parseFloat(final_);
    addthings(floatfin_);
}

console.log(z);


function addthings(x) {
    z = z + x;
}
