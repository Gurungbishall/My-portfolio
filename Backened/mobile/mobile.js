if(window.innerWidth <= 991){
    
    const btn = document.getElementById("list");
    
    btn.addEventListener("click", () =>{
     const bar_list = document.getElementById("bar_list");
        
     if(bar_list.style.display === "none"){
        bar_list.style.display = "flex";
     }else{
        bar_list.style.display = "none";
     }
  })

}