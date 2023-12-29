console.log("Welcome to Tic Tac Toe")
let music = new Audio("sound/music.mp3")
let audioTurn = new Audio("sound/tap-2.wav")
let gameover = new Audio("sound/gameover1.wav")
let turn = "X"
let isgameover= false

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O":"X"
}

// Function to check for a win
const checkWin =()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins =[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 5, 90],
        [1, 4, 7, 5, 15, 0],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    // wins.forEach(e =>{
    //     if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText !== "")) {
    //         document.querySelector('.info').innerText=boxtexts[e[0]].innerText + "  Won"
    //         gameover.play()
    //         isgameover = true
    //         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px";
    //         document.querySelector('.line').style.width ='20vw';
    //         document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    //     }
    // })
    // Function to check for a win or draw

   let draw = true
    wins.forEach(e => {
        if (
            (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "  Won";
            gameover.play();
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            draw = false; 
        }
    });

    if (draw) {
        let filledBoxes = Array.from(boxtexts).filter(box => box.innerText !== '');
        if (filledBoxes.length === boxtexts.length) {
            document.querySelector('.info').innerText = "It's a Draw!";
            isgameover = true;
            
            document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "200px";
        }
    }
};



// Game login
// music.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (!isgameover && boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            if (!isgameover) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    });
});


//Reset Button 
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText ="";
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText='Turn for ' +turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width ="0px";
    document.querySelector('.line').style.width ='0vw';
})