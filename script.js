const menuButton = document.querySelector('.bars');
const menuList = document.querySelector('.menubar');
const showBtn = document.getElementById('showMoreBtn');
const showMore = document.getElementById('showmore');
const showlessBtn = document.getElementById('showLessBtn');


const openPopup =()=>{
    if(menuList.style.display === "block"){
        menuList.style.display="none" 
     } else{
        menuList.style.display="block" 
     }
}; 

menuButton.addEventListener('click',()=>{
    openPopup();
});

// showmore 

const showMorediv =()=>{
    showMore.style.display = "block";
        showBtn.style.display="none"; 
    
}; 

showBtn.addEventListener('click',()=>{
    showMorediv();
});

//showless

const showlessdiv =()=>{
    showMore.style.display = "none";
        showBtn.style.display="block"; 
        
    
}; 

showlessBtn.addEventListener('click',()=>{
    showlessdiv();
});

