import React, { useState } from 'react'
import copy from "copy-to-clipboard";


const TextArea = () => {
    const [copyText, setCopyText] = useState('');

    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    }

    const copyToClipboard = (e) => {
        e.preventDefault();
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }
    return (
        <div className='w-auto lg:w-500'>
            <form>
                <textarea onChange={handleCopyText} className='w-full text-black bg-gray-100 ring-cyan-600 border-4 outline-none p-3 border-cyan-600' rows="12" placeholder='Paste your text here...'></textarea>
                <div>
                    <button className='bg-cyan-600 hover:bg-cyan-500' onClick={copyToClipboard}> <h4 className='px-3 pt-1 text-white text-xl font-bold'>Copy</h4></button>
                </div>
            </form>
        </div>
    )
}

export default TextArea