const d = document
let percentageValue = 0

// export function percentageValue(percentages){
//     const $percentages = d.querySelectorAll(percentages)
//     $percentages.forEach(percentage=>{
//         percentage.addEventListener("click",e=>{
//             let valor = parseFloat(percentage.dataset.value)
//             console.log(valor)
//         })
//     })
// }
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
            console.log(percentageValue)
            

        })
    })
    $percentageCustom.addEventListener("keyup",e=>{
        customValue = parseFloat($percentageCustom.value)/100
        if(customValue >= 0){
            percentageValue = customValue
            console.log(percentageValue)

            $percentages.forEach(percentage=>{
                    percentage.classList.remove("percentage__item--active")
            })
        }
        
    })
    
}
export function totalBill(bill,numberPerson,warning,e){
    let $billValue = parseFloat(d.querySelector(bill).value),
    $numberPerson = parseInt(d.querySelector(numberPerson).value),
    percentageBill,
    billxPerson,
    person= {tip:0,total:0}

    const $msgWarning = d.querySelector(warning)
    
    if(e.target.matches(numberPerson)){
        console.log($numberPerson)

        if($numberPerson === 0){
            $msgWarning.classList.remove("hidden")
        }else{
            $msgWarning.classList.add("hidden")
            percentageBill = $billValue*percentageValue
            billxPerson = $billValue/$numberPerson
            person.tip = percentageBill/$numberPerson
            person.total = billxPerson + person.tip
        }

        // console.log(bill,person,e)
        // console.log(percentageValue)
        console.log(percentageBill,billxPerson,$numberPerson,$billValue,person)
    }
}