// Preset values
const FROGS = 3;

const myMain = document.getElementById('main');
const myTrack = document.getElementById('track');
const myBody = document.getElementById('body');




// for later:
// myTrack.appendChild(constName);

// const li = document.createElement('li');
// li.innerText = 'The Slap Bet (Season 2, Episode 9)';
// myMain.appendChild(li);
// above is just testing

// li.querySelector('track').appendChild(li);


        // let liname = "frog 1";
        // const liname = document.createElement('li');
        // myTrack.appendChild(liname);


        // const liname = `frog-${i}`;
        // // const liname = document.createElement('li');
        // myTrack.appendChild(liname);
        // let spanname = i;
        // const spanname = document.createElement('span');
        // let lanenum = `lane-${i}`;
        // spanname.id = lanenum;
        // liname.appendChild(spanname);



// 1. Create for loop that makes use of FROGS to know how many lanes to create.

    for(i=1;i<=FROGS;i++){
            // 2. Create li  
        let lane = document.createElement('li');
        track.appendChild(lane);
            // 3. Create span and add it to the li
        let frognum = document.createElement('span');
        frognum.innerText = i;
        lane.appendChild(frognum);
            // 4. Assign an id to each lane
        lane.id = `frog-${i}`;
    };
//was trying to add frogStable through js instead on directly into html file

    // let frogScript = document.createElement('script');
    // frogScript.src = './assets/frogStable.js';
    // myBody.appendChild(frogScript);

    const racers = [];
    for (i=0; i<FROGS; i++){
        racers.push(frogStable[i]);
        // const newFrog = frogStable[i];
        // racers.push(newFrog);
    }
    console.log(racers);

    for (i=0;i<3;i++){
        racers[i]["lane"]= i+1;
    }

    


    racers.forEach(function(racer, frognum){
        const newFrog = document.createElement('span');
        let newFrogNumber = racer.number;
        newFrog.innerText = newFrogNumber;
        newFrog.classList.add('frog');
        newFrog.style.backgroundColor = racer.color;
        document.getElementById(`frog-${frognum+1}`).appendChild(newFrog);  //Probably would not have figured out the syntax w/o solutions
        racers[frognum].progress = 0;
        racers[frognum].lane = `frog-${frognum+1}`;
        const frogProgress = document.createElement('span');
        frogProgress.id = racers[frognum].name;
        document.getElementById(`frog-${frognum+1}`).appendChild(frogProgress);
    });


    // console.log(Math.floor(10*Math.random()));



    //The below example does not repeat.  Must decalre function within setInterval call :(
    // function hihi() {
    //     console.log("hihi");
    // };
    // // const anotherTimer = setInterval(hihi(), 1000);
    // let a = ((Math.floor(5*Math.random()))+1)*1000;   //should set timer to 1-6 seconds
    // console.log(a);
    // const aTimer = setInterval(racingFrog(racers, 0), a);

    // let b = ((Math.floor(5*Math.random()))+1)*1000;   //should set timer to 1-6 seconds
    // console.log(a);
    // const bTimer = setInterval(racingFrog(racers, 1), a);

    // let c = ((Math.floor(5*Math.random()))+1)*1000;   //should set timer to 1-6 seconds
    // console.log(a);
    // const cTimer = setInterval(racingFrog(racers, 2), a);
  
    function racingFrog(x,i) {
        x[i]["progress"] += 1+Math.floor(10*Math.random());
        console.log(`${x[i]["name"]} hops`);
    };


    // const thisTimer = setInterval(function(){
    //     console.log('here');
    // }, 2000);
    
        let a = ((Math.floor(5*Math.random()))+1)*1000;   //should set timer to 1-6 seconds
        console.log(a);
        const aTimer = setInterval(function(){
            let dist = 2+Math.floor(10*Math.random());
            racers[0]["progress"] += dist;
            console.log(`${racers[0]["name"]} hops ${dist}feet`);

            if (racers[0]["progress"] >= 100) {
                clearInterval(aTimer);
                clearInterval(bTimer);
                clearInterval(cTimer);
                console.log(`${racers[0]["name"]} has won the race!`)
            };
            myMain.querySelector('#frog-1 > span ~ span').style.left =`${racers[0]["progress"]}%`;
        }, a);




        let b = ((Math.floor(5*Math.random()))+1)*1000;   //should set timer to 1-6 seconds
        console.log(b);

        const bTimer = setInterval(function(){
            let dist = 2+Math.floor(10*Math.random());
            racers[1]["progress"] += dist;
            console.log(`${racers[1]["name"]} hops ${dist}feet`);

            if (racers[1]["progress"] >= 100) {
                clearInterval(aTimer);
                clearInterval(bTimer);
                clearInterval(cTimer);
                console.log(`${racers[1]["name"]} has won the race!`)
            };
            myMain.querySelector('#frog-2 > span ~ span').style.left =`${racers[1]["progress"]}%`;
        }, b);

        let c = ((Math.floor(5*Math.random()))+1)*1000;   //should set timer to 1-6 seconds
        console.log(c);
        const cTimer = setInterval(function(){
            let dist = 2+Math.floor(10*Math.random());
            racers[2]["progress"] += dist;
            console.log(`${racers[2]["name"]} hops ${dist}feet`);

            if (racers[2]["progress"] >= 100) {
                clearInterval(aTimer);
                clearInterval(bTimer);
                clearInterval(cTimer);
                console.log(`${racers[2]["name"]} has won the race!`)
            };
            myMain.querySelector('#frog-3 > span ~ span').style.left =`${racers[2]["progress"]}%`;
        }, c);



    // myMain.querySelector('#frog-1 > span ~ span').style.left =`${racers[0]["progress"]}px`;

    // documents.querySelectot('#frog-1 > .frog').style.left =racers[0][position];





    // Worked on this for about 90 minutes without looking at solutions.
    // Perhaps I am not using my time well, but I felt like I was close.
    // Looking at solutions now.  I will probably not finish this and will instead copy solutions' 2.4 to become my 2.5
    // Put another 30 minutes and got it working, although my solution looks nothing like yours and my interval timers are only randomized once









    // Do not use below this, was testing something
    // for (i=0;i<FROGS; i++){
    //     const a = (Math.floor(10*Math.random()))*1000;
    //     const myTimer = setInterval(racingFrog(racers), a);
    // };