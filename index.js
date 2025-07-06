const myArray = [];

function renderTodo() {
    const main = document.querySelector('.main');
    let html = '';
    for (let i = 0; i < myArray.length; i++) {
        const getValue = myArray[i];
        const getHtml = `<p>${getValue} 
        <button 
            onclick="myArray.splice(${i}, 1)
            renderTodo()">Delete
        </button>
        </p> 
        `;
        html += getHtml;
    }
main.innerHTML = html;
}

function addFunction() {
    const text1 = document.querySelector('.input-text');
    const getText1 = text1.value;
    
    myArray.push(getText1)
    renderTodo();
    text1.value = '';
}