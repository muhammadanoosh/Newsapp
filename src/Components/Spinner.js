import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='align-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}
export default Spinner;