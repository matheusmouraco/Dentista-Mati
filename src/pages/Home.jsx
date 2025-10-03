
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Smile, Target, BookOpen, MessageSquare, Search, Award, Smartphone, Eye, Calendar, Camera } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20meu%20site%20odontol%C3%B3gico.";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b5055e41b_portfolio-1-a-50-Prancheta-10.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a658a5391_portfolio-1-a-50-Prancheta-18-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/889dc1e23_portfolio-51-a-100-Prancheta-23.png",
  ];

  return (
    <>
      <Toaster />
      <style>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/93f187178_dentista-examinando-uma-paciente-sexo-feminino-com-ferramentas.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .cta-bg {
          background-image: linear-gradient(to top, rgba(255, 0, 77, 0.1), transparent);
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dea0bd808_jovem-paciente-sexo-feminino-visitando-o-consultorio-dentista.jpg');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Smile className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Seu consultório já transforma sorrisos. Agora é hora do seu site transformar a sua presença online.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Hoje, os pacientes pesquisam antes de marcar. Eles comparam, avaliam e decidem em segundos se vão confiar o sorriso a você — ou a outro profissional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Um site de verdade não é um “cartão de visitas online”. É o seu primeiro atendimento.</h2>
             <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">Na Mati Studio, criamos sites profissionais e estratégicos para dentistas e clínicas odontológicas, com um único objetivo: fazer com que o paciente ideal veja o seu site e pense: “É aqui que eu quero ser atendido.”</p>
          </div>
        </section>
        
        {/* What your site will do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md::text-4xl font-bold text-white">O que seu site precisa fazer — e o que o nosso entrega:</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {icon: Eye, text: "Transmite autoridade e confiança nos primeiros segundos"},
                        {icon: Smartphone, text: "Apresenta seus serviços de forma clara e moderna"},
                        {icon: Calendar, text: "Gera agendamentos com formulários e WhatsApp"},
                        {icon: Award, text: "Valoriza sua marca pessoal ou institucional"},
                        {icon: Smartphone, text: "Funciona bem no celular e carrega rápido"},
                        {icon: Search, text: "Aparece no Google quando pacientes procuram por você"},
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-[#FF004D]"/>
                            </div>
                            <p className="text-zinc-300 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Criamos sites sob medida para:</h2>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {["Clínicas Odontológicas", "Dentistas Autônomos", "Especialistas (Ortodontia, Implantes, etc.)", "Franquias Odontológicas"].map(specialty => (
                      <div key={specialty} className="bg-zinc-800 text-zinc-200 rounded-full px-5 py-2 text-md font-medium flex items-center gap-2">
                        <Smile className="w-4 h-4 text-[#FF004D]"/> {specialty}
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* Services Structure */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-white mb-12">Estrutura do site que entregamos</h2>
                <div className="grid md:grid-cols-1 gap-10">
                    <Card className="bg-zinc-900 border-zinc-800 text-white p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <BookOpen className="w-12 h-12 text-[#FF004D] shrink-0"/>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Site Institucional Completo</h3>
                                <p className="text-zinc-400 mb-4">Indicado para clínicas, consultórios ou equipes multidisciplinares.</p>
                                <ul className="columns-1 md:columns-2 space-y-2 list-disc list-inside text-zinc-300 gap-x-8">
                                    <li>Página inicial com identidade visual</li>
                                    <li>Página “Sobre” com sua história</li>
                                    <li>Descrição detalhada dos serviços</li>
                                    <li>Galeria de fotos da estrutura</li>
                                    <li>Contato com mapa e WhatsApp</li>
                                    <li>Depoimentos de pacientes</li>
                                    <li>Blog opcional para autoridade</li>
                                    <li>SEO local para buscas na cidade</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

         {/* Image Section */}
        <section id="images" className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <Camera className="w-12 h-12 text-[#FF004D] mx-auto mb-4"/>
                    <h2 className="text-4xl font-bold text-white">Imagens que seu site precisa ter</h2>
                    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Essas imagens fazem toda a diferença na percepção visual do paciente e aumentam consideravelmente a taxa de agendamentos.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {[ "Fotos profissionais do consultório", "Imagens da equipe com jaleco", "Equipamentos e diferenciais", "Detalhes de conforto e higiene", "Ilustrações dos procedimentos", "Resultados (Antes e Depois)"].map(item => (
                        <div key={item} className="bg-zinc-800 p-4 rounded-lg">
                            <p className="text-zinc-200 font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Differentiators */}
        <section id="differentiators" className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-white mb-12">Diferenciais do seu site com a Mati Studio</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                        "Design moderno, elegante e 100% sob medida",
                        "Redação com copywriting humanizado e estratégico",
                        "SEO técnico e local para aparecer nas buscas",
                        "Integração com WhatsApp, Google Maps e CRM",
                        "Suporte pós-entrega (opcional)",
                        "Painel simples para você mesmo atualizar"
                    ].map(item => (
                        <div key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-[#FF004D] mt-1 shrink-0"/>
                            <span className="text-zinc-300 text-lg">{item}</span>
                        </div>
                    ))}
                 </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Quem confia na gente</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Portfolio case ${i + 1}`} className="w-full h-auto object-cover"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">O seu atendimento começa antes da consulta. Começa no clique.</h2>
                <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">Vamos colocar sua autoridade profissional no lugar certo: no topo das buscas e no coração do paciente.</p>
                <div className="mt-10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site odontológico agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites profissionais para dentistas que querem ser referência no digital.</p>
        </div>
      </footer>
    </>
  );
}
