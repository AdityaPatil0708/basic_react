interface CardProps {
    imageSrc: string;
    imageAlt?: string;
    text: string;
    name: string;
    role: string;
}

export default function Card({ imageSrc, text, name, role }: CardProps) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border flex flex-row gap-5 p-5 rounded-md w-120">
                <div>
                    <img src={imageSrc} className="rounded-full h-30 w-120" />
                </div>
                <div className="flex flex-col">
                    <p className="mb-1">{text}</p>
                    <div className="text-right">
                        {name} <br />
                        <span className="font-bold">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}