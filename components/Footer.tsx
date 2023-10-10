import {BsFillArrowUpCircleFill} from 'react-icons/bs/'


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Agrega desplazamiento suave (opcional)
      });
    };


const Footer = () => {
    return(
        <footer className="flex flex-col gap-2 items-center mb-3 bg-purple-600 h-23 w-full text-white py-4">
            <div className='flex gap-2 items-center'>
                <BsFillArrowUpCircleFill size={40} onClick={scrollToTop}/>
                <span className='font-bold'> Go Back!</span>
            </div>
            <h6>2023 All Rights Reserved JacksonRivera</h6>
        </footer>
    )
}

export {Footer};