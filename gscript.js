var coursenum=0.0;
var totalgrade=0.0;

document.getElementById("calculate").onclick=function(){calculation();};


function calculation(){
	var ind=document.getElementById("grade").value;	
	var individualgrade=Number(ind);
    coursenum=coursenum+1.0;
    totalgrade=totalgrade+individualgrade;
    var aver=totalgrade/coursenum;
    aver=Math.round(aver*100)/100;
    document.getElementById("num").style.display="block";
    document.getElementById("course").innerHTML=coursenum;

    document.getElementById("average").style.display="block";
    document.getElementById("av").innerHTML=aver;
}
