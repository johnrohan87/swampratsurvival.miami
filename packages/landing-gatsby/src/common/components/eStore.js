import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, append } from '../../store/estoreSlice'
//import styles from './Counter.module.css'

export default function EStore() {
  const eStoreData = useSelector(state => state.estore.data)
  const tmpEStore = useSelector(state => state.estore)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>E-Store --- Here!</span>
        <br />
        <button
          aria-label="add"
          onClick={() => dispatch(add())}
        >
          Add
        </button>
        <button
          aria-label="remove"
          onClick={() => dispatch(remove())}
        >
          Remove
        </button>
        <button
          aria-label="append"
          onClick={() => dispatch(append(eStoreData))}
        >
          Append
        </button>
        <button
          aria-label="console log data"
          onClick={() => console.log(tmpEStore)}
        >
          console log data
        </button>
      </div>
      <span>{eStoreData}</span>
    </div>
  )
}