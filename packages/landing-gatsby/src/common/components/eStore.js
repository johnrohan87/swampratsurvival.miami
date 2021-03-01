import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, append } from '../../store/estoreSlice'
//import styles from './Counter.module.css'

export function EStore() {
  const eStoreData = useSelector(state => state.estore.data)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>E-Store --- Here!</span>
        <span>{eStoreData}</span>
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
          onClick={() => dispatch(append())}
        >
          Append
        </button>
      </div>
    </div>
  )
}