import Image from 'next/image'
import Retro1 from "../../../public/retroescavadeira01.jpg"

export function Hero() {
    return (
        <section className="text-white relative overflow-hidden flex items-center justify-center text-center min-h-screen" id="home">
            
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={Retro1}
                    alt='Retroescavadeira'
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className='object-cover opacity-60'
                />
                <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>

  
            <div className='relative z-10 flex flex-col items-center justify-center w-full px-4'>
            <article className=' grid-cols-1 lg:grid-cols-2 gap-8 h-[400px] flex items-center'>
                <div className="max-w-3xl space-y-6">                  
                        <h1 className='text-6xl font-bold md:text-7xl'>
                            Base Forte
                        </h1>
                        <h1 className='text-3xl font-semibold md:text-4xl'>Construindo Bases Sólidas para o Futuro!</h1>
                        <p className='lg:text-lg'>
                            Transformamos terrenos em oportunidades, com precisão, qualidade e compromisso!
                        </p>
                    </div>
                    </article>
            </div>
        </section>
    )
}
