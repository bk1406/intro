let main=document.getElementById("main")
let btn=document.getElementById("btn")



btn.addEventListener('click',()=>{
    btn.remove();
   
    const att = document.createAttribute("class");
    att.value = "mainchange";
    document.getElementById("main").setAttributeNode(att);

    const node1 = document.createElement("h1");
    const textnode1 = document.createTextNode("Hii I am Budh Kishor");
    node1.appendChild(textnode1);
    document.getElementById("main").appendChild(node1);


// var img = document.createElement("img");
// img.src = "01.jpg";
// var src = document.getElementById("main");
// src.appendChild(img);

    // const node2 = document.createElement("img");
    // const textnode2 = document.createTextNode("01.jpg");
    // node2.appendChild(textnode2);
    // document.getElementById("main").appendChild(node2);

    console.log("hello")
});