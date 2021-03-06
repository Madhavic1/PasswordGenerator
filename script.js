 //var passwordField = document.querySelector("#password");
  // Javascript validations to generate a new random password-->

  var clipBoardBtn =  document.getElementById("copy-to-clipboard");

function makePassword(length,characters) {
    var result           = '';
    //var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

 }

  function validatePasswordLength()
 {
     length = prompt("Enter the password length between 8 to 128 only");

     while((length < 8) || (length > 128) || isNaN(length))
     {
         if(length===null)
         {
             return length;
         }
         if(length < 8 || length > 128){
             length = prompt("Length must be between 8 and 128 characters. Please enter valid length!!");
         }

         if(isNaN(length))
         {
             length = prompt("Length must be a number in the range of 8 and 128 !!");
         }
     }
    return length;
 }

 function formTargetCharacterString(spcl_char,numeric_char,lower_char,upper_char)
 {
    var  num_char_string = "0123456789";
    var spcl_char_string = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
    var upper_case_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower_case_string = "abcdefghijklmnopqrstuvwxyz";
    var target_string = "";

    
  if(spcl_char === true)
  {
      target_string+=spcl_char_string;
  }

  if(numeric_char === true)
  {
      target_string+=num_char_string;
  }

  
  if(lower_char === true)
  {
      target_string+=lower_case_string;
  }

    
  if(upper_char === true)
  {
      target_string+=upper_case_string;
  }
  return target_string;

 }


 //copy Password to the clipboard

 function copyToClipboard() {

    event.preventDefault();
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the password: " + copyText.value);
  }



function generatePassword(){  // this is the main one i am using
    event.preventDefault();
   // passwordField.textContent = "";
    var spcl_char=false;
    var numeric_char=false;
    var lower_char=false;
    var upper_char=false;
    var currentPassword = null;


    var target_string = "";
    var password_length=0;


    //validate the password length
    password_length = validatePasswordLength();

    if(password_length!== null)
    { //if starts

        while((!spcl_char) && (!numeric_char) && (!lower_char) && (!upper_char)){
            spcl_char = confirm("Press OK, if you want special characters ??");
            numeric_char = confirm("Press OK, if you want numeric characters ??");
            lower_char = confirm("Press OK, if you want lower case  characters ??");
            upper_char = confirm("Press OK, if you want upper case characters ??");

            if((!spcl_char) && (!numeric_char) && (!lower_char) && (!upper_char))
            {
                alert("Choose atleast one of the character types");
            }
         }
        target_string = formTargetCharacterString(spcl_char,numeric_char,lower_char,upper_char);




        //(spcl_char_string+num_char_string+upper_case_string+lower_case_string);



        currentPassword =  makePassword(password_length,target_string);


        document.getElementById("password").textContent = currentPassword;

        document.getElementById("copy-to-clipboard").disabled = false;
        
       

    } //end of if


} //end of generatePassword function



