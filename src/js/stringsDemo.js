
var StringFunctions = function (stringToApply) { // Revealing pattern
    return {
        stringToApply: stringToApply,
        myCharAt: (pos) => stringToApply.charAt(pos),
        myIndexOf: (pos) => stringToApply.indexOf(pos),
        myReplace: (aString) => stringToApply.replace(aString),
        mySearch: (char) => stringToApply.search(char),
        mySplit: (char) => stringToApply.split(char),
        myToLowerCase: () => stringToApply.toLowerCase(),
        myToUpperCase: () => stringToApply.toUpperCase()
        
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
