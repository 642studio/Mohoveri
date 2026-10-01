import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto dura el servicio?",
    answer: "El servicio estándar es de 2 horas, pero podemos ajustarlo según tu evento.",
  },
  {
    question: "¿Qué necesito para apartar la fecha?",
    answer: "Un anticipo del 50%. El resto se liquida antes del evento.",
  },
  {
    question: "¿Los sombreros incluyen accesorios?",
    answer: "Sí, cada sombrero lleva accesorios básicos. Hay extras disponibles.",
  },
  {
    question: "¿Los precios incluyen viáticos?",
    answer: "No. Estos se calculan según ciudad y distancia.",
  },
  {
    question: "¿Pueden facturar?",
    answer: "Sí. En caso de requerir factura, se suma el IVA.",
  },
  {
    question: "¿Hay mínimo de piezas?",
    answer: "Sí, para dubetina y lona el mínimo es 51 piezas.",
  },
  {
    question: "¿Puedo pedir colores especiales?",
    answer: "Sí, podemos cotizar materiales y tonos específicos.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6">Preguntas frecuentes.</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-sand rounded-lg px-6 border-none">
              <AccordionTrigger className="font-serif text-left text-olive hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-olive/80 pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
