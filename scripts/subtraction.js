var num1;
var num2;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    num1 = getRandomInt(1, 100);
    num2 = getRandomInt(1,100);
    document.getElementById('question').innerHTML = num1 + ' - ' + num2;
}

function checkAnswer()  {
    var answer = (num1 - num2);
    var giveAns = document.getElementById('answer').value;
    if(giveAns == answer) {
        document.getElementById('wrong').innerHTML = '';
        document.getElementById('correct').innerHTML = 'Correct!!';
        generateQuestion();
    }
    else {
        //document.getElementById('correct').innerHTML = '';
        document.getElementById('wrong').innerHTML = 'Wrong!!';
    }
}