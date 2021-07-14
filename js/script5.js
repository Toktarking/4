


var user = sessionStorage.getItem('user');

const heading = document.querySelectorAll('h5');



//from html
var scoreA1 = document.getElementById('score-a1');    //test 1
var scoreA2 = document.getElementById('score-a2');    //test 2
var scoreA3 = document.getElementById('score-a3');    //test 3
var scoreA4 = document.getElementById('score-a4');    //test 4
var scoreA5 = document.getElementById('score-a5');    //test 5
var scoreA6 = document.getElementById('score-a6');    //test 6
var scoreA7 = document.getElementById('score-a7');    //test 7
var scoreA8 = document.getElementById('score-a8');    //test 8
var scoreA9 = document.getElementById('score-a9');    //test 9
var scoreA10 = document.getElementById('score-a10');    //test 10


var scoreC1 = document.getElementById('score-c1');    //test 11
var scoreC2 = document.getElementById('score-c2');    //test 12
var scoreC3 = document.getElementById('score-c3');    //test 13
var scoreC4 = document.getElementById('score-c4');    //test 14
var scoreC5 = document.getElementById('score-c5');    //test 15
var scoreC6 = document.getElementById('score-c6');    //test 16
var scoreC7 = document.getElementById('score-c7');    //test 17
var scoreC8 = document.getElementById('score-c8');    //test 18
var scoreC9 = document.getElementById('score-c9');    //test 19
var scoreC10 = document.getElementById('score-c10');  //test 20



//question part
var questionA1 = document.getElementById('question-a1');    //test 1
var questionA2 = document.getElementById('question-a2');   //test2
var questionA3 = document.getElementById('question-a3');    //test 3
var questionA4 = document.getElementById('question-a4');    //test 4
var questionA5 = document.getElementById('question-a5');    //test 5
var questionA6 = document.getElementById('question-a6');    //test 6
var questionA7 = document.getElementById('question-a7');    //test 7
var questionA8 = document.getElementById('question-a8');    //test 8
var questionA9 = document.getElementById('question-a9');    //test 9
var questionA10 = document.getElementById('question-a10');    //test 10

var questionC1 = document.getElementById('question-c1');    //test 11
var questionC2 = document.getElementById('question-c2');    //test 12
var questionC3 = document.getElementById('question-c3');    //test 13
var questionC4 = document.getElementById('question-c4');    //test 14
var questionC5 = document.getElementById('question-c5');    //test 15
var questionC6 = document.getElementById('question-c6');    //test 16
var questionC7 = document.getElementById('question-c7');    //test 17
var questionC8 = document.getElementById('question-c8');    //test 18
var questionC9 = document.getElementById('question-c9');    //test 19
var questionC10 = document.getElementById('question-c10');  //test 20


function hide(something) {
    something.classList.add('not-active');
};



// Score 1
if (!localStorage.getItem(`${user}_score_a1`)) {
    localStorage.setItem(`${user}_score_a1`, 0);
};

if (localStorage.getItem(`${user}_score_a1`) == 0) { //change here
    scoreA1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a1`) + ' / 15'; //change here
    hide(questionA1); //change here

};

// Score 2
if (!localStorage.getItem(`${user}_score_a2`)) {
    localStorage.setItem(`${user}_score_a2`, 0);
};

if (localStorage.getItem(`${user}_score_a2`) == 0) { //change here
    scoreA2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a2`) + ' / 15'; //change here
    hide(questionA2); //change here
};

// Score 3
if (!localStorage.getItem(`${user}_score_a3`)) {
    localStorage.setItem(`${user}_score_a3`, 0);
};

if (localStorage.getItem(`${user}_score_a3`) == 0) { //change here
    scoreA3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a3`) + ' / 15'; //change here
    hide(questionA3); //change here
};

// Score 4
if (!localStorage.getItem(`${user}_score_a4`)) {
    localStorage.setItem(`${user}_score_a4`, 0);
};

if (localStorage.getItem(`${user}_score_a4`) == 0) { //change here
    scoreA4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a4`) + ' / 15'; //change here
    hide(questionA4); //change here
};

// Score 5
if (!localStorage.getItem(`${user}_score_a5`)) {
    localStorage.setItem(`${user}_score_a5`, 0);
};

if (localStorage.getItem(`${user}_score_a5`) == 0) { //change here
    scoreA5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a5`) + ' / 15'; //change here
    hide(questionA5); //change here
};

// Score 6
if (!localStorage.getItem(`${user}_score_a6`)) {
    localStorage.setItem(`${user}_score_a6`, 0);
};

if (localStorage.getItem(`${user}_score_a6`) == 0) { //change here
    scoreA6.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA6.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a6`) + ' / 15'; //change here
    hide(questionA6); //change here
};

// Score 7
if (!localStorage.getItem(`${user}_score_a7`)) {
    localStorage.setItem(`${user}_score_a7`, 0);
};

if (localStorage.getItem(`${user}_score_a7`) == 0) { //change here
    scoreA7.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA7.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a7`) + ' / 15'; //change here
    hide(questionA7); //change here
};


// Score 8
if (!localStorage.getItem(`${user}_score_a8`)) {
    localStorage.setItem(`${user}_score_a8`, 0);
};

if (localStorage.getItem(`${user}_score_a8`) == 0) { //change here
    scoreA8.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA8.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a8`) + ' / 15'; //change here
    hide(questionA8); //change here
};

// Score 9
if (!localStorage.getItem(`${user}_score_a9`)) {
    localStorage.setItem(`${user}_score_a9`, 0);
};

if (localStorage.getItem(`${user}_score_a9`) == 0) { //change here
    scoreA9.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA9.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a9`) + ' / 15'; //change here
    hide(questionA9); //change here
};


// Score 10
if (!localStorage.getItem(`${user}_score_a10`)) {
    localStorage.setItem(`${user}_score_a10`, 0);
};

if (localStorage.getItem(`${user}_score_a10`) == 0) { //change here
    scoreA10.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA10.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a10`) + ' / 15'; //change here
    hide(questionA10); //change here
};



// Score 11
if (!localStorage.getItem(`${user}_score_c1`)) {
    localStorage.setItem(`${user}_score_c1`, 0);
};

if (localStorage.getItem(`${user}_score_c1`) == 0) { //change here
    scoreC1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c1`) + ' / 15'; //change here
    hide(questionC1); //change here
};

// Score 12
if (!localStorage.getItem(`${user}_score_c2`)) {
    localStorage.setItem(`${user}_score_c2`, 0);
};

if (localStorage.getItem(`${user}_score_c2`) == 0) { //change here
    scoreC2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c2`) + ' / 15'; //change here
    hide(questionC2); //change here
};

// Score 13
if (!localStorage.getItem(`${user}_score_c3`)) {
    localStorage.setItem(`${user}_score_c3`, 0);
};

if (localStorage.getItem(`${user}_score_c3`) == 0) { //change here
    scoreC3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c3`) + ' / 15'; //change here
    hide(questionC3); //change here
};

// Score 14
if (!localStorage.getItem(`${user}_score_c4`)) {
    localStorage.setItem(`${user}_score_c4`, 0);
};

if (localStorage.getItem(`${user}_score_c4`) == 0) { //change here
    scoreC4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c4`) + ' / 15'; //change here
    hide(questionC4); //change here
};

// Score 15
if (!localStorage.getItem(`${user}_score_c5`)) {
    localStorage.setItem(`${user}_score_c5`, 0);
};

if (localStorage.getItem(`${user}_score_c5`) == 0) { //change here
    scoreC5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c5`) + ' / 15'; //change here
    hide(questionC5); //change here
};

// Score 16
if (!localStorage.getItem(`${user}_score_c6`)) {
    localStorage.setItem(`${user}_score_c6`, 0);
};

if (localStorage.getItem(`${user}_score_c6`) == 0) { //change here
    scoreC6.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC6.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c6`) + ' / 15'; //change here
    hide(questionC6); //change here
};

// Score 17
if (!localStorage.getItem(`${user}_score_c7`)) {
    localStorage.setItem(`${user}_score_c7`, 0);
};

if (localStorage.getItem(`${user}_score_c7`) == 0) { //change here
    scoreC7.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC7.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c7`) + ' / 15'; //change here
    hide(questionC7); //change here
};

// Score 18
if (!localStorage.getItem(`${user}_score_c8`)) {
    localStorage.setItem(`${user}_score_c8`, 0);
};

if (localStorage.getItem(`${user}_score_c8`) == 0) { //change here
    scoreC8.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC8.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c8`) + ' / 15'; //change here
    hide(questionC8); //change here
};

// Score 19
if (!localStorage.getItem(`${user}_score_c9`)) {
    localStorage.setItem(`${user}_score_c9`, 0);
};

if (localStorage.getItem(`${user}_score_c9`) == 0) { //change here
    scoreC9.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC9.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c9`) + ' / 15'; //change here
    hide(questionC9); //change here
};

// Score 20
if (!localStorage.getItem(`${user}_score_c10`)) {
    localStorage.setItem(`${user}_score_c10`, 0);
};

if (localStorage.getItem(`${user}_score_c10`) == 0) { //change here
    scoreC10.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC10.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c10`) + ' / 15'; //change here
    hide(questionC10); //change here
};





//questions html
questionA1.onclick = () => {  //change here
    window.location.href = "question-a1.html";
};

questionA2.onclick = () => {  //change here
    window.location.href = "question-a2.html";
};

questionA3.onclick = () => {  //change here
    window.location.href = "question-a3.html";
};

questionA4.onclick = () => {  //change here
    window.location.href = "question-a4.html";
};

questionA5.onclick = () => {  //change here
    window.location.href = "question-a5.html";
};

questionA6.onclick = () => {  //change here
    window.location.href = "question-a6.html";
};

questionA7.onclick = () => {  //change here
    window.location.href = "question-a7.html";
};

questionA8.onclick = () => {  //change here
    window.location.href = "question-a8.html";
};

questionA9.onclick = () => {  //change here
    window.location.href = "question-a9.html";
};

questionA10.onclick = () => {  //change here
    window.location.href = "question-a10.html";
};

questionC1.onclick = () => {  //change here
    window.location.href = "question-c1.html";
};

questionC2.onclick = () => {  //change here
    window.location.href = "question-c2.html";
};

questionC3.onclick = () => {  //change here
    window.location.href = "question-c3.html";
};

questionC4.onclick = () => {  //change here
    window.location.href = "question-c4.html";
};

questionC5.onclick = () => {  //change here
    window.location.href = "question-c5.html";
};




//just function
function open(num) {
    document.querySelectorAll('.article').forEach(arg => {
        arg.style.display = 'none';
    });


    document.querySelector(`#${num}`).style.display = 'block';
    }

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.game').forEach(argu => {
                argu.onclick = function() {
                    open(this.dataset.num);
                }

            })
        })








