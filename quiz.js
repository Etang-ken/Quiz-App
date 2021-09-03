const correctAnswers = ['B','B','B','B'];
const form =  document.querySelector('.quiz-form');
const score = document.querySelector('.score');
const spann = document.querySelector('span');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let scorre = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            scorre +=25;
        }
    });
    

    
     
    scrollTo(0,0);
    
    score.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        score.querySelector('span').textContent = `${output}%`;
        if(output===scorre){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});