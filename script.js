const toggle =
document.getElementById(
"themeToggle"
);

const body =
document.body;

const savedTheme =
localStorage.getItem(
"theme"
);

if(savedTheme){

body.classList.add(
savedTheme
);

}

toggle.addEventListener(
"click",
() => {

body.classList.toggle(
"light-mode"
);

if(
body.classList.contains(
"light-mode"
)
){

localStorage.setItem(
"theme",
"light-mode"
);

toggle.textContent =
"☀️";

}
else{

localStorage.removeItem(
"theme"
);

toggle.textContent =
"🌙";

}

}
);

const search =
document.getElementById(
"searchBar"
);

if(search){

search.addEventListener(
"input",
() => {

const value =
search.value
.toLowerCase();

document
.querySelectorAll(
".calc-card"
)
.forEach(card => {

const text =
card.textContent
.toLowerCase();

card.style.display =
text.includes(value)
? "block"
: "none";

});

});
}
