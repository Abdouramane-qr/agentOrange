import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex items-center justify-around w-full border-b border-border bg-card">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-4 px-4 relative",
              "transition-all duration-300 ease-out",
              "hover:bg-accent/50",
              isActive && "font-semibold text-primary"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={cn(
              "transition-transform duration-300",
              isActive && "scale-110"
            )}>
              {tab.icon}
            </span>
            <span className="hidden sm:inline">{tab.label}</span>
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-orange animate-fade-in" />
            )}
          </button>
        );
      })}
    </div>
  );
};
