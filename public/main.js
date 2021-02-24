const board = document.querySelector('.board');
const space1 = document.querySelector('#space1');
const space2 = document.querySelector('#space2');
const space3 = document.querySelector('#space3');
const space4 = document.querySelector('#space4');
const space5 = document.querySelector('#space5');
const space6 = document.querySelector('#space6');
const space7 = document.querySelector('#space7');
const space8 = document.querySelector('#space8');
const space9 = document.querySelector('#space9');
const resetButton = document.querySelector('.reset');
let turn = 0;

resetButton.addEventListener('click', () => {
  const allSpaces = document.querySelectorAll('li');
  allSpaces.forEach(space => {
    space.innerHTML = '';
    space.classList.remove('x', 'o');
  });
  turn = 0;
});

board.addEventListener('click', (e) => {

  if(turn%2 === 0) {
    e.target.innerHTML = 'X';
    e.target.classList.add('x');
    if(
      // horizontal check
      space1.classList.contains('x') && space2.classList.contains('x') && space3.classList.contains('x') ||
      space4.classList.contains('x') && space5.classList.contains('x') && space6.classList.contains('x') ||
      space7.classList.contains('x') && space8.classList.contains('x') && space9.classList.contains('x') ||
      // vertical check
      space1.classList.contains('x') && space4.classList.contains('x') && space7.classList.contains('x') ||
      space2.classList.contains('x') && space5.classList.contains('x') && space8.classList.contains('x') ||
      space3.classList.contains('x') && space6.classList.contains('x') && space9.classList.contains('x') ||
      // diagonal check
      space1.classList.contains('x') && space5.classList.contains('x') && space9.classList.contains('x') ||
      space7.classList.contains('x') && space5.classList.contains('x') && space3.classList.contains('x')
    ) {
      alert('X is winner!');
    }
    turn++;
  } else {
    e.target.innerHTML = 'O';
    e.target.classList.add('o');
    if(
      // horizontal check
      space1.classList.contains('o') && space2.classList.contains('o') && space3.classList.contains('o') ||
      space4.classList.contains('o') && space5.classList.contains('o') && space6.classList.contains('o') ||
      space7.classList.contains('o') && space8.classList.contains('o') && space9.classList.contains('o') ||
      // vertical check
      space1.classList.contains('o') && space4.classList.contains('o') && space7.classList.contains('o') ||
      space2.classList.contains('o') && space5.classList.contains('o') && space8.classList.contains('o') ||
      space3.classList.contains('o') && space6.classList.contains('o') && space9.classList.contains('o') ||
      // diagonal check
      space1.classList.contains('o') && space5.classList.contains('o') && space9.classList.contains('o') ||
      space7.classList.contains('o') && space5.classList.contains('o') && space3.classList.contains('o')
    ) {
      alert('O is winner!');
    }
    turn++;
  }
  if(turn === 9) {
    alert('Tie Game!');
    turn = 0;
  }
})