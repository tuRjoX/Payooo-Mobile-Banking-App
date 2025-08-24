// login button functionality
document.getElementById("loginButton").addEventListener("click",function (event){
    event.preventDefault();
    const mobileNumber = 12345678910;
    const pin = 1234;
    const mobileNumberValue = parseInt(document.getElementById("mobile-number").value);
    const pinNumberValue = parseInt(document.getElementById("pin-number").value);

    if(mobileNumberValue === mobileNumber && pinNumberValue===pin){
        window.location.href="./home.html";
    }else{
        alert("Invalid Credentials!");
    }
});