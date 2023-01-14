import React from 'react'

const TextArea = () => {
    return (
        <div className='pt-10'>
            <form action="">
                <textarea className='text-black bg-gray-100 ring-cyan-600 border-4 outline-none p-3 border-cyan-600' placeholder='Paste your text here...'></textarea>
            </form>
        </div>
    )
}

export default TextArea