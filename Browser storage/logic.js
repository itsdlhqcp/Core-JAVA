class Landing {
    DATABASE = {
        "milan": { username: "Milan", password: "milan123" },
        "Anu": { username: "Anu", password: "anu123" },
        "Karthik": { username: "Karthik", password: "karthik123" },
        "Jenni": { username: "Jenni", password: "jeni123" }
    }

    save() {
        localStorage.setItem("DATABASE", JSON.stringify(this.DATABASE));
    }

    getData() {
        // Corrected key and handling null response
        this.DATABASE = JSON.parse(localStorage.getItem("DATABASE")) || {};
    }

    register() {
        console.log('inside register function');
        console.log(reguser.value);
        console.log(regPswd.value);
        if (reguser.value == "" || regPswd.value == "") {
            alert("Please fill in all fields");
        } else {
            if (reguser.value in this.DATABASE) {
                alert("Username already exists");
            } else {
                this.DATABASE[reguser.value] = { username: reguser.value, password: regPswd.value };
                console.log(this.DATABASE);
                alert('Registration successfully');
                this.save();
                // js navigation
                window.location = "login.html";
            }
        }
    }

            login(){
                console.log('inside login function');
                console.log(loginUser.value);
                console.log(loginPswd.value);
                if(loginUser.value==""||loginPswd.value==""){
                    alert("Please fill in all fields");
                }else{
                    this.getData()
                    if(loginUser.value in this.DATABASE){
                         if(this.DATABASE[loginUser.value].password == loginPswd.value){
                            localStorage.setItem("user", loginUser.value)
                            alert('Login successfully');
                            window.location = "home.html"
                         }else{
                            alert('Invalid password or username')
                         }
                }else{
                    alert("User does not exist");
                 }
              }
            }
}

const obj = new Landing();
obj.getData();
