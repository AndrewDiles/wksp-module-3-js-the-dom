// Preset values
const FROGS = 3;

const myMain = document.getElementById('main');
const myTrack = document.getElementById('track');


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
        let lane = document.createElement('li');
        track.appendChild(lane);

        let frognum = document.createElement('span');
        frognum.innerText = i;
        lane.appendChild(frognum);

        lane.id = `frog-${i}`;



  
    };

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane

