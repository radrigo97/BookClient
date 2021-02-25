import {Effect, Reducer} from 'umi';
import axios from "axios";

export interface IState {
  todo: any,
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    add: Effect;
    delete: Effect;
    done: Effect;
    // AddBook: Effect;
  };
  reducers: {
    create: Reducer<IState>;
    deleteTask: Reducer<IState>;
    doneTask: Reducer<IState>;
  };
}

// const getElementBook = () => axios ({
//  url: 'http://localhost:5000/book/',
//   method: "get",
// }).then(res => res.data)
//   .catch(error => error)

// save(state: any, { payload }: any) {
//   return {
//     ...state,
//     list: payload
//   };
// },




const Model : IModel = {
  namespace: 'Task',
  state: {
    todo: [
      {title: 'One step by step', id: 1, done: false},
      {title: 'Just do it', id: 2, done: true},
      {title: 'Chicken', id: 3, done: false},
    ],
  },




  effects: {
    *add(_, { call, put }) {
      yield put({type: 'create'})
    },

    *delete(_,{call, put}) {
      yield put({type: 'deleteTask'})
    },

    *done(_,{call, put}) {
      yield put({type: 'doneTask'})
    },
  },

  reducers: {
    create(state: any, { payload }: any) {
      const newTask = [...state.todo]
      newTask.push({title: payload, id: Math.random()})
      console.log(payload)
      return {
        ...state,
        todo: newTask
      };
    },
    deleteTask(state: any, {payload}: any) {
      const deleteTaskos = state.todo.filter(el => el.id !== payload)
      return {
        ...state,
        todo: deleteTaskos
      }
    },

    doneTask(state: any, {payload}: any) {
      const updateStatus = state.todo.map(el => {
        if(el.id === payload) return {...el, done: !el.done}
        return el;
      })
      return {
        ...state,
        todo: updateStatus
      }
    },
  },
};

export default Model;
