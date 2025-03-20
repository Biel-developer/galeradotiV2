import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="banner">
      <div className="banner-container">
        <Image src="/imagem/banner.png" alt="Picture of the author" fill />
      </div>
    </div>
  );
}
