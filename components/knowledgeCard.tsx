import  Image  from "next/image";
import { IconType } from "react-icons";
import { SiWebmoney } from 'react-icons/si/' 
interface KnowledgeCardProps {
    title: string;
    subtitle: string;
    ImageIcon:IconType;
  }

const KnowledgeCard = ({title, subtitle, ImageIcon}: KnowledgeCardProps) => {
    return(
        <div className="flex flex-col bg-white p-10 text-center items-center gap-2">
            <ImageIcon size={80} />
            <h4 className="font-semibold text-lg text-black"> {title}</h4>
            <h5 className="text-base text-gray-600">{subtitle}</h5>
        </div>
    )
}

export {KnowledgeCard};