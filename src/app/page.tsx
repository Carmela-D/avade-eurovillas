import { PublicLayout } from "@/components/layout/PublicLayout";
import { Hero } from "@/components/home/Hero";
import { ElProblema } from "@/components/home/ElProblema";
import { Bifurcacion } from "@/components/home/Bifurcacion";
import { LaPrueba } from "@/components/home/LaPrueba";
import { QueHacemos } from "@/components/home/QueHacemos";
import { PorQueUnirte } from "@/components/home/PorQueUnirte";
import { Transparencia } from "@/components/home/Transparencia";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <ElProblema />
      <Bifurcacion />
      <LaPrueba />
      <QueHacemos />
      <PorQueUnirte />
      <Transparencia />
      <CTAFinal />
    </PublicLayout>
  );
}
