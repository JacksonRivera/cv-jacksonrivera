interface EducationCardProps {
    place: string;
    role: string;
    time: string;
    title: string;
    description: string;
  }

const EducationCard = ({place, role, time, title, description}: EducationCardProps) => {
    return(
        <div className="w-full flex p-8 flex-wrap flex-1 bg-white border-b-2 border-b-slate-100">

            <div className="w-2/5 flex flex-col gap-3 text-left">
                <h4 className="font-semibold text-lg text-black"> {place}</h4>
                <div className="flex gap-6">
                    <h5 className="text-base text-black">{role}</h5>
                    <p className="bg-violet-500 px-2 text-white">{time}</p>
                </div>
            </div>

            <div className="w-3/5 flex flex-col gap-3 text-left">
                <h4 className="font-semibold text-lg text-black"> {title}</h4>
                <p className="text-base text-gray-800">{description}</p>
            </div>

        </div>
    )
}

export {EducationCard};