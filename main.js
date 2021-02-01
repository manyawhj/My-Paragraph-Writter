var inputs=[];
function getpara1(){
    for(var P=1;P<=6;P++)
    {
     inputs.push(document.getElementById("para_1_no:"+P).value)
    }
    document.getElementById("para_1").innerHTML=inputs.join(". ");
}
var inputs1=[];
function getpara2(){
    for(var i=1;i<=6;i++)
    {
     inputs1.push(document.getElementById("para_2_no:"+i).value)
    }
    document.getElementById("para_2").innerHTML=inputs1.join(". ");
}
function change(){
    document.getElementById("para_1").style.fontFamily="Impact,Charcoal,sans-serif";
    document.getElementById("para_2").style.fontFamily="Impact,Charcoal,sans-serif";
}