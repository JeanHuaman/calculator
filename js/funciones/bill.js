const d = document
let percentageValue = 0,
billValue = 0,
peopleValue = 0

function total(){
    if(percentageValue>=0 && billValue>0 && peopleValue>0){
        const $tipPerson = d.querySelector(".tipPerson"),
        $totalPerson = d.querySelector(".totalPerson"),
        
        person = {tip:0,total:0}

        person.tip = (billValue*percentageValue)/peopleValue
        person.total = (billValue/peopleValue) + person.tip

        $tipPerson.textContent = person.tip.toFixed(2)
        $totalPerson.textContent = person.total.toFixed(2)
        

    }



}
export function bill(e,value){
    if(e.target.matches(value)){
        billValue = parseFloat(e.target.value)
        total()
    }
}
export function percentage(percentages,custom){
    const $percentages = d.querySelectorAll(percentages),
    $percentageCustom = d.querySelector(custom)
    let customValue

    $percentages.forEach(percentage=>{
        percentage.addEventListener("click",e=>{
            customValue = parseFloat($percentageCustom.value)
            percentageValue = parseFloat(percentage.dataset.value)
            
            $percentages.forEach(percentage=>{
                percentage.classList.remove("percentage__item--active")
            })
            
            percentage.classList.add("percentage__item--active")
            if(customValue>=0){
                $percentageCustom.value = ""
            }
            total()

        })
    })
    $percentageCustom.addEventListener("keyup",e=>{
        customValue = parseInt($percentageCustom.value)/100
        if(customValue >= 0){
            percentageValue = customValue
            $percentages.forEach(percentage=>{
                    percentage.classList.remove("percentage__item--active")
            })
        }
        total()
        
    })
    
}

export function numberPeople(amount,warning,e){
    
    if(e.target.matches(amount)){
        const $msgWarning = d.querySelector(warning),
        $numberPeople = d.querySelector(amount)
        peopleValue = parseFloat($numberPeople.value)    

        if(peopleValue === 0 || $numberPeople.value===""){
            $msgWarning.classList.remove("hidden")
        }else{
            $msgWarning.classList.add("hidden")
            total()
        }

        // console.log(bill,person,e)
        // console.log(percentageValue)
    }
}

export function reset(reset){
    const $percentageItem = d.querySelectorAll(".percentage__item"),
    $percentageItemCustom = d.querySelector(".percentage__itemCustom"),
    $tipPerson = d.querySelector(".tipPerson"),
    $totalPerson = d.querySelector(".totalPerson")
    d.addEventListener("click",e=>{
        if(e.target.matches(reset)){
            $percentageItem.forEach(percentage=>{
                percentage.classList.remove("percentage__item--active")
            })
            $tipPerson.textContent ="0.00"
            $totalPerson.textContent ="0.00"
            $percentageItemCustom.value=""
            percentageValue = 0
            billValue = 0
            peopleValue = 0
        }

    })
}