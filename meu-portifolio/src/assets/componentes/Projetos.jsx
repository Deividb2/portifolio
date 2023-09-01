import React from 'react'

export default function Projetos() {
    return (
        <>
            <section className='h-auto flex flex-col items-center gap-3 p-20'>
                <h2 className='font-bold text-4xl text-vermelho'>Projetos</h2>
                <div className='flex flex-col justify-center items-center gap-3 w-screen md:flex-row md:flex-wrap'>

                    <div className='w-64 bg-slate-400 flex flex-col rounded-md border-vermelho border-4'>
                        <div className='h-40 rounded-t-md bg-academia bg-no-repeat bg-center bg-cover border-b-2'></div>
                        <div className='p-2 bg-current'>
                            <h3 className='font-bold text-vermelho'>FITNESS GYM</h3>
                            <p className='text-cinza'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nesciunt repellendus harum illo reiciendis consequuntur sequi!</p>
                        </div>
                    </div>

                    <div className='w-64 bg-slate-400 flex flex-col rounded-md border-vermelho border-4'>
                        <div className='h-40 rounded-t-md bg-barbearia bg-no-repeat bg-center bg-cover border-b-2'></div>
                        <div className='p-2 bg-current'>
                            <h3 className='font-bold text-vermelho'>Cafeteria</h3>
                            <p className='text-cinza'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nesciunt repellendus harum illo reiciendis consequuntur sequi!</p>
                        </div>
                    </div>

                    <div className='w-64 bg-slate-400 flex flex-col rounded-md border-vermelho border-4'>
                        <div className='h-40 rounded-t-md bg-barbearia bg-no-repeat bg-center bg-cover border-b-2'></div>
                        <div className='p-2 bg-current'>
                            <h3 className='font-bold text-vermelho'>BarberShop</h3>
                            <p className='text-cinza'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nesciunt repellendus harum illo reiciendis consequuntur sequi!</p>
                        </div>
                    </div>
                </div>

                <a href='#'>Ver mais</a>
            </section>
        </>
    )
}