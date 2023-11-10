import { Item } from "../types/Item";

export const getCurrentMonth=()=>{
let now =new Date();
return `${now.getFullYear()}-${now.getMonth()+1}`;
}
export const filterListByMonth=(list:Item[],date:string):Item[]=>{
  let newList :Item[]=[];
  let [year,month]=date.split('-');

  for (let i in list) {
    if(
    list[i].date.getFullYear() === parseInt(year)&&
    list[i].date.getMonth()+1 === parseInt(month)
    )
  {
      newList.push(list[i]);
  }
}

  return newList;

}
export const FormatDate =(date:Date):string =>{
  let year =date.getFullYear();
  let month=date.getMonth();
  let day =date.getDate();
  return`${addzeroToDate(day)}/${addzeroToDate(month)}/${year}`;
} 
const addzeroToDate=(n:number):string=>{
  if(n<10){
    return`0${n}`;
  }else{
    return `${n}`;
  }
}

export const formatCurrentMonth=(currentMonth:string):string=>{
 let [year,month] =currentMonth.split('-');
 let months =['Jneiro','Feveririo','MArço','Abriu','Maio','Julho','Junho','Agosto','Setembro','Outubro','Novembro','Dezenbro'];
 return `${months[parseInt(month)-1]} de ${year}`

}