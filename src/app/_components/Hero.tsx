import Image from 'next/image'
import Retro1 from "../../../public/retroescavadeira01.jpg"

export function Hero() {
    return (
        <section className='text-white relative overflow-hidden' id='home'>
            
            <div className='absolute inset-0 w-full h-[550px]'>
                <Image
                    src={Retro1}
                    alt='Retroescavadeira'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60'
                />
                <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>

  
            <div className='relative container mx-auto pt-16 pb-16 md:pb-0 px-4'>
                <article className=' grid-cols-1 lg:grid-cols-2 gap-8 h-[400px] flex items-center'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold md:text-5xl leading-10'>
                            Base Forte – Construindo Bases Sólidas para o Futuro!
                        </h1>
                        <p className='lg:text-lg'>
                            Transformamos terrenos em oportunidades, com precisão, qualidade e compromisso!
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}
