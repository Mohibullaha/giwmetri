document.getElementById('triangle').addEventListener('click', function(){
const triangleFieldElement = document.getElementById('triangle-input').value;
const triangleFieldElement2 = document.getElementById('triangle-input2').value;
const cm = document.getElementById('tri');
    const b = document.getElementById('b').innerText = triangleFieldElement;
    const h = document.getElementById('h').innerText = triangleFieldElement2;
    const total = 0.5 * parseInt(b) * parseInt(h);
    cm.innerText=total;
})

// rectangle

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const triangleFieldElement = document.getElementById('w').value;
    const triangleFieldElement2 = document.getElementById('l').value;
    
    
    
    const b = document.getElementById('id-w').innerText = triangleFieldElement;
    const h = document.getElementById('id-l').innerText = triangleFieldElement2;
    
    const total =  parseInt(b) * parseInt(h);
    
    const cm = document.getElementById('rect');
    cm.innerText=total;
    })


// parall


document.getElementById('parallelogram').addEventListener('click', function(){
    const triangleFieldElement = document.getElementById('b-2').value;
    const triangleFieldElement2 = document.getElementById('h-2').value;
    
    console.log(triangleFieldElement)
    console.log(triangleFieldElement2)
    
    const b = document.getElementById('id-b').innerText = triangleFieldElement;
    const h = document.getElementById('id-h').innerText = triangleFieldElement2;

    const total =  parseInt(b) * parseInt(h);
    console.log(total)
    const cm = document.getElementById('par');
    cm.innerText = total;
    })



// rhomb

document.getElementById('rhombus').addEventListener('click', function(){
    const triangleFieldElement = document.getElementById('d-1').value;
    const triangleFieldElement2 = document.getElementById('d-2').value;
    
    const b = document.getElementById('id-d').innerText = triangleFieldElement;
    const h = document.getElementById('id-d1').innerText = triangleFieldElement2;
    
    const total =0.5 *  parseInt(b) * parseInt(h);
    
    const cm = document.getElementById('rho');
    cm.innerText=total;
    })


// penta


document.getElementById('pantagon').addEventListener('click', function(){
    const triangleFieldElement = document.getElementById('p').value;
    const triangleFieldElement2 = document.getElementById('n').value;
    
    
    console.log(triangleFieldElement2)
    const b = document.getElementById('id-p').innerText = triangleFieldElement;
    const h = document.getElementById('id-k').innerText = triangleFieldElement2;
    console.log(h)
    const total =  parseInt(b) * parseInt(h);
    
    const cm = document.getElementById('pen');
    cm.innerText=total;
    })


// ellip

document.getElementById('ellipse').addEventListener('click', function(){
    const triangleFieldElement = document.getElementById('a-1').value;
    const triangleFieldElement2 = document.getElementById('b-1').value;
    
    const piField = 3.14;
    const pi = piField.toFixed(2);
    
    const b = document.getElementById('id-w').innerText = triangleFieldElement;
    const h = document.getElementById('id-l').innerText = triangleFieldElement2;
    
    const total = pi *  parseInt(b) * parseInt(h);
    
    const cm = document.getElementById('elli');
    cm.innerText=total;
    })
  document.getElementById('blog').addEventListener('click',function(){
    window.location.href ='blog.html';
})
    