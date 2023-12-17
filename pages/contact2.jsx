"use client"
import React, { useState } from 'react'

const Contact2 = () => {

    const [name, setName] = useState( '')
    const [phone, setPhone] = useState( '');
    const [email, setEmail] = useState(  '');
    const [message, setMessage] = useState(  '');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = {
            name,
            phone,
            email,
            message
        }

        const response = await fetch('/api/submit2', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const content = await response.json()

        console.log(content)
        if (content && content.data) {
            alert(content.data.tableRange)
        }

        setMessage('')
        setPhone('')
        setName('')
        setEmail('')

        console.log(form)
    }

    return (
        <main className='bg-gray-100 min-h-screen py-8'>
            <div className='max-w-5xl mx-auto py-16'>
                <form className='py-4 space-y-4' onSubmit={handleSubmit}>
                    <div className='flex items-center justify-center'>
                        <label htmlFor='name' className='sr-only'>Name</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} name='name' id='name' className='shadow-md p-4 focus:ring-indigo-300 focus:border-indigo-600 focus:text-white block w-64 sm:text-md border-gray-300 rounded-md' placeholder='Your Name' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor='phone' className='sr-only'>Phone</label>
                        <input type='number' value={phone} onChange={e => setPhone(e.target.value)} name='phone' id='phone' className='shadow-md p-4 focus:ring-indigo-300 focus:border-indigo-600 focus:text-white block w-64 sm:text-md border-gray-300 rounded-md' placeholder='Phone Number' />

                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor='email' className='sr-only'>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} name='email' id='email' className='shadow-md p-4 focus:ring-indigo-300 focus:border-indigo-600 focus:text-white block w-64 sm:text-md border-gray-300 rounded-md' placeholder='Email' />

                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor='message' className='sr-only'>Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} name='message' id='message' className='shadow-md p-4 focus:ring-indigo-300 focus:border-indigo-600 focus:text-white block w-64 sm:text-md focus: border-gray-300 rounded-md' placeholder='Message'></textarea>

                    </div>
                    <div className='flex items-center justify-center'>
                    <button type='submit' className='flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-textGreen'>Send Message</button>
                    </div>
                </form>


            </div>
        </main>
    )
}

export default Contact2