export default function Card({
    description
} : {
    description: string
}) {
    return (
        <div className="bg-transparent border-[rgba(31,31,31)] border-[2px] p-10 rounded-3xl">
            {description}
        </div>
    )
}