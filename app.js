let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let fname = document.querySelector("#Fnamer");
    let lname = document.querySelector("#Lname");
    let mail = document.querySelector("#Mail");
    let pass = document.querySelector("#Pass");

    console.log(Fname.value);
    console.log(Lname.value);
    console.log(Mail.value);
    console.log(Pass.value);
});