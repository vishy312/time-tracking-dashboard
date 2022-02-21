let workData, playData, studyData, exerciseData, socialData, selfCareData = [], mainObj = {};

let showObj = function() {
    for(let prop in mainObj){
        console.log(mainObj);
        console.log(mainObj[prop]);
    }
}



fetch('./data.json')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        workData = data[0];
        playData = data[1];
        studyData = data[2];
        exerciseData = data[3];
        socialData = data[4];
        selfCareData = data[5];
        mainObj = data;
        showObj();
    });

// declaring the variables //

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const work = document.getElementById('work-card');
const play = document.getElementById('play-card');
const study = document.getElementById('study-card');
const social = document.getElementById('social-card');
const exercise = document.getElementById('exercise-card');
const selfCare = document.getElementById('self-care-card');

// writing necessary functions //


document.addEventListener('load', function(){
    let prev = work.lastElementChild.lastElementChild;
    let obj = mainObj[workData].timeframes.weekly;
    prev = obj.current;
    prev.previousElementSibling.innerHTML = `Last week-${obj.previous}`
})