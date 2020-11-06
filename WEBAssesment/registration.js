function validation(){
    if(document.getElementById("uname").value==""){
        alert("Enter your Name");

        document.registerform.username.focus();
    }
    else if(document.getElementById("password").value==""){
       
        
        alert("Enter your password");
        document.registerform.password.focus();
        
}
    else if(document.getElementById("email").value==""){
        alert("Enter email");
        document.registerform.email.focus();

    }else if( inputtxt = document.getElementById("city").value==""){
        alert("Enter city");
        document.registerform.city.focus();

    }else if(document.getElementById("phno").value==""){
        alert("Enter Phone Number");
        document.registerform.phno.focus();

    }
    else{
        validateuser();
       //  alert("You are successfully registered ");
       

       
    }

}

function validateuser(){
    var uns=["Afrose","Kalaigar","Bhavya","sai"];
  var f=0;
  var uname1=document.getElementById("uname").value;
    // uname=prompt('Enter username');
 for(let i=0;i<uns.length;i++){
         if(uname1==uns[i])
        {
           
            f=1;
            break;
        }
                  
     }
     if(f==1){
          alert("username already exists");
     }
     else{
         document.registerform.submit();

    // document.write('welcome user');
    }
 }

