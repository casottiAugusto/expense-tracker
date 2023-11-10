import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import * as C from './styles';
type Porps={
  list:Item[];
}
export const TableArea=({list}:Porps)=>{
  return (
  <C.Table>
    <thead>
      <tr>
        <C.TableHeadColunn width={100}>Data </C.TableHeadColunn>
        <C.TableHeadColunn width={130}> Categoria </C.TableHeadColunn>
        <C.TableHeadColunn width={110}>Titulo </C.TableHeadColunn>
        <C.TableHeadColunn>Valor </C.TableHeadColunn>
      </tr>
    </thead>
    <tbody>
   {list.map((item,index)=>(
     <TableItem key={index} item={item} />
      ))}

    </tbody>
  </C.Table>
  )
}

