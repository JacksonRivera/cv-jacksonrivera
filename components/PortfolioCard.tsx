import  Image  from "next/image";
import { IconType } from "react-icons";
import { SiWebmoney } from 'react-icons/si/' 
interface PortfolioCardProps {
    title: string;
    text: string;
    image: string;
  }

const PortfolioCard = ({title, text, image}: PortfolioCardProps) => {
    return(
        <div className="flex flex-col bg-white py-6 text-left items-start gap-2 pt-16 w-4/12">
            <picture className="w-full bg-contain h-96 flex justify-center items-center shadow-inner">
                <Image className="w-full bg-cover h-min mb-6 " width={100} height={100} src={image} alt={title}/>
            </picture>
            <h4 className="font-semibold text-lg text-black px-6"> {title}</h4>
            <h5 className="text-base text-gray-600 px-6">{text}</h5>
            <a href="" className="text-purple-900 text-lg px-6 font-semibold">Learn More...</a>
        </div>
    )
}

export {PortfolioCard};