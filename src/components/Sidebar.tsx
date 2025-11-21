import { motion } from "framer-motion";
import { Home, Grid3x3, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "Accueil" },
    { id: "services", icon: Grid3x3, label: "Services" },
    { id: "faq", icon: MessageCircle, label: "FAQ" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside data-tutorial="sidebar" className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-primary flex-col items-center py-6 gap-6 z-20">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center",
                "transition-all duration-300 ease-out",
                "hover:bg-white/10",
                isActive ? "bg-white text-primary shadow-elegant" : "text-white"
              )}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
              data-tutorial={`${tab.id}-tab`}
            >
              <motion.div
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            </motion.button>
          );
        })}
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-primary border-t border-primary/20 z-20 pb-safe">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center py-3 px-2",
                  "transition-all duration-300",
                  isActive ? "text-white" : "text-white/60"
                )}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
                data-tutorial={`${tab.id}-tab`}
              >
                <motion.div
                  animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-6 h-6 mb-1" />
                </motion.div>
                <span className="text-xs font-medium">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
