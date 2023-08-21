import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import {BsTelephoneFill} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

export default function Rodape() {
    return (
        <>
            <footer className='p-10'>
                <div className='flex items-center justify-between border-t-2 p-1'>
                    <h2 className='font-bold text-2xl text-vermelho'>Deivid <span className='invisible md:visible'>Barreto.</span></h2>
                    <div className='text-white flex justify-evenly w-36'>
                        <a href='https://github.com/Deividb2' target='_blank' className='text-lg'><BsGithub /></a>

                        <a href='https://www.linkedin.com/in/deivid-barreto-789987259' target='_blank' className='text-lg'><BsLinkedin /></a>

                        <a href='mailto:deividbarreto57@gmeil.com' target='_blank' className='text-lg'><BiLogoGmail /></a>

                        <a href='https://api.whatsapp.com/send?phone=5521977201714' target='_blank' className='text-lg'><BsWhatsapp /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}