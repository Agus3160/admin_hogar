
import InformationCard from "@/components/InformationCardList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      <h1>Hogar Sagrado Corazon</h1>

      <InformationCard title="Informacion de la Entidad" />
      <InformationCard title="Funcionarios" />
      <InformationCard title="Inventario" />
      <InformationCard title="Balance del año anterior" />

    </main>
  );
}
