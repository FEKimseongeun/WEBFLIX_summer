const account = document.getElementsByClassName('jinaccount');
const search = document.getElementsByClassName('jinsearch');
const box = document.getElementsByClassName('box');
const submaster = document.getElementsByClassName('submaster');
const jinbox = document.getElementsByClassName('jinbox');



account[0].addEventListener("mouseenter", (e) => {
   
    
    e.preventDefault();
    submaster[0].style.display ='block';


});


submaster[0].addEventListener("mouseenter", (e) => {
   
    
    e.preventDefault();
    submaster[0].style.display ='block';


});

submaster[0].addEventListener("mouseleave",  (e) => {
   
    
    e.preventDefault();
    submaster[0].style.display ='none';


});


// jinbox[0].addEventListener("click", (e) => {
//     e.preventDefault();
    

//     if(box[0].style.display == 'block'){

//         box[0].style.display='none';
//     }else{
//         box[0].style.display='block';
        

//     }

   

// });






