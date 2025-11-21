import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "🎙️ Comment utiliser l'assistant vocal YAAM ?",
    answer: "C'est très simple ! Cliquez sur le bouton de l'assistant vocal en bas à droite de votre écran, autorisez l'accès au microphone si demandé, puis parlez naturellement en français. YAAM vous écoute et vous répond instantanément ! Essayez des questions comme 'Comment recharger mon crédit ?' ou 'C'est quoi Orange Money ?'"
  },
  {
    question: "Pourquoi utiliser l'assistant vocal plutôt que la navigation ?",
    answer: "L'assistant vocal YAAM est la façon la plus rapide et naturelle d'obtenir de l'aide ! Au lieu de chercher dans les menus, parlez simplement à YAAM. C'est comme discuter avec un conseiller Orange, disponible 24/7, qui comprend vos questions et vous donne des réponses précises et personnalisées."
  },
  {
    question: "Quels services sont disponibles ?",
    answer: "YAAM peut vous aider avec la recharge de crédit, la gestion de votre compte Orange Money, les forfaits internet, les promotions, les paiements en ligne, et bien plus encore. Pour une explication détaillée de chaque service, utilisez l'assistant vocal !"
  },
  {
    question: "L'assistant vocal fonctionne-t-il sans connexion internet ?",
    answer: "Non, l'assistant vocal YAAM nécessite une connexion internet active pour fonctionner. Cependant, vous pouvez toujours consulter les sections Services et FAQ hors ligne pour obtenir des informations de base."
  },
  {
    question: "Est-ce que YAAM est disponible 24/7 ?",
    answer: "Oui ! L'assistant vocal YAAM est disponible à tout moment, jour et nuit, 7 jours sur 7 pour répondre à vos questions et vous assister avec vos besoins Orange."
  },
  {
    question: "Comment contacter le support client ?",
    answer: "Pour une assistance immédiate, utilisez l'assistant vocal YAAM en cliquant sur le bouton en bas à droite. Pour parler à un conseiller humain, vous pouvez aussi appeler notre service client au 1011."
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
