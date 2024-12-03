import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';

const Admin = () => {
    const [name, setName] = useState('');
    const [img, setImage] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    // Handle form submission
    const productSubmit = () => {
        const data = { name, img, date, description }; // Use state values

        axios.post('https://67433913b7464b1c2a640b61.mockapi.io/shopping-uzum/shopping', data)
            .then(res => {
                console.log('Response:', res);
                alert('Product submitted successfully!');
            })
            .catch(err => {
                console.error('Error:', err);
                alert('Failed to submit the product.');
            });
    };

    return (
        <div className="container">
            <h1 className="admin-title">Admin Page</h1>
            <div className="admin-input">
                <input 
                    type="text" 
                    onChange={e => setName(e.target.value)} 
                    value={name} 
                    placeholder="Name" 
                />
                <input 
                    type="text" 
                    onChange={e => setImage(e.target.value)} 
                    value={img} 
                    placeholder="Image URL" 
                />
                <input 
                    type="date" 
                    onChange={e => setDate(e.target.value)} 
                    value={date} 
                    placeholder="Date" 
                />
                <textarea 
                    onChange={e => setDescription(e.target.value)} 
                    value={description} 
                    placeholder="Description" 
                ></textarea>
                <button onClick={productSubmit}>submit</button>
            </div>
        </div>
    );
};

export default Admin;