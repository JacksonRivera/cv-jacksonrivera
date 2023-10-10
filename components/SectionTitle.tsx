interface SectionTitleProps {
    title: string;
    subtitle: string;
  }

const SectionTitle = ({title, subtitle}: SectionTitleProps) => {
    return(
        <div className="w-max align-middle justify-center items-center my-5">
            <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
            <h2 className="text-lg text-zinc-500 max-w-2xl text-center">{subtitle}</h2>
        </div>
    )
}

export {SectionTitle};