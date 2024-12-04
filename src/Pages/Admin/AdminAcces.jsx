import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAccess = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const correctPassword = "admin123"; // Укажите ваш пароль

    const handleLogin = () => {
        if (password === correctPassword) {
            navigate('/admin'); // Перенаправление на страницу администратора
        } else {
            setError('Неверный пароль');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h3>Введите пароль для доступа к странице администратора</h3>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
            />
            <br />
            <button
                onClick={handleLogin}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                Войти
            </button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
};

export default AdminAccess;
