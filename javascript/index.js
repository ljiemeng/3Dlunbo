window.onload=function(){
	var elx =document.getElementById("box7");
	var els=document.getElementsByClassName("box");
	var img=["1.jpeg","2.jpeg","3.png","4.jpeg","5.jpeg"];
	els[0].style.backgroundImage="url(../image/1.jpeg)"
	for(i=0;i<els.length;i++){
		els[i].style.backgroundImage='url(./image/'+img[i]+')';
	}
	var els=document.getElementsByClassName("box");

    var data=[
    		{translateX:"-500px",translateZ:"-400px"},
    		{translateX:"-230px",translateZ:"-200px"},
    		{translateX:"0px",translateZ:"0px"},
    		{translateX:"230px",translateZ:"-200px"},
    		{translateX:"500px",translateZ:"-400px"}

    ],
    indexx=[1,2,5,2,1],
    draw=function(){
    	 for(var i=0;i<els.length;i++){
    	 els[i].style.webkitTransform="translate3d("+data[i].translateX+",0,"+data[i].translateZ+")"
    	 els[i].style.zIndex=indexx[i]
    	}
    	data.unshift(data.pop());
    	indexx.unshift(indexx.pop());
    };
    draw();
 	setInterval(draw,2000);
}