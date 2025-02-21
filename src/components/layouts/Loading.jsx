import React from 'react'

const Loading = () => {
    return (
        <div className='main-div'>
            <div className='div'>
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    &nbsp;&nbsp;Loading...
                </button>
            </div>
        </div>
    )
}

export default Loading
