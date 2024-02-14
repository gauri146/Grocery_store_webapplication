function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

    function validateForm() {
        // event.preventDefault();
        
        var returnval=true;
        // returnval=myform.redirect();
        // var mysub = document.forms['myform']['fsubmit'].value;
        // mysub = true;
        clearErrors();
        var name = document.forms['myForm']["fname"].value;
        if(name.length < 5) {
            seterror("name", "*Length of name is too short");
            returnval = false;
        }
        if (name.length == 0){
            seterror("name", "*Length of name cannot be zero!");
            returnval = false;
        }
        emailRg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = document.forms['myForm']["femail"].value;
        var emailR = emailRg.test(email);
        if (emailR == false){
        seterror("email", "*enter valid email");
        returnval = false;
        }
        var phone=document.forms['myForm']["fphone"].value;
        if(phone.length != 10){
            seterror("phone","*enter only 10 number")
            returnval=false;
        }
        var pass=document.forms['myForm']["fpass"].value;
        if(pass.length < 6){
            seterror("pass","*password should be long")
            returnval=false;
        }
        var cpass=document.forms['myForm']["fcpass"].value;
        if(cpass != pass){
            seterror("cpass","password can not be match!")
            returnval = false;
        }
        var Lname=document.forms['myform']["f_name"].value;
        if(Lname != name){
            seterror("Lname","enter register username a")
            returnval=false
        }

        var Lpass=document.forms['myform']["f_pass"].value;
        if(Lpass != pass){
            seterror("Lname","enter register username a")
            returnval=false
        }
      return returnval;
        // return mysub;
    } 
    function redirect(){
        window.location.href="mainpag.html";
    }
