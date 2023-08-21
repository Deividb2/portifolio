import React from 'react'

export default function Sobre() {

    return (
        <>
            <section className='
                h-auto w-auto text-white px-7 py-10'>
                <div className='flex flex-col gap-3 mb-5 items-center
                    md:flex-row md:justify-around md:h-70vh
                    lg:justify-center lg:gap-10'>
                    <h2 className='font-bold text-4xl text-vermelho pb-3 md:hidden'>Sobre mim</h2>

                    <div className='w-72 h-72 bg-perfil2 bg-no-repeat bg-center bg-cover rounded-full
                        md:h-64 md:w-64'>
                    </div>

                    <div className='w-96'>
                        <h2 className='hidden md:block font-bold text-4xl text-vermelho pb-3'>Sobre mim</h2>
                        <p className='text-cinza'>Com apenas 18 anos de idade sou um apaixonado desenvolvedor front-end. Minha jornada na programação teve início aos 17 anos e desde então venho explorando o vasto mundo do desenvolvimento web. Com um olhar criativo e atenção aos detalhes, dedico-me a transformar conceitos em interfaces visuais cativantes e funcionais. Estou entusiasmado para continuar aprendendo, crescendo e contribuindo para a evolução do cenário digital.</p>
                    </div>
                </div>

                <div className='flex justify-center flex-wrap gap-4'>
                    <div className='w-28 h-28 rounded-sm bg-html bg-no-repeat bg-center bg-cover'></div>
                    <div className='w-28 h-28 rounded-sm bg-css bg-no-repeat bg-center bg-cover'></div>
                    <div className='w-28 h-28 rounded-sm bg-js bg-no-repeat bg-center bg-cover'></div>
                    <div className='w-28 h-28 rounded-sm bg-react bg-no-repeat bg-center bg-cover'></div>
                    <div className='w-28 h-28 rounded-sm bg-tailwind bg-no-repeat bg-center bg-cover'></div>
                </div>
            </section>
        </>
    )
}