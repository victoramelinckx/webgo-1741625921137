
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Transforma Tus Ventas Online. Websites Impresionantes que Convienen."
              subheadline="Webgo crea sitios web optimizados para ventas, con funcionalidad y UX superiores, pero con un diseño profesional. Perfectos para quienes empiezan o quieren mejorar."
              cta1="Abandona Tu Plataforma Limitada"
              cta2="Comienza Gratis con Webgo"
            />

            <How
              step1Title="Regístrate Gratis"
              step1Desc="Empieza vendiendo online con nuestro sitio web gratuito."
              step2Title="Mejora tu Web"
              step2Desc="Optimiza tu sitio con nuestras opciones profesionales."
              step3Title="Impulsa tus Ventas"
              step3Desc="Atrae más clientes con una web funcional y atractiva."
            />

            <Aboutus
              headline="Webgo: Tu socio en ventas online"
              subheadline="Descripción"
              beneficio1="Arranca sin costos"
              beneficio2="Ofrecemos websites gratis para los que recién empiezan su camino en las ventas online."
              beneficiotitulo1="Más ventas, menos problemas"
              beneficiotitulo2="Eliminamos plataformas digitales deficientes y creamos websites profesionales para empresas que buscan aumentar sus ventas online."
            />

            <Services
              heading="Impulsa tus ventas online"
              description="Con Websites gratis para principiantes y Websites profesionales para aquellos que buscan mejorar, solucionamos el problema de plataformas digitales mal ejecutadas y poco profesionales."
              services={[{"name":"Website Gratis","icon":"gift","description":"Inicia tu camino en las ventas online sin costos inicial."},{"name":"Website Profesional","icon":"rocket","description":"Eleva tu negocio con un website optimizado y profesional."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad y atrae a más clientes potenciales."},{"name":"Diseño enfocado en ventas","icon":"dollar-sign","description":"Diseños que no solo lucen bien, sino que venden más."},{"name":"Experiencia de Usuario","icon":"user","description":"Websites fáciles de usar para mantener a tus clientes contentos."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Cómo puedo mejorar las ventas de mi negocio online con [services]?","respuesta":"En [companyName], utilizamos estrategias digitales probadas para aumentar tus ventas online. Resolvemos tus [challenges] y te ayudamos a alcanzar tus objetivos de negocio."},{"pregunta":"¿Puedo crear una website gratis para comenzar a vender online?","respuesta":"Sí, en [companyName] ofrecemos la posibilidad de crear una website gratis si estás empezando a vender online. Te ayudamos a establecer tu presencia en la web y atraer a tu [targetAudience]."},{"pregunta":"¿Cómo pueden mejorar mi website actual [companyName]?","respuesta":"Hacemos un análisis en profundidad de tu website actual y te proponemos cambios que mejorarán su rendimiento. Con [services] y Webgo, te garantizamos un website más atractivo y eficiente."},{"pregunta":"¿Son confiables las plataformas digitales que ofrecen?","respuesta":"Absolutamente. En [companyName], solo trabajamos con plataformas digitales de alta calidad y confiabilidad. Nuestro equipo de expertos garantiza que tus operaciones online sean seguras y eficientes."},{"pregunta":"¿Qué beneficios obtengo al contratar los servicios de [companyName]?","respuesta":"Al contratar nuestros [services], te beneficias de nuestro amplio conocimiento y experiencia en el mundo digital. Ayudamos a empresas como la tuya a superar sus [challenges] y a alcanzar el éxito online."}]}
            />

            <BookAppointment
              heading="¡No más plataformas digitales mediocres! Potencia tu negocio con Webgo"
              description="¿Estás empezando a vender en línea y te sientes abrumado? ¿O quizás ya tienes una web pero no está dando los resultados que esperas? ¡Estás en el lugar correcto! Con Webgo obtendrás una website gratuita si estás empezando o una website profesional si estás buscando mejorar. No te quedes atrás, tus [challenges] son nuestros desafíos. Contáctanos, ¡vamos a impulsar tu [targetAudience] juntos!"
            />
<Footer />
    </main>
  );
}
    