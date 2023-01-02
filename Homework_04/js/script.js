const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

/* 1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас
повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..],
[...]]; */
const pairs = getPairs(students);
function getPairs(students) {
  let studPairs = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
  return studPairs;
}
console.log(getPairs(students));

/* 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти
будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена",
"Теорія автоматів"], [...], [...]] */

//pairs [[],[],[]], themes['','','']()

//pairsThemes[['',''], ['',''],]
const pairsThemes = getPairsThemes(pairs, themes);

function getPairsThemes(pairs, themes) {
  const arrPairs = pairs.slice();
  const arrThemes = themes.slice();
  let arrPairsThemes = [];
  for (let i = 0; i < arrPairs.length; i++) {
    arrPairsThemes.push([arrPairs[i].join(" i "), arrThemes[i]]);
  }

  return arrPairsThemes;
}
console.log(getPairsThemes(pairs, themes));
//console.log(students, themes, marks);

//for (let i = 0; i < pairsThemes.length; i++)

//3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const studentsMarks = getStudentsMarks(students, marks);

function getStudentsMarks(students, marks) {
  let arrStudMarks = [];
  arrStudMarks.push(
    [students[0], marks[0]],
    [students[1], marks[1]],
    [students[2], marks[2]],
    [students[3], marks[3]],
    [students[4], marks[4]],
    [students[5], marks[5]]
  );
  return arrStudMarks;
}
console.log(studentsMarks);

/* 4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде
нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія
автоматів", 5], [...], [...]] */

const pairsMarks = getPairsMarks(pairsThemes, marks);

function getPairsMarks(pairsThemes) {
  let arrPairsMarks = [];
  for (let i = 0; i < pairsThemes.length; i++) {
    let randomNumber = Math.round(Math.random() * (5 - 1) + 1);
    arrPairsMarks.push([...pairsThemes[i], randomNumber]);
  }
  return arrPairsMarks;
}
console.log(pairsMarks);
