
var StringFunctions = function (stringToApply) { // Revealing pattern
    return {
        stringToApply: stringToApply,
        myCharAt: function (pos) {
            return this.stringToApply.charAt(pos);
        },
        myIndexOf: function (pos) {
            return this.stringToApply.indexOf(pos);
        },
        myReplace: function (aString) {
            return this.stringToApply.replace(aString);
        },
        mySearch: function (char) {
            return this.stringToApply.search(char);
        },
        mySplit: function (char) {
            return this.stringToApply.split(char);
        },
        myToLowerCase: function () {
            return this.stringToApply.toLowerCase();
        },
        myToUpperCase: function () {
            return this.stringToApply.toUpperCase();
        },
    };
};

var testStrings = StringFunctions('This is a little test');
var methodsObj = Object.getOwnPropertyNames(testStrings); 
var methods = methodsObj.slice(1,methodsObj.length);
var methodsApplied = [testStrings.myCharAt(3), testStrings.myIndexOf('e'), testStrings.myReplace('other'), testStrings.mySearch('little'), testStrings.mySplit('e'), testStrings.myToLowerCase(), testStrings.myToUpperCase()];


var i = 0;

var button = document.getElementById('next');
button.addEventListener('click', function (event) {
    i++;
    document.getElementById('text').innerText = methods[i%methods.length];
    document.getElementById('result').innerText = methodsApplied[i%methodsApplied.length];    
});
