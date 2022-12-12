const screen = document.querySelector('.cal-screen');
const deletebutton = document.querySelector('[data-delete]');
const allclearbutton = document.querySelector('[data-allclear]');
const equalsbutton = document.querySelector('[data-equals]');
const numberbuttons = Array.from(document.querySelectorAll('[data-number]'));
const operationbuttons = Array.from(document.querySelectorAll('[data-operation]'));


numberbuttons.map(button =>{
    button.addEventListener('click',(e)=>{
       switch(e.target.innerText){
        default:
            screen.value += e.target.innerText;
       }
    })
})
operationbuttons.map(button =>{
    button.addEventListener('click',(e)=>{
       switch(e.target.innerText){
        default:
            screen.value += e.target.innerText;
       }
    })
})

allclearbutton.addEventListener('click',()=>{
    screen.value = '';
})

deletebutton.addEventListener('click',()=>{
    screen.value = screen.value.slice(0,-1)
})
equalsbutton.addEventListener('click',()=>{
    screen.value = eval(screen.value)
})

const modebutton = document.getElementById('toggle');
const calcbody = document.getElementsByClassName('grid-container')[0] ; 
const allbuttons = document.querySelectorAll('.cal-btn');
const body = document.querySelector('body');

function lightmode() {
    body.classList.add('lightmode'),
        screen.classList.add('lightscreen'),
        calcbody.classList.add('lightbodycalculator'),
        allbuttons.forEach(el =>{
        el.classList.add('lightbuttton')
    }) 
}
function darkmode() {
    body.classList.remove('lightmode'),
        screen.classList.remove('lightscreen'),
        calcbody.classList.remove('lightbodycalculator'),
        allbuttons.forEach(el =>{
        el.classList.remove('lightbuttton')
    }) 
}

modebutton.addEventListener('change',()=>{
      if (modebutton.checked) {
        lightmode();
      } else {
        darkmode();
      }

})
