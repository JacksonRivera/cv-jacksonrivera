
import  Image  from "next/image";
const Profile = () => {
    return(
        <section className="flex flex-col gap-1 items-center mb-3">
            <picture className="w-28 h-28 rounded-full bg-contain overflow-hidden	">
                <Image  width={140} height={140}  src="/imgs/LosVIbesReal.jpg" alt="Profile pic"/>
            </picture>

            <h4 className="font-semibold text-lg text-black"> Jackson Rivera</h4>
            <h5 className="text-base text-gray-600">Desarrollador Tecnico</h5>
        </section>
    )
}

export {Profile};