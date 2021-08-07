function validateEmail(email){
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regex_pattern.test(email)){
        console.log('The email address is valid');
    }else{
        console.log('The email address is not valid');
    }
}

validateEmail('mahmud.hasan.programming@gmail.com');
validateEmail('galocem463@100xbit');