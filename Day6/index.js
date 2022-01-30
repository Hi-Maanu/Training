let  popup =document.getElementById("btn");
let flag=0;
 
popup.addEventListener("click",()=>{
        if(flag==0){
            flag++;
        let page2button = document.createElement("button");
        page2button.innerHTML="Click Me Now ";
        document.getElementById("btn").appendChild(page2button);

        window.history.pushState(history.state,document.title,window.location.href);
        
        window.onpopstate = function (){
        {
            document.getElementById("btn").removeChild(page2button);
            
            flag=0;
        }
        
    }

    page2button.addEventListener("click",function(){
        history.go(-1);
        
    })
}
});