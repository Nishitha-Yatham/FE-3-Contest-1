let score={};
function OpeningCeremony(){
    setTimeout(() => {
        let score = {"red":0,"blue":0,"green":0,"yellow":0}
       console.log("Let's begin the game");
       
      }, 1000);
      Race();
} 
OpeningCeremony();
function Race(){
    setTimeout(() => {
        console.log("Score");
        console.log(score);
        const obj = {
             red: Math.floor(Math.random() * 6) + 10,
             blue:  Math.floor(Math.random() * 6) + 10,
             green:  Math.floor(Math.random() * 6) + 10,
             yellow:  Math.floor(Math.random() * 6) + 10
        };
        const sortedArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
        let nObj = {};
        nObj[sortedArr[0]] = 50;
        nObj[sortedArr[1]] = 25;
        console.log("Winner of 100M race is " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score");
        console.log(score);
    }, 3000);
}


