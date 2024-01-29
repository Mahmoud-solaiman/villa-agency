//Navigation hamburger menu
const container = document.querySelector('.hamburger-menu');
const topd = document.querySelector('.top');
const mid = document.querySelector('.mid');
const bottom = document.querySelector('.bottom');
const navList = document.querySelector('.nav-list');

container.addEventListener('click', ()=>{
    topd.classList.toggle('top-clicked');
    mid.classList.toggle('mid-clicked');
    bottom.classList.toggle('bottom-clicked');
    navList.classList.toggle('hide');
});

//Banner slide
const rightArrow = document.querySelector('.arrow-right');
const leftArrow = document.querySelector('.arrow-left');
let slider = 0;
const place = document.querySelector('.place');
const span = document.querySelector('.span');
const shortIntro = document.querySelector('.short-intro');
const banner = document.getElementById('banner');
const bannerInfo = [
    {
        place:'Toronto, <span>Canada<span>',
        shortIntro: 'HURRY! GET THE BEST VILLA FOR YOU',
        bannerSrc:'images/banner-01.jpg'
    },
    {
        place:'Melbourne, <span>Australia<span>',
        shortIntro: 'BE QUICK! GET THE BEST VILLA IN TWON',
        bannerSrc:'images/banner-02.jpg'
    },
    {
        place:'Miami, <span>South Florida<span>',
        shortIntro: 'ACT NOW GET THE HIGHEST LEVEL PENTHOUSE',
        bannerSrc:'images/banner-03.jpg'
    }
];

function changeInfo(){
    place.innerHTML = bannerInfo[slider].place;
    shortIntro.textContent = bannerInfo[slider].shortIntro;
    banner.style.backgroundImage = `url('${bannerInfo[slider].bannerSrc}')`;
}

rightArrow.addEventListener('click', ()=>{
    slider++;
    if(slider === bannerInfo.length){
        slider = 0;
        changeInfo();
    } else {
        changeInfo();
    }
});

leftArrow.addEventListener('click', ()=>{
    slider--;
    if(slider === -1){
        slider = bannerInfo.length-1;
        changeInfo();
    } else {
        changeInfo();
    }
});

//Extra Info about the property
const usefulBtn = document.querySelector('.useful-links');
const usefulInfo = document.querySelector('.useful-links-info');
const howWorkBtn = document.querySelector('.how-work');
const howWorkInfo = document.querySelector('.how-work-info');
const whyBtn = document.querySelector('.why');
const whyInfo = document.querySelector('.why-info');

usefulBtn.addEventListener('click', ()=>{
    usefulBtn.classList.toggle('buttons-clicked');
    usefulInfo.classList.remove('remove');
    usefulInfo.classList.toggle('buttons-clicked-info');
    howWorkInfo.classList.add('remove');
    whyInfo.classList.add('remove');
    whyBtn.classList.remove('buttons-clicked');
    howWorkBtn.classList.remove('buttons-clicked');
});

howWorkBtn.addEventListener('click', ()=>{
    howWorkBtn.classList.toggle('buttons-clicked');
    howWorkInfo.classList.remove('remove');
    howWorkInfo.classList.toggle('buttons-clicked-info');
    whyInfo.classList.add('remove');
    usefulInfo.classList.add('remove');
    usefulBtn.classList.remove('buttons-clicked');
    whyBtn.classList.remove('buttons-clicked');
});

whyBtn.addEventListener('click', ()=>{
    whyBtn.classList.toggle('buttons-clicked');
    whyInfo.classList.remove('remove');
    whyInfo.classList.toggle('buttons-clicked-info');
    howWorkInfo.classList.add('remove');
    usefulInfo.classList.add('remove');
    usefulBtn.classList.remove('buttons-clicked');
    howWorkBtn.classList.remove('buttons-clicked');
});

//The header to position absolute
const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    const pageYScroll = window.pageYOffset;
    if(pageYScroll >= 250){
        header.classList.add('header-scrolled');
        navList.classList.add('curved');
    } else {
        header.classList.remove('header-scrolled');
        navList.classList.remove('curved');
    }
});

//Statistics counters 
const StatsCounters = document.querySelectorAll('.stat-number');
window.addEventListener('load', ()=>{
    let counterBuilding = 0;
    let counterYear = 0;
    let counterAwwards = 0;
    statsFunction(counterBuilding, 0, 34);
    statsFunction(counterYear, 1, 12);
    statsFunction(counterAwwards, 2, 24);
});

//Statistics function
function statsFunction(counter, element, condition){
    const awwardsInterval = setInterval(()=>{
        counter++;
        StatsCounters[element].textContent = counter;
        if(counter === condition){
            clearInterval(awwardsInterval);
        }
    }, 10);
}

//Deals properties buttons
const appartmentBtn = document.querySelector('.appartment-btn');
const villaBtn = document.querySelector('.villa-btn');
const penthouseBtn = document.querySelector('.penthouse-btn');

function defaultBackground(clickedBtn, other1, other2){
    clickedBtn.addEventListener('click', ()=>{
        if(clickedBtn.classList.contains('default')){

        } else {
            clickedBtn.classList.add('default');
            other1.classList.remove('default');
            other2.classList.remove('default');
        }
    });
}
defaultBackground(appartmentBtn, villaBtn, penthouseBtn);
defaultBackground(villaBtn, appartmentBtn, penthouseBtn);
defaultBackground(penthouseBtn, villaBtn, appartmentBtn);

//Updating the property info
const flatSpace = document.getElementById('flat-space');
const floorNum = document.getElementById('floor-number');
const roomsNum = document.getElementById('rooms-number');
const parkingAvailable = document.getElementById('parking-available');
const paymentProcess = document.getElementById('payment-process');
const propertyImg = document.getElementById('property-img');
const extraTitle = document.getElementById('extra-title');
const extraPara = document.getElementById('extra-para');
const propertyInfo = [
    {
        details:[
            {
                flatSpace:'185 m2',
                floorNum:'26th',
                numOfRooms:4,
                parkingAvailable:'Yes',
                paymentProcess:'Bank'
            }   
        ],
        imgSrc:'images/deal-01.jpg',
        extraInfoTitle:'Extra Info About Property',
        extraInfoPara:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
        <br><br>
        When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.`
    },
    {
        details:[
            {
                flatSpace:'250 m2',
                floorNum:'26th',
                numOfRooms:5,
                parkingAvailable:'Yes',
                paymentProcess:'Bank'
            }   
        ],
        imgSrc:'images/deal-02.jpg',
        extraInfoTitle:'Detail Info About Villa',
        extraInfoPara:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
        <br><br>
        Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.`
    },
    {
        details:[
            {
                flatSpace:'320 m2',
                floorNum:'34th',
                numOfRooms:6,
                parkingAvailable:'Yes',
                paymentProcess:'Bank'
            }   
        ],
        imgSrc:'images/deal-03.jpg',
        extraInfoTitle:'Extra Info About Penthouse',
        extraInfoPara:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
        <br><br>
        Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.`
    }
];

function updateProperty(propertyIndex){
    flatSpace.textContent = propertyInfo[propertyIndex].details[0].flatSpace;
    floorNum.textContent = propertyInfo[propertyIndex].details[0].floorNum;
    roomsNum.textContent = propertyInfo[propertyIndex].details[0].numOfRooms;
    parkingAvailable.textContent = propertyInfo[propertyIndex].details[0].parkingAvailable;
    paymentProcess.textContent = propertyInfo[propertyIndex].details[0].paymentProcess;
    propertyImg.src = propertyInfo[propertyIndex].imgSrc;
    extraTitle.textContent = propertyInfo[propertyIndex].extraInfoTitle;
    extraPara.innerHTML = propertyInfo[propertyIndex].extraInfoPara;
}

appartmentBtn.addEventListener('click', ()=>{
    updateProperty(0);
});

villaBtn.addEventListener('click', ()=>{
    updateProperty(1);
});

penthouseBtn.addEventListener('click', ()=>{
    updateProperty(2);
})