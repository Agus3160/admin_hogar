import SectionList from "@/components/SectionList";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 m-8">
      <h1 className="">Hogar Sagrado Corazon</h1>
      <div>
        <div className="flex "> 
          <p className="italic">Imagina un hogar para niñas ubicado en medio de un tranquilo vecindario, con un cálido y acogedor ambiente que emana amor y seguridad. Este lugar es mucho más que un simple refugio; es un santuario donde las risas de las niñas llenan cada rincón, donde los abrazos reconfortantes son tan comunes como el sol que entra por las ventanas. Las habitaciones están decoradas con colores alegres y muebles confortables, creando un espacio donde cada niña puede sentirse verdaderamente en casa. Además, hay áreas de juego al aire libre donde las risas y la diversión nunca faltan. En este hogar para niñas, el amor y el cuidado son los pilares fundamentales, y cada niña es recibida con los brazos abiertos y el calor de una familia extendida.</p>
        </div>
      </div>

      <SectionList />

    </main>
  );
}
