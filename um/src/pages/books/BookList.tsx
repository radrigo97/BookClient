import {connect} from 'umi';
import 'antd/dist/antd.css';
import React, {useEffect, useState} from "react";
import styles from './book.less';
import { Input, Form } from 'antd';
import { Button } from 'antd';





function bookList(props: any) {
  const [inputBook, setInputBook] = useState('')

  const {listBook = []} = props;

  const addBook = (name: any) => {
    const book = {name: name};
    props.addBooks(book);
    setInputBook('')
  }

  useEffect(() => {
    props.getBooks();
  },[]);

  return (
    <div className={styles.listItem}>
      <ul className={styles.list}>
        <div className={styles.formsButtons}>
          <input value={inputBook} onChange={(e)=>setInputBook(e.target.value)} placeholder={'Insert a new book'}/>
          <Button className={styles.addTask} onClick={() => addBook(inputBook)}>Add Task</Button>
        </div>
        {
          listBook.map((el: any) => <li key={el._id}>{el.name}</li>)
        }
    </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
listBook: state.Book.list,
})

const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () =>dispatch({type: 'Book/getBooks'}),
  addBooks: (book: any) => dispatch({type: 'Book/create', payload: book}),
})

export default connect(mapStateToProps,mapDispatchToProps)(bookList);
