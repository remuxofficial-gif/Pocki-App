import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronRight, User, Building2, GraduationCap, Bell, HelpCircle, Settings, LogOut, Shield } from "lucide-react";
import pockiLogo from "@/assets/ad0631c9d9463a72bdd55e1fe3fd648bbe78a280.png";

export function ProfileScreen() {
  const menuItems = [
    {
      section: "Account",
      items: [
        { icon: User, label: "Personal Information", description: "Name, email, password" },
        { icon: Building2, label: "Linked Bank", description: "Manage payment methods" },
      ]
    },
    {
      section: "Preferences",
      items: [
        { icon: Bell, label: "Notifications", description: "Manage your alerts" },
        { icon: Settings, label: "App Settings", description: "Customize your experience" },
      ]
    },
    {
      section: "Support",
      items: [
        { icon: HelpCircle, label: "Help & Support", description: "FAQs and contact us" },
        { icon: Shield, label: "Privacy & Security", description: "Data and safety settings" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary to-pink-400 text-white px-6 pt-12 pb-12 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <img src={pockiLogo} alt="Pocki" className="w-10 h-10" />
        </div>
        
        {/* User Info Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                A
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg text-white mb-1">Alex Johnson</h2>
                <p className="text-sm text-blue-100">alex.johnson@university.ac.uk</p>
              </div>
            </div>
            
            {/* Student Badge */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <Badge className="bg-accent/20 text-white border-accent/30">
                <GraduationCap className="w-4 h-4 mr-1" />
                Verified Student
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="px-6 -mt-6">
        {/* Menu Sections */}
        {menuItems.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-6">
            <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
              {section.section}
            </h3>
            <Card>
              <CardContent className="p-0">
                {section.items.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    className={`w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors ${
                      itemIdx !== section.items.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Account Stats */}
        <Card className="mb-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-5">
            <h3 className="font-semibold mb-4">Account Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                <p className="font-bold">Oct 2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                <p className="font-bold">£127.50</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Lessons Completed</p>
                <p className="font-bold">2 of 6</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Round-Up Savings</p>
                <p className="font-bold">£12.35</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full mb-6 h-14 rounded-2xl text-destructive border-destructive/30 hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </Button>

        {/* App Version */}
        <p className="text-center text-xs text-muted-foreground pb-6">
          Version 1.0.0
        </p>
      </div>
    </div>
  );
}