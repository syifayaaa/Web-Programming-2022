function login(){
    let user = document.getElementById("username").value;
    user = user.toLowerCase();
    let pswd = document.getElementById("pass").value;
    pswd = pswd.toLowerCase();
    // let w = window.open("text/html","replace");
    

    if (user == "syifa" && pswd == "syifa123") {
        alert("login berhasil")
        
        document.open("text/html","replace");
        document.write("<h1>Login Sukses!</h1>");
        document.close();
    } else if (user == "" && pswd == "") {
        alert("User Name dan Password tidak boleh kosong")
    }
    else {
        alert("login gagal")
    }
    

}