'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 👌';

console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 19;

PENTING: memilih document selector harus secara spesifik, jangan memilih semua isi konten dari selector, harus ditambah data spesifik seperti .textContent sehingga membentuk document.querySelector('.number').textContent

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

/* NOTE:  */

// Generate angka 1-20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// score awal 20
let score = 20;

// angka highscore 0 karena selanjutnya angka highscore lebih besar dari 0.
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    // when player wins
  } else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = '👌Correct Number!';
    displayMessage('👌Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#22b8cf';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈Too High!' : '📉Too Low!';
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '☠️ You Lost The Game!';
      displayMessage('☠️ You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too high!
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '☠️ You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low!
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '☠️ You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // restore initial value score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secretNumber;

  // restore initial message, number, score and guess input field
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';

  // restore original background #222 and number width 15rem
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/* PENTING: 
1) document.querySelector('.check')
Mengambil element/class check pada HTML

2) .addEventListener('click', function () { ... })
Menambahkan event listener dan Jika tombol/element itu di-klik, maka fungsi di dalam kurung kurawal { ... } akan dijalankan.

3) function () { ... }
Ini adalah anonymous function yang akan dijalankan ketika tombol diklik.

4) console.log(document.querySelector('.guess').value);
Mengambil value dari elemen HTML yang punya class guess (biasanya input), lalu mencetaknya ke konsol.
*/

/* NOTE: Hasil dari user interface seperti dari input, selalu bertipe string */

/* NOTE: variable state adalah variabel yang memiliki bagian pada aplikasi state, dan relevan pada applikasi*/

/* NOTE: bagus untuk membuat variable yang menyimpan data code dan tidak hanya mengandalkan DOM untuk menyimpan selruh data */

/* PENTING:  document.querySelector('.number').style.width = '30px'; \
Manipulasi CSS Style harus menggunakan string, apapun datanya, angka jg menggunakan string*/

/* NOTE: 
let secretNumber = Math.trunc(Math.random() * 20 + 1);

1) Math.random() / membuat angka random dari 0 - 0.9999
2) Math.random() * 20 / membuat angka dikali 20 sehingga angka maksimal 19,999
3) Math.random() * 20 + 1 / membuat angka ditambah 1, maksimal 20.999
4) Math.trunc(Math.random() * 20 + 1); / Math.trunc( ) / menghilangkan desimal sehingga angka 1-20
5) let secretNumber = / menyimpan pada variable dengan let, karna akan digunakan lagi 
*/
