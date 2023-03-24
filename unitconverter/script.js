var feet =document.getElementById('feet')
var inch =document.getElementById('inch')
feet.addEventListener('input',function()
{
    let f=this.value;
    let i=f*12;
    inch.value=i;
})

inch.addEventListener('input',function()
{
    let i=this.value;
    let f=i/12;

    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    feet.value=f;
})

//app1
var cm =document.getElementById('cm')
var inch1 =document.getElementById('inch1')
cm.addEventListener('input',function()
{
    let c1=this.value;
    let i1=c1*0.393700787;
    
    if(!Number.isInteger(i1))
    {
        i1=i1.toFixed(2);
    }
    inch1.value=i1;
})

inch1.addEventListener('input',function()
{
    
    let i1=this.value;
    let c1=i1*2.54;

    if(!Number.isInteger(c1))
    {
        c1=c1.toFixed(5);
    }
    cm.value=c1;
})

//app2
var feet2 =document.getElementById('feet2')
var cm2=document.getElementById('cm2')
feet2.addEventListener('input',function()
{
    let f1=this.value;
    let cm=f1*30.48;
    
    if(!Number.isInteger(cm))
    {
        cm=cm.toFixed(2);
    }
    cm2.value=cm;
})

cm2.addEventListener('input',function()
{
    let cm=this.value;
    let f1=cm/30.48;

    if(!Number.isInteger(f1))
    {
        f1=f1.toFixed(2);
    }
    feet2.value=f1;
})


//app3
var km =document.getElementById('km')
var cm3=document.getElementById('cm3')
km.addEventListener('input',function()
{
    let k1=this.value;
    let cm4=k1*100000;
    
    if(!Number.isInteger(cm4))
    {
        cm4=cm4.toFixed(5);
    }
    cm3.value=cm4;
})

cm3.addEventListener('input',function()
{
    let cm4=this.value;
    let k1=cm4/100000;

    if(!Number.isInteger(k1))
    {
        k1=k1.toFixed(5);
    }
    km.value=k1;
})
