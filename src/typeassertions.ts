let phone = <HTMLInputElement> document.getElementById("phone") // as HTMLInputElement - you can use "as 'element', or angle brackets when equating the variable
phone.value 

//here wer are ASSERTING to the compiler that we know more about the element than it does, we are telling it to be an HTMLInputElement