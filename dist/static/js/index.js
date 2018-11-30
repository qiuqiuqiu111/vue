(function(){/* header-top */
    let main=document.getElementById('top').getElementsByTagName('ul')[0];
    var oLi=document.getElementById("top").getElementsByTagName("ul")[0].getElementsByTagName("li");
    
    
    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[index].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                }
                oLi[index].className="on";
            }
        })(i);
    }
})();

export {
    realconsole
}

