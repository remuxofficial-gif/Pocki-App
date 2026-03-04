import { Outlet, NavLink } from "react-router";
import { Home, TrendingUp, BookOpen, User } from "lucide-react";

export function MobileLayout() {
  const navItems = [
    { to: "/app", label: "Home", icon: Home },
    { to: "/app/invest", label: "Invest", icon: TrendingUp },
    { to: "/app/learn", label: "Learn", icon: BookOpen },
    { to: "/app/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="flex flex-col h-screen bg-background max-w-md mx-auto">
      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg max-w-md mx-auto">
        <div className="flex items-center justify-around h-20">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-6 h-6 mb-1 ${isActive ? 'scale-110' : ''} transition-transform`} />
                  <span className="text-xs font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
