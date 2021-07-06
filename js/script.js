

/* All answer options */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4'),
      option5 = document.querySelector('.option5');

/* All our options */
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestion = document.getElementById('number-of-all-questions');

let indexOfQuestion, //index of current question
    indexOfPage = 0; //index of page

const answersTracker = document.getElementById('answers-tracker');

const btnNext = document.getElementById('btn-next');

let score = 0; //Final result of test



const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'Мақал-мәтелді дұрыс аяқта! Айырылмастай досыңа [...]',
        options: [
            'A. қарама',
            'B. қайтарылатындай ой айт',
            'C. айырмастай күлме',
            "D. қарамастай сөз айт",
            'E. қайырылмастай сөз айтпа',
        ],
        rightAnswer: 4
    },
    {
        question: 'Үгедей шыңғыс ханның [...] ұлы еді.',
        options: [
            'А. Бірінші',
            'В. үшінші',
            'С. екінші',
            'D. төртінші',
            'Е. бесінші',
        ],
        rightAnswer: 1
    },
    {
        question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз </br></br><div class='texts'> Қазіргі кезде полимерлер өндіру қарқынды дамуда. Мәшине жасау, радио және электротехника, құрылыс, сонымен қатар кеме, авто, ұшақ, ракета жасау өндірісін, жеңіл өнеркәсіпті, тұрмысты полимерсіз көзге елестетеу мүмкін емес. Полимер бұйымдарының бұрын байқалмаған қасиеттері анықталып, өндіріске енгізілуде. Сондықтан полимер бұйымдары адамзат игілігіне айналып, техникалық өнердің, ғылымның жаңа қырынан дамуына өзіндік үлесін қосуда. Қазіргі кезде адамзат ғарыштық биіктер мен өте терең бұрғылау ұңғымаларын бағындыра отырып, күрделі электронды есептегіш мәшинелердің микроскопиялық тетіктерінен бастап, үлкен каналдар мен су қоймаларының гидрооқшаулағыштарын жасауға дейінгі барлық жағдайда полимер бұйымдарымен жұмыс істейді.</div>",
        options: [
            'А. Құрал',
            'В. Өндіріс жетістіктері',
            'С. Бұйым',
            'D. Полимер бұйымдары',
            'Е. Өндіріс орны',
        ],
        rightAnswer: 3
    },
    {
        question: "Берілген мәтіннің мақсатын анықтаңыз </br></br><div class='texts'> Қазіргі кезде полимерлер өндіру қарқынды дамуда. Мәшине жасау, радио және электротехника, құрылыс, сонымен қатар кеме, авто, ұшақ, ракета жасау өндірісін, жеңіл өнеркәсіпті, тұрмысты полимерсіз көзге елестетеу мүмкін емес. Полимер бұйымдарының бұрын байқалмаған қасиеттері анықталып, өндіріске енгізілуде. Сондықтан полимер бұйымдары адамзат игілігіне айналып, техникалық өнердің, ғылымның жаңа қырынан дамуына өзіндік үлесін қосуда. Қазіргі кезде адамзат ғарыштық биіктер мен өте терең бұрғылау ұңғымаларын бағындыра отырып, күрделі электронды есептегіш мәшинелердің микроскопиялық тетіктерінен бастап, үлкен каналдар мен су қоймаларының гидрооқшаулағыштарын жасауға дейінгі барлық жағдайда полимер бұйымдарымен жұмыс істейді.</div>",
        options: [
            'А. полимер бұйымдарының қасиетін саралау',
            'В. полимердің көп түрлігін көрсету',
            'С. жеңіл өнеркәсіптің ерекшелігін сипаттау',
            'D. бұйым жасау әдістерін таныту',
            'Е. полимерді пайдалану жолдарын таныту',
        ],
        rightAnswer: 0
    },

    {
        question: 'Мәтіндегі бос орынды толықтырыңыз. </br></br><div class="texts"> Аю- жыртқыш аң. Ол [...] орманда тіршілік етеді</div>',
        options: [
            'А. жақын',
            'В. ну',
            'С. шалғай',
            'D. қысқы',
            'Е. алыс',
        ],
        rightAnswer: 1
    },
    {
        question: "«Бұрын» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Қазіргі кезде полимерлер өндіру қарқынды дамуда. Мәшине жасау, радио және электротехника, құрылыс, сонымен қатар кеме, авто, ұшақ, ракета жасау өндірісін, жеңіл өнеркәсіпті, тұрмысты полимерсіз көзге елестетеу мүмкін емес. Полимер бұйымдарының бұрын байқалмаған қасиеттері анықталып, өндіріске енгізілуде. Сондықтан полимер бұйымдары адамзат игілігіне айналып, техникалық өнердің, ғылымның жаңа қырынан дамуына өзіндік үлесін қосуда. Қазіргі кезде адамзат ғарыштық биіктер мен өте терең бұрғылау ұңғымаларын бағындыра отырып, күрделі электронды есептегіш мәшинелердің микроскопиялық тетіктерінен бастап, үлкен каналдар мен су қоймаларының гидрооқшаулағыштарын жасауға дейінгі барлық жағдайда полимер бұйымдарымен жұмыс істейді.</div>",
        options: [
            'А. жаңа',
            'В. бүгін',
            'С. қазір',
            'D. ертеректе',
            'Е. әрең',
        ],
        rightAnswer: 3
    },
    {
        question: 'Берілген мәтіннің мақсатын анықтаңыздар </br></br><div class="texts"> ЭЕМ-ді немесе дербес копьютерді алсақ та, олар бір-бірімен ұқсас принципте жұмыс істейтін мынандай құрамнан тұрады: орталық процессор, енгізу құрылығысы, есте сақтау құрылғысы, шығару құрылғысы. Орталық процессор барлық, есептеу және информация өндірістерін орындайды. Бір интегралдық схемадан тұратын процессор микропроцессор деп аталады. Күрделі мәшинелерде процессор бір-біріменөзара байланысты бірнеше интегралдық схемалар жиынынан тұрады. Енгізу құрылғысы ақпаратты компьютерге енгізу қызметін атқарады. Есте сақтау құрылғысы бағдарламаларды, мәліметтерді және жұмыс нәтижелерін компьютер жадына сақтауға арналған. Шығару құрылғысы компьютерінің жұмыс нәтижесін адамдарға жеткізу үшін қолданылады. </div>',
        options: [
            'А. компьютердің жұмыс нәтижесін көпшілікке жеткізу',
            'В. ақпараттық жабдықтар туралы баяндау',
            'С. компьютердің жұмыс істеу принциптерін баяндау',
            'D. компьютер арқылы барлық есептеу мәшинесінің қызметін айқындау',
            'Е. компьютердің ақпаратты өңдеу ерекшеліктерін білдіру',
        ],
        rightAnswer: 2
    },
    {
        question: '«Байланысты» сөзіне мағынасы жақын сөзді табыңыз</br></br><div class="texts"> ЭЕМ-ді немесе дербес копьютерді алсақ та, олар бір-бірімен ұқсас принципте жұмыс істейтін мынандай құрамнан тұрады: орталық процессор, енгізу құрылығысы, есте сақтау құрылғысы, шығару құрылғысы. Орталық процессор барлық, есептеу және информация өндірістерін орындайды. Бір интегралдық схемадан тұратын процессор микропроцессор деп аталады. Күрделі мәшинелерде процессор бір-біріменөзара байланысты бірнеше интегралдық схемалар жиынынан тұрады. Енгізу құрылғысы ақпаратты компьютерге енгізу қызметін атқарады. Есте сақтау құрылғысы бағдарламаларды, мәліметтерді және жұмыс нәтижелерін компьютер жадына сақтауға арналған. Шығару құрылғысы компьютерінің жұмыс нәтижесін адамдарға жеткізу үшін қолданылады. </div>',
        options: [
            'А. бірыңғай',
            'В. ұқсас',
            'С. бірдей',
            'D. жаңа',
            'Е. қатысты',
        ],
        rightAnswer: 4
    },
    {
        question: 'Берілген мәтінге сәйкес тақырыпты таңдаңыз</br></br><div class="texts"> ЭЕМ-ді немесе дербес копьютерді алсақ та, олар бір-бірімен ұқсас принципте жұмыс істейтін мынандай құрамнан тұрады: орталық процессор, енгізу құрылығысы, есте сақтау құрылғысы, шығару құрылғысы. Орталық процессор барлық, есептеу және информация өндірістерін орындайды. Бір интегралдық схемадан тұратын процессор микропроцессор деп аталады. Күрделі мәшинелерде процессор бір-біріменөзара байланысты бірнеше интегралдық схемалар жиынынан тұрады. Енгізу құрылғысы ақпаратты компьютерге енгізу қызметін атқарады. Есте сақтау құрылғысы бағдарламаларды, мәліметтерді және жұмыс нәтижелерін компьютер жадына сақтауға арналған. Шығару құрылғысы компьютерінің жұмыс нәтижесін адамдарға жеткізу үшін қолданылады. </div>',
        options: [
            'А. дербес компьютер құрылымы',
            'В. ЭЕМ принципі',
            'С. енгізу құрылымы',
            'D. интегралдық схема',
            'Е. шығару құрылғысы',
        ],
        rightAnswer: 0
    },
    {
        question: 'Берілген мәтінге сәйкес тақырып таңдаңыз. </br></br><div class="texts"> Сыйлық таңдау ешқашан оңай шаруа болған емес. Жаныңызға жақын адамға тосын сый жасап, қуантқыңыз-ақ келеді. Алайда, ұната ма,ұнатпай ма? Мұндай сыйлық беру жақсы ырым ба? Осындай дау-дамайлы сыйлықтардың бірі -- сағат. Ел аузында үйлену тойына тарту етілген сағат жас жұбайлар некесінің тез бұзылуына алып келеді, бақытты адамдар сағат тақпайды деген сөздер аз айтылмайды. Сағат сыйлауға болмайды деген наным-сенім біздерге Қытайдан келген. Осы елдің тұрғындары сыйға алынған сағат -- жерлеу рәсіміне шақыру деп түсінеді екен. Ырымның екінші бір себебі - ежелден бері сыйлыққа өткір зат беруге болмайды деген тыйымда жатыр. Пышаққа қатысты мұндай тыйымдардан өзіңіз де хабардар боларсыз. Өткір тілді сағаттар дәл осы тыйым салынған заттардың қатарына жатады. Жорамалмен келісер болсақ, өткір заттарды сыйлау арқылы сол адаммен қарым-қатынасыңызды өз қолыңызбен қырыққан боласыз. </div>',
        options: [
            'А. сыйлықтар',
            'В. сағат сыйлауға болмайды',
            'С. сыйлық беру мәдениеті',
            'D. сыйлық таңдау',
            'Е. сыйлауға болмайтын сыйлықтар',
        ],
        rightAnswer: 4
    },
    {
       question: 'Берілген мәтіннің мақсатын анықтаныз. </br></br><div class="texts"> Сыйлық таңдау ешқашан оңай шаруа болған емес. Жаныңызға жақын адамға тосын сый жасап, қуантқыңыз-ақ келеді. Алайда, ұната ма,ұнатпай ма? Мұндай сыйлық беру жақсы ырым ба? Осындай дау-дамайлы сыйлықтардың бірі -- сағат. Ел аузында үйлену тойына тарту етілген сағат жас жұбайлар некесінің тез бұзылуына алып келеді, бақытты адамдар сағат тақпайды деген сөздер аз айтылмайды. Сағат сыйлауға болмайды деген наным-сенім біздерге Қытайдан келген. Осы елдің тұрғындары сыйға алынған сағат -- жерлеу рәсіміне шақыру деп түсінеді екен. Ырымның екінші бір себебі - ежелден бері сыйлыққа өткір зат беруге болмайды деген тыйымда жатыр. Пышаққа қатысты мұндай тыйымдардан өзіңіз де хабардар боларсыз. Өткір тілді сағаттар дәл осы тыйым салынған заттардың қатарына жатады. Жорамалмен келісер болсақ, өткір заттарды сыйлау арқылы сол адаммен қарым-қатынасыңызды өз қолыңызбен қырыққан боласыз. </div>',
       options: [
            'А. сыйлық беру мәдениетін салыстыру',
            'В. сыйлықтарға қатысты түсініктеме берілген',
            'С. сыйлық беру туралы түрлі пікір',
            'D. сыйлауға болатын сыйлықтарға талдау жүргізілген',
            'Е. беруге болмайтын сыйлық түріне сараптама жасалған',
        ],
        rightAnswer: 4
    },
    {
        question: '«Ел аузында» сөзінің мәтіндегі мағынасын табыңыз </br></br><div class="texts"> Сыйлық таңдау ешқашан оңай шаруа болған емес. Жаныңызға жақын адамға тосын сый жасап, қуантқыңыз-ақ келеді. Алайда, ұната ма,ұнатпай ма? Мұндай сыйлық беру жақсы ырым ба? Осындай дау-дамайлы сыйлықтардың бірі -- сағат. Ел аузында үйлену тойына тарту етілген сағат жас жұбайлар некесінің тез бұзылуына алып келеді, бақытты адамдар сағат тақпайды деген сөздер аз айтылмайды. Сағат сыйлауға болмайды деген наным-сенім біздерге Қытайдан келген. Осы елдің тұрғындары сыйға алынған сағат -- жерлеу рәсіміне шақыру деп түсінеді екен. Ырымның екінші бір себебі - ежелден бері сыйлыққа өткір зат беруге болмайды деген тыйымда жатыр. Пышаққа қатысты мұндай тыйымдардан өзіңіз де хабардар боларсыз. Өткір тілді сағаттар дәл осы тыйым салынған заттардың қатарына жатады. Жорамалмен келісер болсақ, өткір заттарды сыйлау арқылы сол адаммен қарым-қатынасыңызды өз қолыңызбен қырыққан боласыз. </div>',
        options: [
            'А. халық арасында',
            'В. аңыз бойынша',
            'С. өсиет бойынша',
            'Б. қариялардың айтуынша',
            'Е. ереже бойынша',
        ],
        rightAnswer: 0
    },
    {
        question: 'Берілген мәтінге сәйкес тақырыпты таңдаңыз. </br></br><div class="texts"> Қазіргі кезде экономикада қарқынды түрде тұрмыстық үрдістерді күрделендіру, сонымен қатар кодтау және қайта қолдану жылдамдығы дамып жатыр. Ақпараттық өндіріс материалдық өндіріс, рухани өндіріс, адам өндірісінің ақпарттық бірлігіне айналды. Алдағы уақытта таным теория құрылымында ақпараттық-экономикалық зерттеулер суперсубстанциялық ақпарат негізінде ақпарттың жаңа қасиеттеріне ашуға жол ашады. Суперсубстанционалды ақпарат түріне түрлі деңгейлік, түрлі құрылымдық әртүрлі ақпарат жатады. Түрлі деңгейлік ақпарат барынша, жалпы, ерекше және бірлі- жарым ақпараттан тұрады. Осыған байланысты ақпартаттық тұрғыдан адам суперсубтанционалдық ақпарат болып танылады.</div>',
        options: [
            'А. ақпараттық өндіріс',
            'В. экономикалық зерттеулер',
            'С. экономиканың дамуы',
            'Б. еңбек нарығының дамуы',
            'Е. кодтау жылдамдығы',
        ],
        rightAnswer: 0
    },
    {
        question: 'Берілген мәтіннің мақсатын анықтаңыз. </br></br><div class="texts"> Қазіргі кезде экономикада қарқынды түрде тұрмыстық үрдістерді күрделендіру, сонымен қатар кодтау және қайта қолдану жылдамдығы дамып жатыр. Ақпараттық өндіріс материалдық өндіріс, рухани өндіріс, адам өндірісінің ақпарттық бірлігіне айналды. Алдағы уақытта таным теория құрылымында ақпараттық-экономикалық зерттеулер суперсубстанциялық ақпарат негізінде ақпарттың жаңа қасиеттеріне ашуға жол ашады. Суперсубстанционалды ақпарат түріне түрлі деңгейлік, түрлі құрылымдық әртүрлі ақпарат жатады. Түрлі деңгейлік ақпарат барынша, жалпы, ерекше және бірлі- жарым ақпараттан тұрады. Осыған байланысты ақпартаттық тұрғыдан адам суперсубтанционалдық ақпарат болып танылады.</div>',
        options: [
            'А. еңбек нарығы жұмыс күшін бөлу мен қайта бөлу тетігі',
            'В. білім беру қызметтер нарығын сипаттау',
            'С. ақпараттық өндірістің ерекшелігін сипаттау',
            'Б. экономикалық зерттеулердегі мемлекеттік қызмет мәселесі',
            'Е. таным теориясы құрылымын талдау',
        ],
        rightAnswer: 2
    },
    {
        question: '«Қарқынды» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class="texts"> Қазіргі кезде экономикада қарқынды түрде тұрмыстық үрдістерді күрделендіру, сонымен қатар кодтау және қайта қолдану жылдамдығы дамып жатыр. Ақпараттық өндіріс материалдық өндіріс, рухани өндіріс, адам өндірісінің ақпарттық бірлігіне айналды. Алдағы уақытта таным теория құрылымында ақпараттық-экономикалық зерттеулер суперсубстанциялық ақпарат негізінде ақпарттың жаңа қасиеттеріне ашуға жол ашады. Суперсубстанционалды ақпарат түріне түрлі деңгейлік, түрлі құрылымдық әртүрлі ақпарат жатады. Түрлі деңгейлік ақпарат барынша, жалпы, ерекше және бірлі- жарым ақпараттан тұрады. Осыған байланысты ақпартаттық тұрғыдан адам суперсубтанционалдық ақпарат болып танылады.</div>',
        options: [
            'А. жайлап',
            'В. екпінді',
            'С. кеңінен',
            'Б. баяулап',
            'Е. жайлы',
        ],
        rightAnswer: 1
    },


];

numberOfAllQuestion.innerHTML = questions.length; // all questions number




const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; //question

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];
    option5.innerHTML = questions[indexOfQuestion].options[4];

    numberOfQuestion.innerHTML = indexOfPage + 1;   // setting page
    indexOfPage++; // increasing index of page
};

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length) {
        quizOver();
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if(completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    };
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        score++;
        updateAnswerTracker('correct');

    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');

    };
    disabledOptions();
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
};

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
        })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
    if (!optionElements[0].classList.contains('disabled')) {
        alert('Выберите один из предложенных ответов');
    } else {
        randomQuestion();
        enableOptions();
    }
};

btnNext.addEventListener('click', validate);

for (option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));


}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
}

const tryAgain = () => {
    window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

counterSec = 10;
counterSec2 = 5;
counterMin = 9;
counterMin2 = 1;



function countSeconds() {
    counterSec--;
    document.querySelector('#counter-seconds').innerHTML = counterSec;
    document.querySelector('#counter-seconds2').innerHTML = counterSec2;
    document.querySelector('#counter-minutes').innerHTML = counterMin;
    document.querySelector('#counter-minutes2').innerHTML = counterMin2;
    if (counterSec < 0 && counterSec2 != 0) {
        counterSec2--;
        counterSec = 10;
        countSeconds();


        //quizOver();
    } else if (counterSec2 == 0 && counterSec < 0) {
        counterMin--;
        document.querySelector('#counter-minutes').innerHTML = counterMin;
        counterSec = 10;
        counterSec2= 5;
        countSeconds();
        if (counterMin < 0) {
            counterMin = 9;
            counterMin2--;
            document.querySelector('#counter-minutes').innerHTML = counterMin2;
        }




        //quizOver();
        //document.querySelector('#counter-seconds').innerHTML = "Время вышло";
        //document.querySelector('#counter-seconds').style.color = "red";
        //document.querySelector('#counter-seconds2').innerHTML = "";
    }else if (counterMin < 0 && counterMin2 == 0) {
           quizOver();
           document.querySelector('#counter-seconds').innerHTML = "Время вышло";
           counterSec = 0;
           counterSec2 = 0;
           counterMin = 0;
           counterMin2 = 0;
           document.querySelector('#counter-seconds').style.color = "red";
           document.querySelector('#counter-seconds2').innerHTML = "";
           document.querySelector('#counter-minutes').innerHTML = "";
           document.querySelector('#counter-minutes2').innerHTML = "";
           document.querySelector('#double-points').innerHTML = "";

        }
}




setInterval(countSeconds, 1000);






window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();

});



window.onbeforeunload = function() {
    return false;
}
















