const d = document
import { bill, percentage,numberPeople, reset } from "./funciones/bill.js"


d.addEventListener("DOMContentLoaded",e=>{
    percentage(".percentage__item",".percentage__itemCustom")
    reset(".reset")
})

d.addEventListener("input", e=>{
    bill(e,".billValue")
    numberPeople(".numberPeople",".warning",e)
})