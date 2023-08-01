import { ITarefa } from '../../types/tarefa';
import style from './lista.module.scss';
import Item from './Item';


 interface props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void

 } 

  

function Lista( {tarefas, selecionaTarefa}: props) {

  
  return (
        <aside className={style.listaTarefas}>
            <h2>
                
                Estudos do dia 
            </h2>
            <ul>
                {tarefas.map(item => (
                 <Item
                 selecionaTarefa = {selecionaTarefa}
                 key={item.id}
                 {...item}
                 />
                )
                )}
    
            </ul>
        </aside>

    )
}

export default Lista; 
