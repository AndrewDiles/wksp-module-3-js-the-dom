console.log('...crickets...');

const myDiv = document.getElementById('#main');


const h1tag = document.createElement('h1');
h1tag.innerText = 'The best How I Met Your Mother episode (according to fans)';
document.querySelector('body').appendChild(h1tag);

const par1 = document.createElement('p');
par1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.querySelector('body').appendChild(par1);

const h2tag = document.createElement('h2');
h2tag.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.querySelector('body').appendChild(h2tag);

const par2 = document.createElement('p');
par2.innerText = 'IMDB Rating: 9.5';
document.querySelector('body').appendChild(par2);

const imgtag = document.createElement('img');
// imgtag.innerText = 'IMDB Rating: 9.5';
imgtag.setAttribute('src', 'images/robin-sparkles.jpg');
imgtag.setAttribute('alt', 'Robin Sparkles');
document.querySelector('body').appendChild(imgtag);

const par3 = document.createElement('p');
par3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
document.querySelector('body').appendChild(par3);

const par4 = document.createElement('p');
par4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.querySelector('body').appendChild(par4);

const atag = document.createElement('a');
// imgtag.innerText = 'IMDB Rating: 9.5';
atag.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
atag.innerText = 'Source';
document.querySelector('body').appendChild(atag);



//.css file added below


// const csscode = document.createElement('link');
// csscode.rel = 'stylesheet';
// csscode.href = 'styles.css';
// csscode.class = 'css';
// document.head.appendChild(csscode);



// h1tag.classList.add("h1classname");
// par1.classList.add("pclassname");
// h2tag.classList.add("h2classname");
// par2.classList.add("pclassname");
// imgtag.classList.add("imgclassname");
// par3.classList.add("pclassname");
// par4.classList.add("pclassname");
// atag.classList.add("aclassname")


// h1tag.classList.remove("h1classname");
// par1.classList.remove("p1classname");
// h2tag.classList.remove("h2classname");
// par2.classList.remove("p2classname");
// imgtag.classList.remove("imgclassname");
// par3.classList.remove("p3classname");
// par4.classList.remove("p4classname");


document.querySelector('body').style.background = 'red';
//above is a test

// const myBody = document.getElementsByTagName('body');

document.querySelector('body').style.background = 'rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat';
document.querySelector('body').style.backgroundSize = '100%';
document.querySelector('body').style.fontFamily = "'Playfair Display', serif";



document.querySelector('main').style.background = '#fafafa';
document.querySelector('main').style.borderRadius = '4px';
document.querySelector('main').style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, .44)';
document.querySelector('main').style.minWidth = '320px';
document.querySelector('main').style.maxWidth = '600px';
document.querySelector('main').style.margin = '36px';
document.querySelector('main').style.padding = '4px 32px 32px';

document.querySelector('h1').style.fontFamily = "'Open Sans', sans-serif";
document.querySelector('h1').style.textAlign = 'center'; 
document.querySelector('h1').style.fontSize = '200px';

document.querySelector('h2').style.fontFamily = "'Open Sans', sans-serif";
document.querySelector('h2').style.textAlign = 'center'; 

document.querySelector('h2').style.textAlign = 'left';

document.querySelector('p').style.fontSize = '17px';
document.querySelector('p').style.lineHeight = '1.5em';

document.querySelector('img').style.border = '#fafafa';
document.querySelector('img').style.borderRadius = '4px';
document.querySelector('img').style.boxShadow = '4px 4px 14px rgba(128, 128, 128, .4)';
document.querySelector('img').style.width = '100%';

document.querySelector('a').style.color = '#174E7C';
document.querySelector('a').style.display = 'block';
document.querySelector('a').style.fontWeight = '700';
document.querySelector('a').style.marginTop = 'auto';
document.querySelector('a').style.textAlign = 'right';
document.querySelector('a').style.textDecoration = 'none';

// body {
//     background: rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat;
//     background-size: 100%;
//     font-family: 'Playfair Display', serif;
// }

// const paragraph = document.createElement('p');
// //2. Add content to node
// paragraph.innerText = 'New hacker right here';
// //3. Add note to existing node
// document.querySelector('body').appendChild(paragraph);