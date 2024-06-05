//   +++++++++++++++++++++ First Logic +++++++++++++++++++++++++++++++++++++

// let body = document.querySelector('body');
// let firstbtn = document.querySelector('#first');
// let secondbtn = document.querySelector('#second');
// let thirdbtn = document.querySelector('#third');
// let fourthbtn = document.querySelector('#fourth');

// firstbtn.addEventListener('click', () => {
//   body.style.backgroundColor = 'rgb(238, 58, 58)';
// });

// secondbtn.addEventListener('click', () => {
//   body.style.backgroundColor = 'rgb(56, 182, 67)';
// });

// thirdbtn.addEventListener('click', () => {
//   body.style.backgroundColor = 'coral';
// });

// fourthbtn.addEventListener('click', () => {
//   body.style.backgroundColor = 'deeppink';
// });

///+++++++++++++++++ Second logic ++++++++++++++

let body = document.querySelector('body');

let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    if (button.id === 'first') {
      body.style.backgroundColor = ' rgb(238, 58, 58)';
    } else if (button.id === 'second') {
      body.style.backgroundColor = 'rgb(56, 182, 67)';
    } else if (button.id === 'third') {
      body.style.backgroundColor = 'coral';
    } else {
      body.style.backgroundColor = ' rgb(153, 30, 96)';
    }
  });
});
