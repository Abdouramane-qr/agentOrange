import { Smartphone, Wallet, Wifi, Gift, CreditCard, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Recharge de crédit",
    description: "Rechargez votre crédit Orange facilement et rapidement",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Orange Money",
    description: "Envoyez et recevez de l'argent en toute sécurité",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Forfaits Internet",
    description: "Découvrez nos offres internet mobile et 4G",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Promotions",
    description: "Profitez de nos offres spéciales et promotions",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Paiements",
    description: "Payez vos factures et abonnements en ligne",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Service Client",
    description: "Une équipe dédiée à votre service 24/7",
  },
];

export const ServicesSection = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Nos Services
        </h2>
        <p className="text-muted-foreground">
          Découvrez tous les services Orange Burkina Faso
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer border-border bg-card group"
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-orange flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
