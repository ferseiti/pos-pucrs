// This js will populate the 01-calcula-idade.html page
// Header:
async function populateHeader() {
    document.title = 'Calcula Idade';
    let div1 = document.getElementById('div1');
    document.body.innerHTML = '';

    const titulo = document.createElement('h1');
    titulo.innerHTML = 'Calcula Idade';
    document.body.appendChild(titulo);
}