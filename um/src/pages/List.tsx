import {connect} from 'umi';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styles from './index.less';
import React,{useState} from "react";
import 'antd/dist/antd.css';



function listPage(props: any) {
  const [taskos, setTaskos] = useState('');

  const createTask = () => {
    console.log(taskos)
    props.addTask(taskos)
    setTaskos('')
  }



  return (
    <div className={"icons-list"}>
      <ul className={styles}>
        <div className={styles}>
          <Input placeholder="Pleas enter text" value={taskos} onChange={e => setTaskos(e.target.value)}/>
          <button onClick={createTask}>Add</button>
        </div>
        {
          props.task.map((el: any) => <li key={el.id}>{el.title}
          <button onClick={() => props.deleteTask(el.id)}>Delete</button>
            <button onClick={() => props.doneTask(el.id)}>{el.done ? 'Done' : 'unDone'}</button>
          </li>)
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  task: state.Task.todo
})

const mapDispatchToProps = (dispatch: any) => ({
  addTask: (payload: {taskos: any}) => dispatch({type: 'Task/create', payload }),
  deleteTask: (payload: {deletos: any}) => dispatch({type: 'Task/deleteTask', payload }),
  doneTask: (payload: {done: any}) => dispatch({type: 'Task/doneTask', payload }),
})

export default connect(mapStateToProps,mapDispatchToProps)(listPage);
