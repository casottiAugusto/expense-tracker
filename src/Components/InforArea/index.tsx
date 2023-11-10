import { formatCurrentMonth } from '../../helpers/dataFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styled';

type Porps={
  currentMonth:string;
  OnMonthChange:(newMonth:string)=>void;
  income:number;
  expense:number;
}
export const InforArea=({currentMonth,OnMonthChange,income,expense}:Porps)=>{
  const handlePrevMonth=( )=>{
    let [year,month]=currentMonth.split('-')
    let currentDate=new Date(parseInt(year),parseInt(month)-1,1)
    currentDate.setMonth(currentDate.getMonth()-1)
    OnMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)

  };
  const handleNextvMonth=()=>{
    let [year,month]=currentMonth.split('-')
    let currentDate=new Date(parseInt(year),parseInt(month)-1,1)
    currentDate.setMonth(currentDate.getMonth()+1)
    OnMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)

  };
  
  return(

    <C.Conteiner>
     <C.MonthArea>
      <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
      <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
      <C.MonthArrow onClick={handleNextvMonth}>➡️</C.MonthArrow>

     </C.MonthArea>
     <C.ResumeArea>
      <ResumeItem title="Receita" value={income}/>
      <ResumeItem title="Despesas" value={expense}/>
      <ResumeItem 
      title="Balanço"
       value={income -expense}
      color={(income-expense)<0 ? 'red':'green'}/>

     </C.ResumeArea>
    </C.Conteiner>
  );
}