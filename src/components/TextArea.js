import React from 'react'

const TextArea = () => {
    return (
        <div className='lg:ml-32 md:ml-16 pt-10'>
            <form action="">
                <textarea className='text-black bg-gray-100 ring-cyan-600 border-4 outline-none p-3 border-cyan-600 ' name="" placeholder='Paste your text here...' cols="60" rows="13"></textarea>
            </form>
        </div>
    )
}

export default TextArea