import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment puis-je utiliser YAAM ?",
    answer: "YAAM est votre assistant virtuel intelligent. Il suffit de poser vos questions dans le chat et YAAM vous aidera avec les services Orange Burkina Faso."
  },
  {
    question: "Quels services sont disponibles ?",
    answer: "YAAM peut vous aider avec la recharge de crédit, la gestion de votre compte Orange Money, les forfaits internet, et bien plus encore."
  },
  {
    question: "Est-ce que YAAM est disponible 24/7 ?",
    answer: "Oui ! YAAM est disponible à tout moment pour répondre à vos questions et vous assister avec vos besoins."
  },
  {
    question: "Comment contacter le support client ?",
    answer: "Vous pouvez utiliser YAAM pour obtenir de l'assistance immédiate, ou appeler notre service client au 1011 pour parler à un conseiller."
  },
];

export const FAQSection = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Questions Fréquentes
        </h2>
        <p className="text-muted-foreground">
          Trouvez rapidement des réponses à vos questions
        </p>
      </div>
      
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-medium text-foreground">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
