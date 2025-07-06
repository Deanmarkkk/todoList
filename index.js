const mainArray = [{
                name: 'Make dinner',
                date: '12:06'
            },
            {
                name: 'Wash dishes',
                date: '08:44'
            }
];

const container = document.querySelector('.container');
addFunction()
function addFunction() {
    let html = '';
    mainArray.forEach(function (value, i) {
        let getValue = `
        <div class="element"><input type="checkbox" onchange="checkFunction(this)" class="js-check"></div>
        <div class="element line">${value.name}</div>
        <div class="element line1">${value.date}</div>
        <button class="btnDelete element" onclick="mainArray.splice(${i}, 1); addFunction()">Delete</button>
        `
        html += getValue;
    });
container.innerHTML = html;
return html;
};

function addInput() {
    const name = document.querySelector('.js-input');
    const getName = name.value;
    const date = document.querySelector('.js-date');
    const getDate = date.value;

    if (!getName || !getDate) {
        alert('Please enter the empty field.');
    } else {
         mainArray.push({name: getName, date: getDate})
        addFunction()
        name.value = ''; 
        date.value = '';
    };  
};

function checkFunction(checkbox) {
    const line = document.querySelector('.line');
    const line1 = document.querySelector('.line1');

    if (checkbox.checked) {
        line.style.textDecoration = 'line-through';
        line1.style.textDecoration = 'line-through';
        line.style.opacity = '0.6';
        line1.style.opacity = '0.6';
    }
    else {
        line.style.textDecoration = 'none';
        line1.style.textDecoration = 'none';
        line.style.opacity = '1';
        line1.style.opacity = '1';
    }
}