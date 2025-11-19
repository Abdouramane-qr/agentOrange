import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { FAQSection } from "@/components/FAQSection";
import { ServicesSection } from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 md:ml-20 pb-20 md:pb-0">
        {/* Header */}
        <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Y</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">YAAM</h1>
                  <p className="text-xs text-muted-foreground">Assistant Virtuel Orange</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-gradient-orange text-white rounded-xl p-8 shadow-elegant"
                >
                  <h2 className="text-2xl font-bold mb-2">Bienvenue sur YAAM</h2>
                  <p className="text-white/90">
                    Votre assistant virtuel Orange Burkina Faso est là pour vous aider avec tous vos services.
                  </p>
                </motion.div>
                <ServicesSection />
              </motion.div>
            )}
            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ServicesSection />
              </motion.div>
            )}
            {activeTab === "faq" && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FAQSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* ElevenLabs Assistant Footer */}
      <Footer />
    </div>
  );
};

export default Index;
