import InformationCard from "./InformationCard"

type Props = {
  title:string
}

export default function InformationCardList({title}:Props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <div >
        <InformationCard link="#" text="Informacion General" />
      </div>
    </div>
  )
}