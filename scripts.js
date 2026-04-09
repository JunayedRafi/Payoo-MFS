// Login Button Function
document.getElementById('loginBtn').addEventListener('click', function(e){
    e.preventDefault(); 
    const mobileNumber = 12345;
    const pinNumber = 1234;

    const mobileNumberValaue = document.getElementById('mobileNumber').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValaue);
    const pinNumberValue = document.getElementById('pinNumber').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        
    }
    else{
        alert('Login Failed');
    }
});