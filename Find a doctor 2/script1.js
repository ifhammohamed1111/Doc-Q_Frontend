var toggle=false;
var div = document.getElementById("setIcons");


 

const handleMenu = ()=>{
    console.log("ho")
 
    if(toggle===true){
        div.style.display="block";
         
        div.style.alignItems="center"; 
       
        toggle=false;
    }else{
        div.style.display="none";
        console.log(div)
        toggle=true;
    } 
}







