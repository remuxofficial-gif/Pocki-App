import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { TrendingUp, Plus, Wallet, GraduationCap, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { portfolioPerformance } from "../../data/studentData";
import { useNavigate } from "react-router";
import pockiLogo from "@/assets/ad0631c9d9463a72bdd55e1fe3fd648bbe78a280.png";

export function DashboardScreen() {
  const navigate = useNavigate();
  const [roundUpEnabled, setRoundUpEnabled] = useState(true);

  const portfolioValue = 127.50;
  const dailyGain = 2.35;
  const gainPercent = 1.88;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary to-pink-400 text-white px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Good Afternoon, Alex</h1>
          <img src={pockiLogo} alt="Pocki" className="w-10 h-10" />
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <p className="text-sm text-white/80 mb-2">Total Portfolio Value</p>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">£{portfolioValue.toFixed(2)}</h2>
              <div className="flex items-center gap-2 text-accent">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">
                  +£{dailyGain.toFixed(2)} ({gainPercent}%) today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {/* Chart Card */}
        <Card className="shadow-lg mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Growth Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={portfolioPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `£${value}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#E85D75" 
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => navigate('/app/add-money')}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Add Money</span>
            </button>
            
            <button 
              onClick={() => navigate('/app/invest')}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium">Invest</span>
            </button>
            
            <button 
              onClick={() => navigate('/app/learn')}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-sm font-medium">Learn</span>
            </button>
          </div>
        </div>

        {/* Round-Up Card */}
        <Card className="mb-6 border-2 border-accent/20 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Round-Up Investing</h4>
                <p className="text-sm text-muted-foreground">Auto-invest your spare change</p>
              </div>
              <Switch
                checked={roundUpEnabled}
                onCheckedChange={setRoundUpEnabled}
              />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Recent Activity</h3>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Invested in Aggressive Portfolio</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <p className="font-semibold text-sm">£25.00</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Added funds</p>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                </div>
                <p className="font-semibold text-sm">£50.00</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Round-up investment</p>
                    <p className="text-xs text-muted-foreground">1 week ago</p>
                  </div>
                </div>
                <p className="font-semibold text-sm">£3.47</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}