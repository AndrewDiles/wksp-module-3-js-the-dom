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
