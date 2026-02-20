function generate() {



Swal.fire({
  title: "Card Generated!",
  icon: "success",
  draggable: true
});




    const imageinput = document.getElementById("image").files;
    const nameinput = document.getElementById("name").value;
    const fatherinput = document.getElementById("father").value;
    const cnicinput = document.getElementById("cnic").value;
    const courseinput = document.getElementById("course").value;

   let m = Math.floor(Math.random()*60000)




    let  maincard = document.getElementById("main-card");
    let box = document.createElement("div");
    let pfp = document.createElement("img");
    let h1 = document.createElement("h1");
    h1.className = "name";
    let h2 = document.createElement("h1");
    let h3 = document.createElement("h1");
    let h4 = document.createElement("h1");
    let h5 = document.createElement("img");
    let h6 = document.createElement("h1");
    h4.className= "course";
    let logo = document.createElement("img");
    logo.className = "logo"
    box.className = "box";
    box.id = "box1";
    logo.src = "https://lms.saylanimit.com/logo.png";
    logo.width =150;
    
   if (imageinput && imageinput[0]) {
    pfp.src = URL.createObjectURL(imageinput[0]);
}
pfp.width = 100;
pfp.style.marginLeft = "110px";
pfp.style.border = "4px solid gray";
    
    h1.innerText =  nameinput
    h2.innerText =  fatherinput
    h3.innerText =  cnicinput
    h4.innerText =  courseinput
    h5.innerText =  imageinput
   h6.innerText = "Roll No: " + m;
   h5.className = "pfp"
   h6.className = "roll";
    maincard.appendChild(box);
    box.appendChild(logo);
    box.appendChild(pfp);
    box.appendChild(h1);
    //box.appendChild(h2);//
    // box.appendChild(h3);
    box.appendChild(h4);
    box.appendChild(h5);
    box.appendChild(h6);

}

   


    








