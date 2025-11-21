import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "../tutorial.css";

export const useTutorial = (activeTab: string, onTabChange: (tab: string) => void) => {
  useEffect(() => {
    // Check if tutorial has been completed
    const tutorialCompleted = localStorage.getItem("yaam-tutorial-completed");

    if (!tutorialCompleted) {
      // Wait a bit for the page to fully render
      const timer = setTimeout(() => {
        startTutorial();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const startTutorial = () => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      nextBtnText: 'Suivant',
      prevBtnText: 'Précédent',
      doneBtnText: 'Terminer',
      progressText: 'Étape {{current}} sur {{total}}',
      onDestroyed: () => {
        // Mark tutorial as completed
        localStorage.setItem("yaam-tutorial-completed", "true");
        // Return to home tab
        onTabChange("home");
      },
      steps: [
        {
          element: 'body',
          popover: {
            title: 'Bienvenue sur YAAM ! 👋',
            description: 'Votre Assistant Virtuel Orange Burkina Faso. Laissez-moi vous montrer la fonctionnalité la plus importante de notre application.',
            side: "center",
            align: 'center'
          }
        },
        {
          element: '[data-tutorial="assistant"]',
          popover: {
            title: '🎙️ Assistant Vocal YAAM - Votre Meilleur Allié !',
            description: 'C\'est LA fonctionnalité clé ! Cliquez sur ce bouton pour parler directement avec YAAM. Posez vos questions sur Orange Money, les recharges, les forfaits, ou tout autre service. L\'assistant vocal vous répond instantanément en français !',
            side: "left",
            align: 'end'
          }
        },
        {
          element: '[data-tutorial="assistant"]',
          popover: {
            title: '💡 Comment utiliser l\'assistant vocal ?',
            description: '1️⃣ Cliquez sur le bouton orange ci-dessous\n2️⃣ Autorisez le micro (si demandé par votre navigateur)\n3️⃣ Parlez naturellement en français\n4️⃣ YAAM vous répond instantanément avec une voix naturelle !\n\nExemples de questions :\n• "Comment recharger mon crédit ?"\n• "C\'est quoi Orange Money ?"\n• "Quels sont vos forfaits internet ?"',
            side: "left",
            align: 'end'
          }
        },
        {
          element: '[data-tutorial="assistant"]',
          popover: {
            title: '🎯 Essayez maintenant !',
            description: '👉 ALLEZ-Y ! Cliquez sur le bouton de l\'assistant vocal maintenant pour le tester.\n\nVous pouvez mettre le tutoriel en pause et essayer de parler à YAAM. Quand vous aurez fini, cliquez sur "Suivant" pour continuer le tutoriel.\n\nN\'ayez pas peur, c\'est la meilleure façon d\'apprendre ! 😊',
            side: "left",
            align: 'end',
            showButtons: ['next', 'previous'],
            onNextClick: () => {
              driverObj.moveNext();
            }
          }
        },
        {
          element: '[data-tutorial="sidebar"]',
          popover: {
            title: 'Navigation',
            description: 'Utilisez cette sidebar pour naviguer entre les sections : Accueil, Services et FAQ. Mais rappelez-vous : l\'assistant vocal peut répondre plus rapidement à vos questions !',
            side: "right",
            align: 'start'
          }
        },
        {
          element: '[data-tutorial="home-tab"]',
          popover: {
            title: 'Accueil',
            description: 'L\'accueil vous présente une vue d\'ensemble de nos services Orange.',
            side: "right",
            align: 'center'
          }
        },
        {
          element: '[data-tutorial="services-tab"]',
          popover: {
            title: 'Services',
            description: 'Découvrez tous les services Orange : recharge de crédit, Orange Money, forfaits internet et bien plus !',
            side: "right",
            align: 'center',
            onNextClick: () => {
              onTabChange("services");
              driverObj.moveNext();
            }
          }
        },
        {
          element: '[data-tutorial="services-grid"]',
          popover: {
            title: 'Nos 6 Services Principaux',
            description: 'Explorez nos services en détail. Mais astuce : demandez à l\'assistant vocal "Quels sont vos services ?" pour une explication personnalisée !',
            side: "top",
            align: 'center'
          }
        },
        {
          element: '[data-tutorial="faq-tab"]',
          popover: {
            title: 'Questions Fréquentes',
            description: 'Consultez notre FAQ pour les questions courantes. Ou utilisez l\'assistant vocal pour des réponses instantanées et personnalisées !',
            side: "right",
            align: 'center',
            onNextClick: () => {
              onTabChange("faq");
              driverObj.moveNext();
            }
          }
        },
        {
          element: '[data-tutorial="theme-toggle"]',
          popover: {
            title: '🌓 Mode Clair / Sombre',
            description: '👉 Cliquez sur ce bouton pour basculer entre le mode clair et le mode sombre.\n\nEssayez-le maintenant ! Le thème change instantanément selon vos préférences visuelles.\n\nVotre choix est automatiquement sauvegardé. 🎨',
            side: "left",
            align: 'center',
            showButtons: ['next', 'previous'],
            onPrevClick: () => {
              onTabChange("services");
              driverObj.movePrevious();
            },
            onNextClick: () => {
              driverObj.moveNext();
            }
          }
        },
        {
          element: '[data-tutorial="assistant"]',
          popover: {
            title: '🚀 Prêt à commencer ?',
            description: 'N\'oubliez pas : la façon la plus simple et rapide d\'obtenir de l\'aide est de cliquer ici et de parler à YAAM ! Essayez-le maintenant pour découvrir la magie de l\'assistant vocal.',
            side: "left",
            align: 'end',
            onPrevClick: () => {
              onTabChange("faq");
              driverObj.movePrevious();
            }
          }
        },
        {
          element: 'body',
          popover: {
            title: 'Vous êtes prêt ! 🎉',
            description: 'Rappelez-vous : pour toute question, utilisez d\'abord l\'assistant vocal YAAM en bas à droite. C\'est rapide, simple et disponible 24/7 !',
            side: "center",
            align: 'center'
          }
        }
      ]
    });

    driverObj.drive();
  };

  return { startTutorial };
};
