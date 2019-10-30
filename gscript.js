var coursenum=0.0;
var totalgrade=0.0;

document.getElementById("calculate").onclick=function(){calculation();};
document.getElementById("add").onclick=function(){addgrade();};
document.getElementById("delete").onclick=function(){clearout()};

function calculation(){
    if (coursenum==0.0)
        aver=0.0;
    else
        var aver=totalgrade/coursenum;
    document.getElementById("num").style.display="block";
    document.getElementById("course").innerHTML=coursenum;
    document.getElementById("average").style.display="block";
    document.getElementById("av").innerHTML=aver;
}

function addgrade(){
    console.log("hello");
    var ind=document.getElementById("grade").value;
    var mingzi=document.getElementById("coursenamed").value;
    var chengji="";
    if (ind==0.0)
        chengji="F"
    else if (ind==1.0)
        chengji="D"
    else if (ind==1.7)
        chengji="C-"
    else if (ind==2.0)
        chengji="C"
    else if (ind==2.3)
        chengji="C+"
    else if (ind==2.7)
        chengji="B-"
    else if (ind==3.0)
        chengji="B"
    else if (ind==3.3)
        chengji="B+"
    else if (ind==3.7)
        chengji="A-"
    else if (ind==4.0)
        chengji="A"
    else if (ind==4.3)
        chengji="A+"

    var item=chengji;
    var newcredithours=document.getElementById("credithours").value;
    var a=document.createTextNode("Grade=");
    var text=document.createTextNode(item);
    var space=document.createTextNode("    Credit Hours=");
    var spacetwo=document.createTextNode("  Course=");
    var newcred=document.createTextNode(newcredithours);
    var ke=document.createTextNode(mingzi);
    var newItem=document.createElement("li");
    space.innerHTML="\t";
    newItem.appendChild(a);
    newItem.appendChild(text);
    newItem.appendChild(space);
    newItem.appendChild(newcred);
    newItem.appendChild(spacetwo);
    newItem.appendChild(ke);
    document.getElementById("listofgrades").appendChild(newItem);
    if (document.getElementById("credithours").value==6.0){
        coursenum+=2.0;
        totalgrade+=2*Number(ind);
    }else{
        coursenum+=1.0;
        totalgrade+=Number(ind);
    }
}

function clearout(){
    anode=document.getElementById("listofgrades");
    while (anode.firstChild){
        anode.removeChild(anode.firstChild);
    }
    coursenum=0.0;
    totalgrade=0.0;
}
