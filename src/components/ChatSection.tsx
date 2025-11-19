import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ChatSection = () => {
  const [message, setMessage] = useState("");
  
  const handleSend = () => {
    if (message.trim()) {
      // Placeholder for chat functionality
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in h-full flex flex-col">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-primary" />
          YAAM - Assistant Virtuel
        </h2>
        <p className="text-muted-foreground">
          Bonjour ! Je suis YAAM, votre assistant virtuel Orange. Comment puis-je vous aider aujourd'hui ?
        </p>
      </div>

      <div className="flex-1 bg-card border border-border rounded-lg p-4 min-h-[400px] flex flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto mb-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-orange flex items-center justify-center text-white font-semibold flex-shrink-0">
              Y
            </div>
            <div className="flex-1 bg-accent rounded-lg p-3">
              <p className="text-sm text-foreground">
                Bienvenue ! Je suis là pour vous aider avec tous vos besoins Orange Burkina Faso. 
                Posez-moi vos questions sur les recharges, Orange Money, les forfaits internet, et plus encore.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Écrivez votre message..."
            className="flex-1"
          />
          <Button 
            onClick={handleSend}
            className="bg-gradient-orange text-white hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
