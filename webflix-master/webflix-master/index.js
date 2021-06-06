const nextBtn1 = document.getElementById('plus1');
const nextBtn2 = document.getElementById('plus2');
const nextBtn3 = document.getElementById('plus3');

const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');

const login = document.getElementById('log');

let idx=0;
let idx1=0;
let idx2=0;

nextBtn1.addEventListener('click', (e) => {
    if(idx==0){
        item3.style.display = "none";
        item4.style.display = "none";
        item2.style.display = "block";
        idx=1;
        idx1=0;
        idx2=0;
    }else if(idx==1){
        item2.style.display = "none";
        idx=0;
    }
});
nextBtn2.addEventListener('click', (e) => {
    if(idx1==0){
        item2.style.display = "none";
        item4.style.display = "none";
        item3.style.display = "block";
        idx1=1;
        idx=0;
        idx2=0;
    }else if(idx1==1){
        item3.style.display = "none";
        idx1=0;
    }
});
nextBtn3.addEventListener('click', (e) => {
    if(idx2==0){item2.style.display = "none";
        item3.style.display = "none";
        item4.style.display = "block";
        
        idx2=1;
        idx1=0;
        idx=0;
    }else if(idx2==1){
        item4.style.display = "none";
        idx2=0;
    }
});