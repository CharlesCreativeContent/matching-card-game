let Match = {
  restart: ()=>{
    Match.flipped = [0,0,0,0,0,0,0,0,0,0,0,0]
    Match.clear()
    Match.randomize()
  },
  removeEvents:()=>{
    document.querySelectorAll('section').forEach(x=>x.removeEventListener("click", Match.flip))
  },
  addEvents: ()=>{
    document.querySelectorAll('section').forEach(x=>x.addEventListener("click", Match.flip))
  },
  choices: [],
  randomArray: [],
  randomArray2: [],
  cardsArray: [],

  randomize: ()=>{
    Match.cardsArray=[]
    Match.randomArray=[]
    Match.randomArray2=[]
    while(Match.randomArray.length<6){
      Match.randomArray.push(Math.floor(Math.random()*6))
      Match.randomArray = [...new Set(Match.randomArray)]
    }
    while(Match.randomArray2.length<6){
      Match.randomArray2.push(Math.floor(Math.random()*6))
      Match.randomArray2 = [...new Set(Match.randomArray2)]
    }
    let offset = Math.ceil(32*Math.random())
    Match.cardsArray = Match.randomArray.concat(Match.randomArray2)
    Match.cardsArray.forEach((x,i)=>{document.querySelectorAll('section')[i].classList=`card${x+offset} flip`})
    console.log(Match.cardsArray)
  },
  flipped: [0,0,0,0,0,0,0,0,0,0,0,0],
  flip: (e)=>{
    // e.target.style.backgroundImage==='url("https://placekitten.com/200/200")'
    if(!Match.flipped[e.target.id]){
    Match.removeEvents()
      Match.choices.push(e.target.id)
      console.log(Match.choices)
      // e.target.classList.toggle(`${e.target.id}`)
      // e.target.classList.toggle(`${Match.cardsArray[e.target.id]}`)
      e.target.classList.toggle("flip")
      Match.flipped[e.target.id] = 1

    if (Match.choices.length===2){
      Match.check()
    }else{
      Match.addEvents()
    }
  }
  },
  check: ()=>{
if(Match.cardsArray[Match.choices[0]]!==Match.cardsArray[Match.choices[1]]){
  setTimeout(()=>{
  document.querySelectorAll('section')[Match.choices[0]].classList.toggle('flip')
  document.querySelectorAll('section')[Match.choices[1]].classList.toggle('flip')
  Match.flipped[Match.choices[0]]=0
  Match.flipped[Match.choices[1]]=0
  Match.addEvents()
  Match.clear()
},1000)
}else{
Match.clear()
Match.addEvents()

}},

  clear: ()=>{
Match.choices = []
},
skin: (x)=>{
  document.querySelectorAll('.flip').forEach(x=>x.style.backgroundImage = `url("Yugioh/back.jpg")`)
  if(document.querySelectorAll('.card0').length!==0){document.querySelectorAll('.card1').forEach(x=>x.style.backgroundImage = `url("Yugioh/front1.gif")`)}
  if(document.querySelectorAll('.card1').length!==0){document.querySelectorAll('.card2').forEach(x=>x.style.backgroundImage = `url("Yugioh/front2.gif")`)}
  if(document.querySelectorAll('.card2').length!==0){document.querySelectorAll('.card3').forEach(x=>x.style.backgroundImage = `url("Yugioh/front3.gif")`)}
  if(document.querySelectorAll('.card3').length!==0){document.querySelectorAll('.card4').forEach(x=>x.style.backgroundImage = `url("Yugioh/front4.jpg")`)}
  if(document.querySelectorAll('.card4').length!==0){document.querySelectorAll('.card5').forEach(x=>x.style.backgroundImage = `url("Yugioh/front5.gif")`)}
  if(document.querySelectorAll('.card5').length!==0){document.querySelectorAll('.card6').forEach(x=>x.style.backgroundImage = `url("Yugioh/front6.gif")`)}
  if(document.querySelectorAll('.card6').length!==0){document.querySelectorAll('.card7').forEach(x=>x.style.backgroundImage = `url("Yugioh/front7.gif")`)}
  if(document.querySelectorAll('.card7').length!==0){document.querySelectorAll('.card8').forEach(x=>x.style.backgroundImage = `url("Yugioh/front8.gif")`)}
  if(document.querySelectorAll('.card8').length!==0){document.querySelectorAll('.card9').forEach(x=>x.style.backgroundImage = `url("Yugioh/front9.gif")`)}
  if(document.querySelectorAll('.card9').length!==0){document.querySelectorAll('.card10').forEach(x=>x.style.backgroundImage = `url("Yugioh/front10.gif")`)}
  if(document.querySelectorAll('.card10').length!==0){document.querySelectorAll('.card11').forEach(x=>x.style.backgroundImage = `url("Yugioh/front11.gif")`)}
  if(document.querySelectorAll('.card11').length!==0){document.querySelectorAll('.card12').forEach(x=>x.style.backgroundImage = `url("Yugioh/front12.jpg")`)}
  if(document.querySelectorAll('.card12').length!==0){document.querySelectorAll('.card13').forEach(x=>x.style.backgroundImage = `url("Yugioh/front13.jpeg")`)}
  if(document.querySelectorAll('.card13').length!==0){document.querySelectorAll('.card14').forEach(x=>x.style.backgroundImage = `url("https://i.gifer.com/8otz.gif")`)}
  if(document.querySelectorAll('.card14').length!==0){document.querySelectorAll('.card15').forEach(x=>x.style.backgroundImage = `url("https://i.gifer.com/6mD5.gif")`)}
}

}
//============Adds Event Listeners===============//
Match.randomize()
Match.addEvents()
