import { IconType } from "react-icons";
interface SocialLinkProps {
    url:string;
    ImageIcon:IconType;
  }

const SocialLink = ({ImageIcon, url}: SocialLinkProps) => {
    return(
        <a href={url}>
            <div className="flex w-16 bg-purple-600 p-2 text-center items-center rounded-full text-white">
                <ImageIcon size={50} />
            </div>
        </a>
    )
}

export {SocialLink};