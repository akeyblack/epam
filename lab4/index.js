let image = document.getElementById("image");
let form = document.getElementById("form");
let width = form.elements["width"];
let height=form.elements["height"];
let borderColor=form.elements["color"];
let borderWidth=form.elements["thickness"];
let alt=form.elements["alt"];
let widthB = false;
let heightB = false;
let borderWidthB = false;
let borderColorB = false;
let altB = false;

width.addEventListener('input', () =>
{
    if(width.value>1000 || width.value<100 || isNaN(width.value)) 
    {
        width.style.border= "2px red solid";
        widthB = false;
    }
    else
    {
        width.style.border="";
        widthB = true;
    }
});
height.addEventListener('input', () =>
{
    if(height.value>1000 || height.value<100 || isNaN(height.value)) 
    {
        height.style.border= "2px red solid";
        heightB=false;
    }
    else
    {
        height.style.border="";
        heightB=true;
    }
});
borderWidth.addEventListener('input', () =>
{
    if(borderWidth.value>100 || borderWidth.value<0 || isNaN(height.value))
    {
        borderWidth.style.border= "2px red solid";
        borderWidthB=false;
    }
    else
    {
        borderWidthB=true;
        borderWidth.style.border="";
    }
});
borderColor.addEventListener('input', () =>
{
    if(borderColor.value =="")
    {
        borderColor.style.border= "2px red solid"
        borderColorB=false;
    }
    else
    {
        borderColorB=true;
        borderColor.style.border="";
    }
});
alt.addEventListener('input', () =>
{
    if(!/^[A-Za-z0-9]*$/.test(alt.value) || alt.value =="")
    {
        alt.style.border= "2px red solid";
        altB=false;
    }
    else
    {
        alt.style.border="";
        altB=true;
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if(widthB && heightB && borderColorB && borderWidthB && altB)
    {
        image.style.width=width.value + "px";
        image.style.height=height.value + "px";
        image.style.borderColor=borderColor.value;
        image.style.borderWidth=thickness.value + "px";
        image.alt=alt.value;
    }
    else
    {
        if(!widthB)
            width.style.border= "2px red solid";
        if(!heightB)
            height.style.border= "2px red solid";
        if(!borderWidthB)
            borderWidth.style.border= "2px red solid";
        if(!borderColorB)
            borderColor.style.border= "2px red solid";
        if(!altB)
            alt.style.border= "2px red solid";
    }
});