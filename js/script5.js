


var user = sessionStorage.getItem('user');

const heading = document.querySelectorAll('h5');


//from html
var scoreAn1 = document.getElementById('score-an-1');    //test 1
var scoreCr1 = document.getElementById('score-cr-1');    //test 2


//question part
var questionAn1 = document.getElementById('question-an-1');    //test 1
var questionCr1 = document.getElementById('question-cr-1');    //test 2



function hide(something) {
    something.classList.add('not-active');
};



// Score 1
if (!localStorage.getItem(`${user}_score_a1`)) {
    localStorage.setItem(`${user}_score_a1`, 0);
};

if (localStorage.getItem(`${user}_score_a1`) == 0) { //change here
    scoreAn1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreAn1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a1`) + ' / 15'; //change here
    hide(questionAn1); //change here
};

// Score 2
if (!localStorage.getItem(`${user}_score_c1`)) {
    localStorage.setItem(`${user}_score_c1`, 0);
};

if (localStorage.getItem(`${user}_score_c1`) == 0) { //change here
    scoreCr1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreCr1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c1`) + ' / 15'; //change here
    hide(questionCr1); //change here
};





//questions html
questionAn1.onclick = () => {  //change here
    window.location.href = "question1.html";
}
questionCr1.onclick = () => {  //change here
    window.location.href = "question-cr1.html";
}




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






