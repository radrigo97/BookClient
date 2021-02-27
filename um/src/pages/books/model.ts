import {Effect, Reducer} from 'umi';
import axios from "axios";
import {QueryCreateBooks, queryGetBooks} from './query';

export interface IState {}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    getBooks: Effect;
    create: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

// const getElementBook = () => axios ({
//  url: 'http://localhost:5000/book/search',
//   method: 'POST',
// }).then(res => res.data)
//   .catch(error => error)




const Model : IModel = {
  namespace: 'Book',
  state: {},

  effects: {

    *getBooks(_,{call, put}) {
     const data = yield call(queryGetBooks)
      yield put({type: 'save', payload: {list:data} })
    },

    *create( payload , { call, put }) {
      console.log(payload, 'payload create')
      const createResult  = yield call(QueryCreateBooks,payload);
      if (!(createResult instanceof Error)) {
        yield put({ type: 'getBooks' });
      }
    },

  },

  reducers: {
    save(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
    set(state: any, { payload }: any) {
      return payload;
    },

  },
};

export default Model;
