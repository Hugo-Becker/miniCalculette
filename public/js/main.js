// CALCUL1
let nb1A=document.getElementById('nb1A')
let nb2A=document.getElementById('nb2A')
let equal1=document.querySelector('#equal1')
let rep1=document.getElementById('response1')

equal1.addEventListener('click',function(){
    let t=Number(nb1A.value)+Number(nb2A.value)
    rep1.textContent=t
})


// CALCUL2
let nb1B=document.querySelector('#nb1B')
let nb2B=document.querySelector('#nb2B')
let equalB=document.querySelector('#equalB')
let operatorB=document.querySelector('#selectB')
let rep2=document.querySelector('#response2')
let opeSpanC=document.querySelector('#opeSpanC')

equalB.addEventListener('click',function(){
    let r=eval(Number(nb1B.value)+operatorB.value+Number(nb2B.value))
    rep2.textContent=r
})


// CALCUL3
let nb1C=document.querySelector('#nb1C')
let nb2C=document.querySelector('#nb2C')
let equalC=document.querySelector('#equalC')
let rep3=document.querySelector('#response3')
let exo3Operator=document.querySelector("#operatorsExo3")
let buttonsC=exo3Operator.getElementsByClassName('m-1 btn')
let operatorC;


for (let i = 0; i < buttonsC.length; i++) {
    buttonsC[i].addEventListener('click',function(){
        operatorC=buttonsC[i].id
        opeSpanC.innerHTML=buttonsC[i].innerHTML
    })
}

equalC.addEventListener('click',function () {
    let r=eval(Number(nb1C.value)+operatorC+Number(nb2C.value))
    rep3.innerHTML=r
})




// <!-- CALCUL3 -->
let nb1D=document.querySelector('#nb1D')
let opeSpanD=document.querySelector('#opeSpanD')
let nb2D=document.querySelector('#nb2D')
let equalD=document.querySelector('#equalD')
let rep4=document.querySelector('#response4')
let numbersExo4=document.querySelector('#numbersExo4')
let chiffresButtons=numbersExo4.getElementsByTagName('button')
let numberInputs=[nb1D,nb2D]
let inputChoice=0
let operatorsExo4=document.querySelector('#operatorsExo4')
let opeButttonsC=operatorsExo4.getElementsByTagName('button')
let operatorD;



for (let i = 0; i< numberInputs.length; i++) {
      numberInputs[i].addEventListener('click',function(){
          inputChoice=[i]
      })
}

for (let i = 0; i< chiffresButtons.length; i++) {
    chiffresButtons[i].addEventListener('click',function(){
        if(inputChoice==0){
            nb1D.value+=Number(chiffresButtons[i].innerHTML).toString()
        }    
        else if(inputChoice==1) {
            nb2D.value+=Number(chiffresButtons[i].innerHTML).toString()
        }
    })
}


for (let i = 0; i < opeButttonsC.length; i++) {

    opeButttonsC[i].addEventListener('click',function(){
        operatorD=opeButttonsC[i].value
        opeSpanD.innerHTML=opeButttonsC[i].innerHTML
        inputChoice=1
        
    })
}

equalD.addEventListener('click',function(){
    
    let r = eval(Number(nb1D.value)+operatorD+Number(nb2D.value))
    rep4.innerHTML=r

})


















