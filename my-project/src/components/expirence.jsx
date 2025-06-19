import React from 'react';
import './expirence.css';

function Expirence(){
    return(
        <>
            <main id='experience' className='experience'>
                <div className='card-experience'>
                    <h1>Work Experience</h1>
                    <div className='card'>
                        <h2 className='card-tile'>Desenvolvedor Backend Junior</h2>
                        <label className='card-sub'>Compre Sua Peça | Jan 2025 - Atual</label>
                        <ul className='card-list'>
                            <li>
                                Integrações com a VTEX usando NodeJS e microsserviços na AWS
                                <ul>
                                    <li>Desenvolvimento de APIs para integração com a plataforma VTEX</li>
                                    <li>Implementação de microsserviços utilizando NodeJS</li>
                                    <li>Hospedagem e deploy dos serviços na AWS</li>
                                </ul>
                            </li>
                            <li>
                                Hub de integrações orientado a eventos
                                <ul>
                                    <li>Arquitetura de microsserviços orientada a eventos</li>
                                    <li>Desenvolvimento em Typescript (NestJS e Express)</li>
                                    <li>Serviços em Python (Flask) para integrações específicas</li>
                                    <li>Utilização de SQS e SNS para mensageria</li>
                                    <li>Containerização com Docker e deploy via ECR e App Runner</li>
                                    <li>Persistência de dados com DynamoDB</li>
                                </ul>
                            </li>
                            <li>
                                Plataforma de gestão de leads
                                <ul>
                                    <li>Desenvolvimento de backend em Typescript (Express)</li>
                                    <li>Integração com landing pages e MetaAds para captação de leads</li>
                                    <li>Armazenamento e consulta de dados no DynamoDB</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Expirence;