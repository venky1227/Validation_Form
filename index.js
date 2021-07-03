
        function validate()
        {
            let username = document.getElementById("uname");
            let password = document.getElementById("pass");
            var a = 0, rdbtn=document.getElementsByName("gender");
            let address = document.getElementById("address");
            let age = document.getElementById("age");


            for(i=0;i<rdbtn.length;i++) {
            if(rdbtn.item(i).checked == false) {
            a++;
            }
            }
            if(a == rdbtn.length) {
            alert("Please select your gender");
            return false;
            } 

            if (username.value.trim() == "" || password.value.trim() =="" || password.value.trim().length<5){              
                if(username.value.trim() =="")
                {
                
                    username.style.border = "solid 3px red";
                    document.getElementById("lbluser").style.visibility="visible";
                    return false;
                    
                
                }
                else {
                    username.style.border = "solid 1px black";
                    document.getElementById("lbluser").style.visibility="hidden";
                    
                }
                if(password.value.trim()=="")
                {
                    alert("Blank Password");
                    pass.style.border = "solid 3px red";
                    document.getElementById("lbluser1").style.visibility="visible";
                    return false;
                    
                }
                else(password.value.trim().length<5)
                {
                    
                    pass.style.border = "solid 1px red";
                    document.getElementById("lbluser2").style.visibility="visible";
                    return false;
                    
                }
                
    
            }           
            else{
                return true;
            }
            
        }