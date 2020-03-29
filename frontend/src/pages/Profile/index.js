import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import { FiPower } from 'react-icons/fi';

export default function Profile() {
    return (
        <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be the Hero"/>
            <span>Bem vinda, APAD</span>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button">
                <FiPower size={18} color="#e02041"/>
            </button>
        </header>
        </div> 
    );
}


// 01:01:18
