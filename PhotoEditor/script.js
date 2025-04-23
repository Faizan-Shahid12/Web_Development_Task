
//Global Variables

let bright = 100;
let satur = 100;
let invert = 0;
let gray = 0;

let blur1 = 0;
let sepia1 = 0;
let rotate1 = 0;
let flip1 = 0;
let flip2 = 0;

function select() 
{
    var fileInput = document.getElementById('fileInput');
    fileInput.click(); 

    fileInput.addEventListener('change', function(event)
    {
        var file = event.target.files[0];
        
        if (file) 
        {
            var imgUrl = URL.createObjectURL(file);

            document.getElementById('img123').src = imgUrl;
            
            clearfilter();
        }
        
    });

}

function move()
{   
    let val = document.getElementById('slider1').value;

    document.getElementsByClassName('value')[0].innerHTML = val + "%";

    if(document.getElementsByClassName('name')[0].innerHTML == "Brightness")
    {
        bright = val;
    }
    else if(document.getElementsByClassName('name')[0].innerHTML == "Saturation")
    {
        satur = val;
    }
    else if(document.getElementsByClassName('name')[0].innerHTML == "Inversion")
    {
        invert = val;
    }
    else if(document.getElementsByClassName('name')[0].innerHTML == "Grayscale")
    {
        gray = val;
    } 

    applyfilter();

}

function clearfilter()
{

    bright = 100;
    satur = 100;
    invert = 0;
    gray = 0;
    blur1 = 0;
    sepia1 = 0;
    rotate1 = 0;
    flip1 = 0;

    applyfilter();

    document.getElementsByClassName('name')[0].innerHTML = "Brightness"
    
    document.getElementById('slider1').value = bright; 
    
    document.getElementsByClassName('value')[0].innerHTML = bright + "%";

    document.getElementById('slider1').setAttribute('max', '200');

    ColorFilter();


    document.getElementsByClassName('name2')[0].innerHTML = "Blur"
    
    document.getElementById('slider2').value = blur1; 
    
    document.getElementsByClassName('value2')[0].innerHTML = blur1 + "px";

    document.getElementById('slider2').setAttribute('max', '100');

    ColorRotate();

    document.getElementsByClassName("Rotating")[0].style.display = 'none'

    document.getElementsByClassName("filter")[0].style.display = 'block';

    document.getElementById("open").innerHTML = "Open";

    document.getElementById("title2").innerText = "Rotate & Flip";

}

function applyfilter()
{
    let img = document.getElementById('img123');

    img.style.filter = "brightness(" + bright + "%) saturate(" + satur + "%) invert(" + invert + "%) grayscale(" + gray + "%) blur(" + blur1 + "px) sepia(" + sepia1 + "%)";

    if(flip1 == 0)
    {
        img.style.transform = "Rotate(" + rotate1 + "deg) scaleX(" + 1 + ")";
    }
    else if (flip1 == 1)
    {   
        img.style.transform = "Rotate(" + rotate1 + "deg) scaleX(" + -1 + ")";
    }
    else if(flip1 == 2)
    {
        img.style.transform = "Rotate(" + rotate1 + "deg) scaleY(" + -1 + ")";
    }
    else if (flip1 == 3)
    {
        img.style.transform = "Rotate(" + rotate1 + "deg) scaleX(" + -1 + ") scaleY(" + -1 + ")";
    }
}

function pressed(this1)
{
    ColorFilter();

    if(this1.id == "brightness")
    {
        document.getElementsByClassName('name')[0].innerHTML = "Brightness"
    
        document.getElementById('slider1').setAttribute('max', '200');

        document.getElementById('slider1').value = bright; 
        
        document.getElementsByClassName('value')[0].innerHTML = bright + "%";
    }
    else if(this1.id == "saturation")
    {
        document.getElementsByClassName('name')[0].innerHTML = "Saturation"

        document.getElementById('slider1').setAttribute('max', '200');

        document.getElementById('slider1').value = satur;

        document.getElementsByClassName('value')[0].innerHTML = satur + "%";

    }
    else if(this1.id == "inversion")
    {
        document.getElementsByClassName('name')[0].innerHTML = "Inversion"

        document.getElementById('slider1').setAttribute('max', '100');

        document.getElementById('slider1').value = invert;

        document.getElementsByClassName('value')[0].innerHTML = invert + "%";

    }
    else if(this1.id == "grayscale")
    {
        document.getElementsByClassName('name')[0].innerHTML = "Grayscale"
        
        document.getElementById('slider1').setAttribute('max', '100');

        document.getElementById('slider1').value = gray;
        
        document.getElementsByClassName('value')[0].innerHTML = gray + "%";

    }

    this1.style.color = "#fff";
    this1.style.backgroundColor = "#5372F0";
}

function Open()
{
    let label = document.getElementById("title2").innerText;

    if(label == "Filters")
    { 
        document.getElementsByClassName("rotate")[0].style.display = 'none'

        document.getElementsByClassName("filter")[0].style.display = 'block';
    
        document.getElementsByClassName("Rotating")[0].style.display = 'none';
        
        document.getElementsByClassName("rotate")[0].style.display = 'block';

        document.getElementById("open").innerHTML = "Open";

        document.getElementById("title2").innerText = "Rotate & Flip";

        document.getElementsByClassName("name")[0].innerHTML = "Brightness";

        document.getElementsByClassName("value")[0].innerHTML = 0 + "%";

        document.getElementById("slider1").value = 0;

        document.getElementById("slider1").setAttribute("max",200);
        
        ColorFilter();
    }
    else if (label == "Rotate & Flip")
    {
        
        document.getElementsByClassName("rotate")[0].style.display = 'none'

        document.getElementsByClassName("filter")[0].style.display = 'none';
    
        document.getElementsByClassName("Rotating")[0].style.display = 'block';
        
        document.getElementsByClassName("rotate")[0].style.display = 'block';
        
        document.getElementById("open").innerHTML = "Back";

        document.getElementById("title2").innerText = "Filters";
        
        document.getElementsByClassName("name2")[0].innerHTML = "Blur";

        document.getElementsByClassName("value2")[0].innerHTML = 0 + "px";

        document.getElementById("slider2").value = 0;

        document.getElementById("slider2").setAttribute("max",100);

        ColorRotate();

    }
}

function pressed1(this1)
{
    ColorRotate();

    this1.style.color = "#fff";
    this1.style.backgroundColor = "#5372F0";

    if(this1.id == "Blur")
    {
        document.getElementsByClassName('name2')[0].innerHTML = "Blur"
    
        document.getElementById('slider2').setAttribute('max', '100');

        document.getElementById('slider2').value = blur1; 
        
        document.getElementsByClassName('value2')[0].innerHTML = blur1 + "px";
    }
    else if(this1.id == "Sepia")
    {
        document.getElementsByClassName('name2')[0].innerHTML = "Sepia"

        document.getElementById('slider2').setAttribute('max', '100');

        document.getElementById('slider2').value = sepia1;

        document.getElementsByClassName('value2')[0].innerHTML = sepia1 + "%";

    }
    else if(this1.id == "Rotate")
    {
        document.getElementsByClassName('name2')[0].innerHTML = "Rotation"

        document.getElementById('slider2').setAttribute('max', '360');

        document.getElementById('slider2').value = rotate1;

        document.getElementsByClassName('value2')[0].innerHTML = rotate1 + "deg";

    }
    else if(this1.id == "Flip")
    {
        document.getElementsByClassName('name2')[0].innerHTML = "Flip"
        
        document.getElementById('slider2').setAttribute('max', '3');

        document.getElementById('slider2').value = flip1;
        
        document.getElementsByClassName('value2')[0].innerHTML = flip1;

    }

}

function move1()
{   
    let val = document.getElementById('slider2').value;

    document.getElementsByClassName('value2')[0].innerHTML = val + "%";

    if(document.getElementsByClassName('name2')[0].innerHTML == "Blur")
    {
        blur1 = val;

        document.getElementsByClassName('value2')[0].innerHTML = val + "px";
    }
    else if(document.getElementsByClassName('name2')[0].innerHTML == "Sepia")
    {
        sepia1 = val;
    }
    else if(document.getElementsByClassName('name2')[0].innerHTML == "Rotation")
    {
        rotate1 = val;
        
        document.getElementsByClassName('value2')[0].innerHTML = val + "deg";
    }
    else if(document.getElementsByClassName('name2')[0].innerHTML == "Flip")
    {
        flip1 = val;
        
        document.getElementsByClassName('value2')[0].innerHTML = val;
        
    } 

    applyfilter();

}

function ColorRotate()
{
    
    document.getElementById("Blur").style.color = "#6C757D";
    document.getElementById("Blur").style.backgroundColor = "#fff";

    document.getElementById("Sepia").style.color = "#6C757D";
    document.getElementById("Sepia").style.backgroundColor = "#fff";

    document.getElementById("Rotate").style.color = "#6C757D";
    document.getElementById("Rotate").style.backgroundColor = "#fff";

    document.getElementById("Flip").style.color = "#6C757D";
    document.getElementById("Flip").style.backgroundColor = "#fff";
}

function ColorFilter()
{
    
    document.getElementById("brightness").style.color = "#6C757D";
    document.getElementById("brightness").style.backgroundColor = "#fff";

    document.getElementById("saturation").style.color = "#6C757D";
    document.getElementById("saturation").style.backgroundColor = "#fff";

    document.getElementById("inversion").style.color = "#6C757D";
    document.getElementById("inversion").style.backgroundColor = "#fff";

    document.getElementById("grayscale").style.color = "#6C757D";
    document.getElementById("grayscale").style.backgroundColor = "#fff";
}

function save()
{
    let img = document.getElementById('img123');

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.filter = "brightness(" + bright + "%) saturate(" + satur + "%) invert(" + invert + "%) grayscale(" + gray + "%) blur(" + blur1 + "px) sepia(" + sepia1 + "%)";
   
    ctx.translate(canvas.width/2,canvas.height/2);

    ctx.rotate(rotate1 * (Math.PI / 180));

    if(flip1 == 0 || flip1 == 1)
    {
        ctx.scale(1,1);
    }
    else if(flip1 == 1)
    {
        ctx.scale(-1,1);
    }
    else if(flip1 == 2)
    {
        ctx.scale(1,-1);
    }
    else if(flip1 == 3)
    {
        ctx.scale(-1,-1);
    }

    ctx.drawImage(img, -img.naturalWidth/2, -img.naturalHeight/2);

    imageUrl = canvas.toDataURL('image/png'); 
    saveimg = document.createElement('a');
    saveimg.href = imageUrl;
    saveimg.download = "Image.png";
    saveimg.click();
    saveimg.remove();
}
