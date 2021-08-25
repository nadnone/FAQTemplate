import { questions } from '../data/questions.js';

window.onload = () =>{

    console.log(questions);
    

    for (let q = 0; q < questions.length; q++) {
        
        let question = document.createElement("div");
        let p = document.createElement("p");

        p.innerText = questions[q].question;

        question.className = "question";
        question.id = `q${q}`;

        question.onclick = () => {

            if(document.getElementById(`a${q}`) !== null){

                question.style.height = "90px";
                p.style.alignItems = "center";
                question.style.backgroundColor = "var(--question-color-main)";

                question.removeChild(document.getElementById(`a${q}`));
            }
            else
            {
                p.innerText = questions[q].question;
                question.style.height = "max-content";
                p.style.alignItems = "flex-start";
                question.style.backgroundColor = "var(--question-color-second)";
    
                let par = document.createElement("p");
                par.innerText = questions[q].answer;
                par.id = `a${q}`;
                question.appendChild(par);

            }



        };
        question.appendChild(p);
        document.getElementsByClassName("container")[0].appendChild(question);
        
    }


};