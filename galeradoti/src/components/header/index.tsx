import Image from "next/image";
import "./header.css"


export function Header() {
    return (
        <header>
           <div className="logo">
                <Image
                    src="/imagem/logo.png"
                    alt="Picture of the author"
                    fill // Ocupa todo o espaço do container
                    style={{ objectFit: "cover" }} // Mantém o aspecto visual
                />
           </div>
        </header>
    )
}