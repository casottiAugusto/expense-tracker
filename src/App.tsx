import * as C from './Styles/main.satyle';
import { useEffect, useState } from "react";
import { items } from './data/Items';
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';
import { Item } from './types/Item';
import { TableArea } from './Components/TableArea';
import { InforArea } from './Components/InforArea';
import { categories } from './data/categories';
import { InputArea } from './Components/InputArea';

export const App = () => {
  const [list, setList] = useState(items);
  const [filtersdList, setFilteredList] = useState<Item[]>([]);
  const [CurrentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income,setIncome]=useState(0);
  const [expense,setExpense]=useState(0);
  const handleMonthchage=(newMonth:string)=>{
    setCurrentMonth(newMonth)
  }
  useEffect(() => {
    setFilteredList(filterListByMonth(list, CurrentMonth));
  },[list,CurrentMonth]);
  useEffect(()=>{
    let incomeCount =0;
    let expenseCount=0;

    for(let i in filtersdList){
      if(categories[filtersdList[i].category].expense){

        expenseCount += filtersdList[i].value;
      }
    else{
      incomeCount +=filtersdList[i].value;
    }
  }
    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filtersdList])

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.body>
        <InforArea
         currentMonth={CurrentMonth}
         OnMonthChange={handleMonthchage}
         income={income}
         expense={expense}
         />
        <InputArea onAdd={handleAddItem}/>
        <TableArea list={filtersdList}  />
      </C.body>
    </C.Container> 
  );
};
