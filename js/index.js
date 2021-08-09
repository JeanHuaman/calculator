const d = document
import { percentage,totalBill } from "./funciones/bill.js"


d.addEventListener("DOMContentLoaded",e=>{
    // percentageValue(".percentage__item")
    percentage(".percentage__item",".percentage__itemCustom")
    
})

d.addEventListener("keyup", e=>{
    totalBill(".billValue",".numberPeople",".warning",e)
})