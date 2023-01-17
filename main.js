const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];
const questions2 =[
{
  letter: "a",
  answer: "antagonista",
  status: 0,
  question:
    "CON LA A. Dicho del personaje que se contrapone al protagonista",
},
{
  letter: "b",
  answer: "bastardos",
  status: 0,
  question:
    "CON LA B. Lo eran Jon Nieve y Ramsay Nieve (plural)",
},
{
  letter: "c",
  answer: "chapista",
  status: 0,
  question: "CON LA C. Trabajador de la chapa",
},
{
  letter: "d",
  answer: "disidente",
  status: 0,
  question:
    "CON LA D. Contrario al régimen establecido",
},
{
  letter: "e",
  answer: "escorbuto",
  status: 0,
  question:
    "CON LA E. Enfermedad propia de los marineros debida a la falta de vitamina C",
},
{
  letter: "f",
  answer: "foliar",
  status: 0,
  question: "CON LA F. Numerar las páginas o folios de un documento",
},
{
  letter: "g",
  answer: "generatriz",
  status: 0,
  question:
    "CON LA G. Línea a partir de la cual se genera un cono",
},
{
  letter: "h",
  answer: "hastío",
  status: 0,
  question: "CON LA H. Aburrimiento muy grande",
},
{
  letter: "i",
  answer: "inefable",
  status: 0,
  question: "CON LA I. Que no puede explicarse con palabras",
},
{
  letter: "j",
  answer: "jauria",
  status: 0,
  question:
    "CON LA J. Conjunto de perros que participan en la caza dirigidos por una misma persona",
},
{
  letter: "k",
  answer: "aikido",
  status: 0,
  question:
    "CONTIENE LA K. Arte marcial que busca dañar lo menos posible al oponente",
},
{
  letter: "l",
  answer: "listerine",
  status: 0,
  question: "CON LA L. Famoso colutorio anunciado en television",
},
{
  letter: "m",
  answer: "mithril",
  status: 0,
  question:
    "CON LA M. Metal extremadamente duro existente en el universo de El Señor de los Anillos",
},
{
  letter: "n",
  answer: "nitroglicerina",
  status: 0,
  question: "CON LA N. Sustancia que puede usarse como explosivo o para prevenir problemas cardíacos",
},
{
  letter: "ñ",
  answer: "ñoño",
  status: 0,
  question:
    "CON LA Ñ. Cursi, tierno en exceso",
},
{
  letter: "o",
  answer: "oceano",
  status: 0,
  question:
    "CON LA O. Gran masa de agua",
},
{
  letter: "p",
  answer: "piramide",
  status: 0,
  question:
    "CON LA P. Gran estructura terminada en punta con base cuadrada",
},
{
  letter: "q",
  answer: "quinque",
  status: 0,
  question:
    "CON LA Q. Lámpara portátil y graduable en intensidad, que tiene un tubo o una pantalla de cristal para proteger la llama, un depósito y una mecha; funciona con petróleo o aceite.",
},
{ letter: "r", 
  answer: "resquicio", 
  status: 0, 
  question: "CON LA R. Abertura estrecha y alargada que queda entre el quicio y la puerta cuando esta no está cerrada del todo o cierra mal" },
{
  letter: "s",
  answer: "slack",
  status: 0,
  question: "CON LA S. Aplicación de comunicación ampliamente utilizada en la comunidad informática",
},
{
  letter: "t",
  answer: "transistor",
  status: 0,
  question:
    "CON LA T. Sistema de comunicación que permite transmitir información a través de impulsos eléctricos y utilizando un código de signos prestablecido",
},
{
  letter: "u",
  answer: "ununennio",
  status: 0,
  question:
    "CON LA U. Nombre provisional del elemento químico número 119",
},
{
  letter: "v",
  answer: "visado",
  status: 0,
  question:
    "CON LA V. Documento necesario para viajar o trabajar en determinados países",
},
{
  letter: "w",
  answer: "white",
  status: 0,
  question:
    "CON LA W. Apellido del personaje principal de la serie Breaking Bad",
},
{
  letter: "x",
  answer: "xanax",
  status: 0,
  question: "CON LA X. Nombre comercial de un medicamento contra la ansiedad que ha provocado serias dificultades a gran número de personas, especialmente en los EEUU",
},
{
  letter: "y",
  answer: "ayahuasca",
  status: 0,
  question:
    "CONTIENE LA Y. Potente sustancia alucinógena que se cree que limpia el alma y el cuerpo",
},
{
  letter: "z",
  answer: "zote",
  status: 0,
  question:
    "CON LA Z. Persona estulta, de pocas capacidades",
},
];
const questions3 = [
{
  letter: "a",
  answer: "apartheid",
  status: 0,
  question:
    "CON LA A. Segregación de un grupo humano por razones étnicas, culturales o sociales",
},
{
  letter: "b",
  answer: "brandon",
  status: 0,
  question:
    "CON LA B. Nombre del escritor de fantasía más prolífico del siglo XXI",
},
{
  letter: "c",
  answer: "cizalla",
  status: 0,
  question: "CON LA C. Tijeras grandes y fuertes para cortar planchas de metal en frío",
},
{
  letter: "d",
  answer: "dinamarca",
  status: 0,
  question:
    "CON LA D. País nórdico europeo",
},
{
  letter: "e",
  answer: "estasis",
  status: 0,
  question:
    "CON LA E. Estado de coma inducido utilizado habitualmente en la ciencia ficción para realizar viajes espaciales",
},
{
  letter: "f",
  answer: "frente",
  status: 0,
  question: "CON LA F. Espacio de la cabeza entre el nacimiento del pelo y las cejas",
},
{
  letter: "g",
  answer: "giratiempo",
  status: 0,
  question:
    "CON LA G. Objeto que demuestra los claros y evidentes agujeros de guión en la saga de fantasía 'Harry Potter'",
},
{
  letter: "h",
  answer: "hoisin",
  status: 0,
  question: "CON LA H. Salsa japonesa utilizada en la elaboración y acompañamiento de distintos platos, especialmente aquellos de pato",
},
{
  letter: "i",
  answer: "infortunio",
  status: 0,
  question: "CON LA I. Desdicha",
},
{
  letter: "j",
  answer: "jamelgo",
  status: 0,
  question:
    "CON LA J. Caballo flaco, viejo y desgarbado, de poco valor y utilidad.",
},
{
  letter: "k",
  answer: "kriptonita",
  status: 0,
  question:
    "CON LA K. Mineral de color verde capaz de debilitar al superhéroe más famoso",
},
{
  letter: "l",
  answer: "ligadura",
  status: 0,
  question: "CON LA L. Unión que se puede producir entre la vocal final de una palabra y la inicial de la siguiente",
},
{
  letter: "m",
  answer: "megaton",
  status: 0,
  question:
    "CON LA M. Unidad de medida de la energía producida en una explosión",
},
{
  letter: "n",
  answer: "niscalo",
  status: 0,
  question: "CON LA N. Seta común muy apreciada en la gastronomía",
},
{
  letter: "ñ",
  answer: "niñato",
  status: 0,
  question:
    "CONTIENE LA Ñ. Infante maleducado",
},
{
  letter: "o",
  answer: "osobuco",
  status: 0,
  question:
    "CON LA O. Plato tradicional italiano que utiliza jarrete de ternera como carne principal",
},
{
  letter: "p",
  answer: "pareidolia",
  status: 0,
  question:
    "CON LA P. fenómeno psicológico que le permite a los humanos ver rostros, caras o figuras humanas en cualquier superficie o área",
},
{
  letter: "q",
  answer: "quitaesmalte",
  status: 0,
  question:
    "CON LA Q. Sustancia compuesta principalmente de acetona que suele utilizarse para quitar el pintauñas",
},
{ 
  letter: "r", 
  answer: "rezongo", 
  status: 0, 
  question: "CON LA R. Conjunto de sonidos que emite una persona en señal de enfado o enojo" },
{
  letter: "s",
  answer: "sinsajo",
  status: 0,
  question: "CON LA S. Ave simbólica de la saga de fantasía 'Los juegos del hambre'",
},
{
  letter: "t",
  answer: "trotamundos",
  status: 0,
  question:
    "CON LA T. Persona que viaja por el mundo trabajando de manera esporádica",
},
{
  letter: "u",
  answer: "ultratumba",
  status: 0,
  question:
    "CON LA U. Realidad, material o espiritual, que se cree o se supone que existe después de la muerte",
},
{
  letter: "v",
  answer: "vitualla",
  status: 0,
  question:
    "CON LA V. Conjunto de provisiones o alimentos para que coma un grupo de personas",
},
{
  letter: "w",
  answer: "waterpolo",
  status: 0,
  question:
    "CON LA W. Balonmano acuático",
},
{
  letter: "x",
  answer: "lexico",
  status: 0,
  question: "CONTIENE LA X. Se necesita uno amplio para ganar este juego",
},
{
  letter: "y",
  answer: "yesca",
  status: 0,
  question:
    "CON LA Y. Materia muy seca y que arde con facilidad, ya sea natural o preparada",
},
{
  letter: "z",
  answer: "zutano",
  status: 0,
  question:
    "CON LA Z. Mengano, fulano y...",
},
];

let ranking = [
  {id: 1, rankedName: 'Percival Ulysses Cox', points: 28},
  {id: 2, rankedName: 'Carla Espinoza', points: 20},
  {id: 3, rankedName: 'Dr. John Dorian', points: 5}
]

let points = 0
let index = 0
let firstRound = true
const rankedCopy = structuredClone(ranking)
let rank = new Array
const originalTimer = parseInt(document.getElementsByClassName("stopwatch")[0].innerHTML, 10)
let timeLeft = parseInt(document.getElementsByClassName("stopwatch")[0].innerHTML, 10)
document.getElementsByClassName("points")[0].innerHTML = points


const checkPassed = (element) => element.status === 0
const comparePoints = (element) => element.points < points
const checkWrong = (element) => element.status === 2


let chooseSetOfQuestions = Math.floor(Math.random()*3)
let questionsToAnswer = new Array
const questionsAsked = new Array

const rankingShow = () => {
  
  if (ranking.findIndex(comparePoints) !== -1){
    ranking.splice(ranking.findIndex(comparePoints),0, {id: ranking.findIndex(comparePoints), rankedName: "Tú", points: points})
      ranking.forEach((_, index) => {
        ranking[index].id = index + 1
      })
    }
  else{
    const idOrder = ranking.length + 1
    ranking.push({id: idOrder, rankedName: "Tú", points: points})
  }
  ranking.forEach((_,index) => {
    rank.push(`${ranking[index].id}º ${ranking[index].rankedName} - ${ranking[index].points} puntos.`)
     
  })
  
  document.getElementsByClassName("endgame")[0].innerHTML = `¡ENHORABUENA! Has obtenido ${points} aciertos y ${27-points} fallos. Este es el ranking:`
  for (let i = 0; i<rank.length; i++) {
    addRank(rank[i])
  }
  document.getElementsByClassName("ranking")[0].hidden = false

}

// Crear una línea para cada usuario del ranking.
const addRank =(rank) => {
  const nextRank = document.createElement("li")
  nextRank.textContent = rank
  nextRank.className = "rank"

  const putRank = document.querySelector(".ranking")
  putRank.appendChild(nextRank)

}

const hideBeggining = () =>{
document.getElementsByClassName("instructions")[0].hidden = true
document.getElementsByClassName("start")[0].hidden = true


}

const showGame = () =>{
document.getElementsByClassName("circle-container")[0].hidden = false
document.getElementsByClassName("control-container")[0].hidden = false
document.getElementsByClassName("text-container")[0].hidden = false
document.getElementsByClassName("stopwatch")[0].hidden = false
document.getElementsByClassName("points")[0].hidden = false

document.getElementsByClassName("pasapalabra")[0].hidden = false
document.getElementsByClassName("enviar")[0].hidden = false
document.getElementsByClassName("user-Answer")[0].hidden = false
document.getElementsByClassName("question")[0].hidden = false
document.getElementsByClassName("playAgain")[0].hidden = true


}

const hideGame = () =>{

document.getElementsByClassName("pasapalabra")[0].hidden = true
document.getElementsByClassName("enviar")[0].hidden = true
document.getElementsByClassName("user-Answer")[0].hidden = true
document.getElementsByClassName("question")[0].hidden = true
document.getElementsByClassName("playAgain")[0].hidden = false


}

const hideEnding = () =>{
document.getElementsByClassName("playAgain")[0].hidden = true
document.getElementsByClassName("endgame")[0].hidden = true

}

const endGame =() =>{
  hideGame()
  rankingShow()
  document.getElementsByClassName("points")[0].innerHTML = points
  document.getElementsByClassName("endgame")[0].hidden = false


  clearInterval(timeOut)  //Esconder campos, esconder botones salvo "volver a empezar"
  // finalizar todo, mostrar ranking.
}

const pickQuestionsArray = () => {
  let randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber) {
      case 0:
        questionsToAnswer = questions
        break;
      
      case 1:
        questionsToAnswer = questions2
        break;
      
      default:
        questionsToAnswer = questions3
        break;
      }

}

const showQuestion = (index, questionsToAnswer) => {
if (index === 0 && firstRound=== true){
  const changeColor = document.getElementsByClassName("letter")[index]
  changeColor.classList.toggle("blink")
}

document.getElementsByClassName("question")[0].innerHTML= questionsToAnswer[index].question
}

const blinkLetter = (ind) =>{
  const letterToBlink = document.getElementsByClassName("letter")[ind]
  letterToBlink.classList.toggle("blink")

}

const checkAnswer = (ind, questionToAnswer, answer) =>{
      document.getElementsByClassName("user-Answer")[0].value = ""
      //Quita el parpadeo de la letra activa
      const changeColor = document.getElementsByClassName("letter")[ind]

      blinkLetter(index)
      if (answer.toLowerCase() === questionToAnswer[ind].answer.toLowerCase()){
        
          firstRound === true ? changeColor.classList.replace("neutral", "right") : changeColor.classList.replace("passed", "right")
          points++
          questionToAnswer[ind].status = 1
          
      }

      else if (answer.toLowerCase() === 'pasapalabra'){
          changeColor.classList.replace("neutral", "passed")
      }
      else{
        
        firstRound === true ? changeColor.classList.replace("neutral", "wrong") : changeColor.classList.replace("passed", "wrong")
        questionToAnswer[ind].status = 2
          
       }
      //Activa el parpadeo de la siguiente
      if (index < 26 && firstRound === true){
        blinkLetter(index+1)
      }

       //Necesario para que se pida una nueva palabra al azar o la palabra ya preguntada.
       if (firstRound === true){
        index ++
          document.getElementsByClassName("points")[0].innerHTML = points
          if (index === 27 && !questionsAsked.some(checkPassed)){
            index = 26
            return endGame()
          }
          else{
          return nextQuestion ()
          }
       }
       else{
          index ++
          document.getElementsByClassName("points")[0].innerHTML = points
          if (!questionsAsked.some(checkPassed)){
            return endGame()
          }
          else{
          return secondChance()
          }
       }

 
}

const nextQuestion = () => {

  if (index <27){
      
      pickQuestionsArray()
      questionsAsked.push(questionsToAnswer[index])
      return showQuestion(index, questionsToAnswer)
  }
  else if (!questionsAsked.some(checkPassed)){
    index = 26
    return endGame()
  }
  else{
    

         index = 0
         firstRound = false
         return secondChance()
      }
  
}

const secondChance = () => {
  const nextLetter = questionsAsked.findIndex(checkPassed)  

  if (questionsAsked.some(checkPassed)){
      if (index <27 && questionsAsked[index].status === 0){
        
        blinkLetter(index)
        return showQuestion(index, questionsAsked)
      }

      else if (index === 27){
          index = nextLetter
          // blinkLetter(nextLetter)
          return secondChance()
      }
      else {
          index ++
          return secondChance()
      }
  }
  else{
      return endGame ()
  }

}

const playAgain = () => {
 rank.splice(0,rank.length)
 ranking.splice(0,ranking.length)
 ranking = structuredClone (rankedCopy)
 document.getElementsByClassName("ranking")[0].innerHTML = ""
  document.getElementsByClassName("ranking")[0].hidden = true
  document.getElementsByClassName("user-Answer")[0].disabled = false
  const letters = document.getElementsByClassName("letter")
  for (let i = 0; i < letters.length; i++){
  let letter = document.getElementsByClassName("letter")[i]
  letter.classList.replace("right", "neutral")
  letter.classList.replace("passed", "neutral")
  letter.classList.replace("wrong", "neutral")
  letter.classList.remove("blink")
  }
  index = 0
  firstRound = true
  hideEnding()
  showGame()
  nextQuestion()
  countDown()
  



  index = 0
  firstRound = true
  points = 0
  document.getElementsByClassName("points")[0].innerHTML = points

  timeLeft = originalTimer
  document.getElementsByClassName("stopwatch")[0].innerHTML = timeLeft

}


//Todos los eventos que pueden ocurrir:

//Start
const start = document.querySelector(".start")
start.addEventListener("click", (event) =>{
  event.preventDefault
  hideBeggining()
  showGame()
  nextQuestion()
  countDown()
})

//Enviar, 1 botón, 2 tecla enter
const send = document.querySelector(".enviar")
send.addEventListener("click", (event) =>{
  event.preventDefault
  const answer = document.getElementsByClassName("user-Answer")[0].value
 
  if (firstRound === true){
      return checkAnswer(index, questionsToAnswer, answer)
  }

  else{
      return checkAnswer(index, questionsAsked, answer)
  }

})

//Al pulsar la tecla Enter en el campo de texto
const input = document.querySelector(".user-Answer")
input.addEventListener("keydown", (event) =>{
  if (event.keyCode == 13){
  const answer = document.getElementsByClassName("user-Answer")[0].value
      if (firstRound === true){
          return checkAnswer(index, questionsToAnswer, answer)
      }

       else{
          return checkAnswer(index, questionsAsked, answer)
      }
  }
})

//Pasapalabra
const pasapalabra = document.querySelector(".pasapalabra")
pasapalabra.addEventListener("click", (event) => {
  event.preventDefault
  if (firstRound === true){
    return checkAnswer(index, questionsToAnswer, "pasapalabra")
}

 else{
    return checkAnswer(index, questionsAsked, "pasapalabra")
}
})

//Volver a jugar
const repeatPlay = document.querySelector(".playAgain")
repeatPlay.addEventListener("click", (event) =>{
  event.preventDefault
  clearInterval(timeOut)
  playAgain()
})

const countDown = () => {
 
  if(timeLeft>0){
      timeLeft --
      document.getElementsByClassName("stopwatch")[0].innerHTML = timeLeft
      timeLeft = parseInt(timeLeft, 10)
      timeOut = setTimeout(countDown, 1000)
  
      }
    else{
      document.getElementsByClassName("stopwatch")[0].innerHTML = 0
      return endGame()
      
      
  }
    
}


