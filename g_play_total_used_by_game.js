var parent__ =  document.getElementsByClassName("RqCJic"); //RqCJic may not be for all browser. needs to be checked first lol
var id__ = document.getElementsByClassName("mshXob"); //mshXob may not be for all browser. needs to be checked first lol
var length__ = id__.length;
var i = 0;
var z = 0;

for(i; length__ > i; i++ ) {

    
    //check if its a certain game
    let img = parent__[i];
    // this needs to be changed per game
    let target__ = 'https://play-lh.googleusercontent.com/mMCDyXzbxDO6EfFH3fmIY9KdiYY0VG-qSKRUnYjuUmOoObXQFTo7Ty2Xmzu2bZ0DcaE=s50-rw';
    let identifier = img.getElementsByTagName('img')[0].src;

    if(target__ == identifier) {    
    let value = id__[i].innerHTML;
    let currency_default = "$"; //needs to be changed per country
    let currency = "₱" //needs to be changed per country
    let final_ = value.replace(currency_default, '');
    final_ = final_.replace(currency, '');
    let floatfin_ = parseFloat(final_);
    addthings(floatfin_);
    }
}

console.log(z);


function addthings(x) {
    z = z + x;
}
