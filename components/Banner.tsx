
import  Image  from "next/image";

interface BannerProps {
    title: string;
    subtitle: string;
    image?:string;
    button?:string;
  }

const Banner = ({title, subtitle, image, button}: BannerProps) => {
    return(
        <div className="flex w-full bg-white pl-12">
            <div className="w-4/6 flex flex-col align-left justify-center gap-6 pr-80">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <h2 className="text-xl text-zinc-600">{subtitle}</h2>
                <button className="w-24 text-white bg-purple-800 px-4 py-2 rounded-lg">{button}</button>
            </div>
            <div className="w-2/6 flex flex-col align-left justify-start ">
                <Image className="w-full bg-cover" width={1000} height={0}  src="/imgs/fotobanner.png" alt="Banner pic"/>
            </div>
        </div>
    )
}

export {Banner};