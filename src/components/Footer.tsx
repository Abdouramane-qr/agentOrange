import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
        'server-location'?: string;
        variant?: string;
        'avatar-image-url'?: string;
        'avatar-orb-color-1'?: string;
        'avatar-orb-color-2'?: string;
        'action-text'?: string;
        'start-call-text'?: string;
        'end-call-text'?: string;
        'expand-text'?: string;
        'listening-text'?: string;
        'speaking-text'?: string;
        'override-language'?: string;
        'override-prompt'?: string;
        'override-first-message'?: string;
      };
    }
  }
}

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-20 md:bottom-4 right-4 z-50">
      <elevenlabs-convai
        agent-id="agent_8301kaca8frjf1d9k4h913dv8rf2"
        server-location="us"
        variant="expanded"
        avatar-image-url="/yaam-avatar.png"
        avatar-orb-color-1="#FF7900"
        avatar-orb-color-2="#FFFFFF"
        action-text="Besoin d'assistance ?"
        start-call-text="Démarrer la conversation"
        end-call-text="Terminer"
        expand-text="Ouvrir le chat"
        listening-text="YAAM vous écoute…"
        speaking-text="YAAM est en train de répondre…"
        override-language="fr"


      ></elevenlabs-convai>
    </footer>
  );
};

export default Footer;
