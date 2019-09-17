const radioButtons = document.querySelectorAll(".radio-btns");
const selectedBtn = Array.prototype.slice.call(radioButtons);
const startGame = document.querySelector(".start-game-btn");
const number = document.querySelector(".number");
const randomArr = [];

 

const gameRules = [
  { number: 1, letter: "a" },
  { number: 2, letter: "b" },
  { number: 3, letter: "c" },
  { number: 4, letter: "d" },
  { number: 5, letter: "e" },
  { number: 6, letter: "f" },
  { number: 7, letter: "g" },
  { number: 8, letter: "h" },
  { number: 9, letter: "i" },
  { number: 10, letter: "j" },
  { number: 11, letter: "k" },
  { number: 12, letter: "l" },
  { number: 13, letter: "m" },
  { number: 14, letter: "n" },
  { number: 15, letter: "o" },
  { number: 16, letter: "p" },
  { number: 17, letter: "q" },
  { number: 18, letter: "r" },
  { number: 19, letter: "s" },
  { number: 20, letter: "t" },
  { number: 21, letter: "u" },
  { number: 22, letter: "v" },
  { number: 23, letter: "w" },
  { number: 24, letter: "x" },
  { number: 25, letter: "y" },
  { number: 26, letter: "z" }
];

const intervals = {
    easy: 5000,
    medium: 2500,
    hard: 500
}

const randomNumbers = () => {
    
      const num = Math.floor(Math.random() * gameRules.length + 1);
      return num;
};

const getValue = () => {  
    const radioBtn = selectedBtn.find(el => el.checked);
    return radioBtn.value;
}

while (randomArr.length < 26) { 
     const x = randomNumbers();
      if (randomArr.includes(x)) {
        //      console.log(x, 'ukljucuje')  
    } else { 
           randomArr.push(x); 
     }}

    console.log(randomArr)
    
    const render = (interval) => {
        let br = 0;
        console.log(interval)
        const timer = setInterval(() =>{
            if(br<26){
                number.innerHTML=randomArr[br];
                br++;
            }else
                clearInterval(timer);
        },interval)
    }

    startGame.addEventListener("click", () => {
            const interval = getValue();
            console.log(interval)
            let inter;
            switch(interval){
                case 'easy':
                    inter=intervals[interval];
                    break;
                case 'medium':
                    inter=intervals[interval];
                    break;
                case 'hard':
                    inter=intervals[interval];
                    break;
            }
            console.log(inter)
            render(inter)
    });

