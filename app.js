// set initial count
let count=0;

//select value and buttons
const value=document.querySelector('#value');
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles=e.target.classList;
        if(styles.contains('decrease')){
            count--;
            value.textContent=count;

        }
        else if(styles.contains('increase')){
            count++;
            value.textContent=count;
        }
        else if(styles.contains('reset')){
            count=0;
            value.textContent=count;
        }
    });
});


