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

    const node2 = document.createElement("h3");
    const textnode2 = document.createTextNode("I am curently studying in IT GGV in 3rd year");
    node2.appendChild(textnode2);
    document.getElementById("main").appendChild(node2);


    const node3 = document.createElement("h4");
    const textnode3 = document.createTextNode(" BUT I HAVE NO INTAREST IN ENGNEERING LIFE ");
    node3.appendChild(textnode3);
    document.getElementById("main").appendChild(node3);

    console.log("hello")
});