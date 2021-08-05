function checkPalindrome(string){
    const arrayValues=string.split('');

    const reverseArray=arrayValues.reverse();

    const reverseString=reverseArray.join('');

    if(string==reverseString){
        console.log('Its a palindrome');
    }else{
        console.log('Its not a palindrome');
    }
}

const string=prompt("Enter a string: ");

checkPalindrome(string);