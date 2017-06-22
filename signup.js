function passcorrect()
{
	var letters = /^[A-Za-z]+$/;
	var password = document.getElementByName("psw").value;
var passrep = document.getElementByName("psw-repeat").value;
var user = document.getElementByName("username").value;
if(password ==passrep && user.value.match(letters))
{
	alert ("registration successfully");
	window.location = "index.html";
	return false;
}
else{
	alert("registration invalid..password doesn't match retry again");
}
	
	//if(user.value.match(letters))
	//{  
//window.location = "index.html";
//return true;  
//}  
//else  
//{  
//alert('Username must have alphabet characters only');  
//uname.focus();  
//return false;  
//}  
//}
	
	
	