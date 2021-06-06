const myBtn = document.getElementById('profile-button');


myBtn.addEventListener("mouseover", (e) => {
    myBtn.style.color = "white";
    myBtn.style.borderColor = "white";
});

myBtn.addEventListener("mouseout", (e) => {
    myBtn.style.color = "grey";
    myBtn.style.borderColor = "grey";
});

const IconLink = document.getElementsByClassName('profilelink');
const IconImg = document.getElementsByTagName('img');

// for (var i = 0; i < IconLink.length; i++) {
//     IconLink[i].addEventListener("mouseover", (e) => {
//         IconImg[i].style.borderColor = "white";
//     });
//     IconLink[i].addEventListener("mouseout", (e) => {
//         IconImg[i].style.borderColor = "transparent"
//     });
// }

IconLink[0].addEventListener("mouseover", (e) => {
    IconImg[0].style.borderColor = "white"
});
IconLink[0].addEventListener("mouseout", (e) => {
    IconImg[0].style.borderColor = "transparent"
});

IconLink[1].addEventListener("mouseover", (e) => {
    IconImg[1].style.borderColor = "white"
});
IconLink[1].addEventListener("mouseout", (e) => {
    IconImg[1].style.borderColor = "transparent"
});

IconLink[2].addEventListener("mouseover", (e) => {
    IconImg[2].style.borderColor = "white"
});
IconLink[2].addEventListener("mouseout", (e) => {
    IconImg[2].style.borderColor = "transparent"
});

IconLink[3].addEventListener("mouseover", (e) => {
    IconImg[3].style.borderColor = "white"
});
IconLink[3].addEventListener("mouseout", (e) => {
    IconImg[3].style.borderColor = "transparent"
});

IconLink[4].addEventListener("mouseover", (e) => {
    IconImg[4].style.borderColor = "white"
});
IconLink[4].addEventListener("mouseout", (e) => {
    IconImg[4].style.borderColor = "transparent"
});
IconLink[5].addEventListener("mouseover", (e) => {
    IconImg[5].style.borderColor = "white"
});
IconLink[5].addEventListener("mouseout", (e) => {
    IconImg[5].style.borderColor = "transparent"
});
IconLink[6].addEventListener("mouseover", (e) => {
    IconImg[6].style.borderColor = "white"
});
IconLink[6].addEventListener("mouseout", (e) => {
    IconImg[6].style.borderColor = "transparent"
});