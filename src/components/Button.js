import React from 'react'

const Button = (props) => {
    return (
        <div className='pt-5'>
            <form action="">
                <button className='bg-cyan-600'> <h4 className='px-3 pt-1 text-white text-xl font-bold'>{props.name}</h4></button>
            </form>
        </div>
    )
}

export default Button;