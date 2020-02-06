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


// const headname = document.getElementByTagName('head');

const csscode = document.createElement('link');
// csscode.setAttribute('rel', 'stylesheet');
// csscode.setAttribute('href', 'styles.css');
// csscode.setAttribute('class', 'css');
csscode.rel = 'stylesheet';
csscode.href = 'styles.css';
csscode.class = 'css';
document.head.appendChild(csscode);
// head.querySelector('head').appendChild(csscode);

h1tag.classList.add("h1classname");
par1.classList.add("p1classname");
h2tag.classList.add("h2classname");
par2.classList.add("p2classname");
imgtag.classList.add("imgclassname");
par3.classList.add("p3classname");
par4.classList.add("p4classname");
atag.classList.add("aclassname")


// const paragraph = document.createElement('p');
// //2. Add content to node
// paragraph.innerText = 'New hacker right here';
// //3. Add note to existing node
// document.querySelector('body').appendChild(paragraph);