document.addEventListener('DOMContentLoaded', () => {
    const books = {
        is: {
            name: 'Isaias',
            abbr: 'Is',
        },
        sl: {
            name: 'Salmos',
            abbr: 'Sl',
        }
    };

    const passages = {
    nvi: {
      is: [
        {
          name: 'Isaias',
          chapter: { number: 1, verses: 31 },
          verses: [
            {
              number: 1,
              text: 'Visão que Isaías, filho de Amoz, teve a respeito de Judá e Jerusalém durante os reinados de Uzias, Jotão, Acaz e Ezequias, reis de Judá.',
            },
            {
              number: 2,
              text: 'Ouçam, ó céus! Escute, ó terra! Pois o Senhor falou: "Criei filhos e os fiz crescer, mas eles se revoltaram contra mim.',
            },
          ],
        },
      ],
      sl: [
        {
          name: 'Salmos',
          chapter: { number: 1, verses: 6 },
          verses: [
            {
              number: 1,
              text: 'Como é feliz aquele que não segue o conselho dos ímpios, não imita a conduta dos pecadores, nem se assenta na roda dos zombadores!',
            },
            {
              number: 2,
              text: 'Ao contrário, sua satisfação está na lei do Senhor, e nessa lei medita dia e noite.',
            },
          ],
        },
      ],
    },
    kjv: {
      is: [
        {
          chapter: { number: 1, verses: 31 },
          verses: [
            {
              number: 1,
              text: 'The vision of Isaiah the son of Amoz, which he saw concerning Judah and Jerusalem in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah.',
            },
            {
              number: 2,
              text: 'Hear, O heavens, and give ear, O earth: for the LORD has spoken, I have nourished and brought up children, and they have rebelled against me.',
            },
          ],
        },
      ],
      sl: [
        {
          chapter: { number: 1, verses: 20 },
          verses: [
            {
              number: 1,
              text: 'Blessed is the man that walks not in the counsel of the ungodly, nor stands in the way of sinners, nor sits in the seat of the scornful.',
            },
            {
              number: 2,
              text: 'But his delight is in the law of the LORD; and in his law does he meditate day and night.',
            },
          ],
        },
      ],
    },
  };

  const currentCHapter = 1;

  const bookSelect = document.querySelector('#book-select');

  const versionSelect = document.querySelector('#version-select');

  const leftArrow = document.querySelector('#left-arrow');

  const rightArrow = document.querySelector('#right-arrow');

  const content = document.querySelector('#bible-content');

  const updatePassageText = (book, version) => {
    content.innerHTML = `<h1> ${books[book].name} ${currentCHapter}</h1>`;

    passages[version][book].forEach((passage) => {
        passage.verses.forEach((verse) => {
            const p = document.createElement('p');
            p.textContent = verse.text;
            content.appendChild(p);
        });
    });
  }

  bookSelect.addEventListener('change', function() {
    updatePassageText(bookSelect.value, versionSelect.value)
  })

   versionSelect.addEventListener('change', function() {
    updatePassageText(bookSelect.value, versionSelect.value)
  });
});