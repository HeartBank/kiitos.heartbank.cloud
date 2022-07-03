window.onload = async () => {
    console.log(await testLogin1());
    console.log(await testLogin2());
    console.log(await testLogin3());
}

async function testLogin1() {
    const response = await fetch('/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({test: "hi"})
    });
      
    return response.json();
}

async function testLogin2() {
    const response = await fetch('/', {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({test: "hi"})
    });
      
    return response.json();
}

async function testLogin3() {
    const response = await fetch('https://localhost:8080/login', {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({test: "hi"})
    });
      
    return response.json();
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B5Z3BX0LMJ');