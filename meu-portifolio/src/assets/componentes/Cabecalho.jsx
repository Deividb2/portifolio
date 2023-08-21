import React from 'react'
import Fundo from '../imgs/fundo.webp'
import Video from '../imgs/fundo1.mp4'

// bg-fundo bg-no-repeat bg-center bg-cover

export default function Cabecalho() {

    return (
        <>
            <header className='
                flex flex-col h-screen w-screen    bg-fundoMenu text-white relative'>

                <video className='absolute top-0 left-0 w-screen h-screen object-cover z-[-1]' autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>

                <div className='
                    flex items-center justify-center w-screen h-cabecalho_h font-principal text-white
                    md:flex-row md:justify-around md:h-20 md:bg-fundoMenu md:text-white
                    '>

                    <h1 className='hidden md:block md:font-bold md:text-vermelho'>Deivid Berreto.</h1>
                    <nav>
                        <ul className='
                        flex flex-col justify-around gap-2 text-center font-semibold
                        md:flex-row md:font-normal md:gap-3
                        '>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Sobre</a></li>
                            <li><a href='#'>Projetos</a></li>
                            <li><a href='#'>Redes</a></li>
                            <li><a href='#'>Contato</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='h-70vh flex flex-col justify-center ml-10 md:ml-28 md:gap-2'>
                    <h3>Desenvolvedor Front-End</h3>
                    <h2 className='text-4xl w-40vw font-semibold text-vermelho'>Olá, eu sou o Deivid Barreto</h2>
                </div>
            </header>
        </>
    )
}