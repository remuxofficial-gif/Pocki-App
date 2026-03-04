import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { portfolios, Portfolio } from "../../data/studentData";
import { toast } from "sonner";
import { TrendingUp, Shield, Target } from "lucide-react";

export function InvestScreen() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);
  const [investAmount, setInvestAmount] = useState("");

  const handleInvest = () => {
    if (!selectedPortfolio || !investAmount) return;
    
    const amount = parseFloat(investAmount);
    if (amount < 1) {
      toast.error("Minimum investment is £1");
      return;
    }

    toast.success(
      `Investment successful!`,
      {
        description: `You've invested £${amount.toFixed(2)} in ${selectedPortfolio.name}`,
      }
    );
    
    setSelectedPortfolio(null);
    setInvestAmount("");
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low': return Shield;
      case 'Medium': return Target;
      case 'High': return TrendingUp;
      default: return Shield;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-blue-800 text-white px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Start Investing</h1>
        <p className="text-blue-100">Choose a portfolio that fits your goals</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Info Banner */}
        <Card className="mb-6 bg-accent/5 border-accent/20">
          <CardContent className="p-4">
            <p className="text-sm text-center">
              <span className="font-semibold">Start from just £1</span>
              <br />
              All portfolios are professionally managed and diversified
            </p>
          </CardContent>
        </Card>

        {/* Portfolio List */}
        <div className="space-y-4 pb-6">
          {portfolios.map((portfolio) => {
            const RiskIcon = getRiskIcon(portfolio.riskLevel);
            
            return (
              <Card 
                key={portfolio.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPortfolio(portfolio)}
              >
                <CardContent className="p-0">
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{portfolio.name}</h3>
                        <p className="text-sm text-muted-foreground">{portfolio.description}</p>
                      </div>
                      <Badge className={`${getRiskColor(portfolio.riskLevel)} border ml-2 flex-shrink-0`}>
                        {portfolio.riskLevel} Risk
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{portfolio.estimatedReturn}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <RiskIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">From £{portfolio.minInvestment}</span>
                      </div>
                    </div>

                    {/* Allocation Preview */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Asset Allocation:</p>
                      <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
                        {portfolio.allocation.map((alloc, idx) => (
                          <div
                            key={idx}
                            style={{ width: `${alloc.percentage}%` }}
                            className={`h-full ${
                              idx === 0 ? 'bg-primary' :
                              idx === 1 ? 'bg-accent' :
                              'bg-purple-500'
                            }`}
                            title={`${alloc.category}: ${alloc.percentage}%`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-3 text-xs text-muted-foreground">
                        {portfolio.allocation.map((alloc, idx) => (
                          <span key={idx}>
                            {alloc.category} {alloc.percentage}%
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <Button className="w-full rounded-2xl" size="lg">
                      Invest Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Investment Dialog */}
      <Dialog open={!!selectedPortfolio} onOpenChange={() => setSelectedPortfolio(null)}>
        <DialogContent className="max-w-sm mx-4 rounded-3xl">
          <DialogHeader>
            <DialogTitle>{selectedPortfolio?.name}</DialogTitle>
            <div className="flex items-center gap-2 pt-2">
              <Badge className={getRiskColor(selectedPortfolio?.riskLevel || '')}>
                {selectedPortfolio?.riskLevel} Risk
              </Badge>
              <span className="text-sm text-muted-foreground">
                {selectedPortfolio?.estimatedReturn}
              </span>
            </div>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="amount" className="mb-2 block">
                How much would you like to invest?
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="1.00"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(e.target.value)}
                  className="pl-8 h-14 rounded-2xl text-lg"
                  min="1"
                  step="0.01"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Minimum investment: £{selectedPortfolio?.minInvestment}
              </p>
            </div>

            {selectedPortfolio && (
              <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Your investment will be allocated to:</p>
                  {selectedPortfolio.allocation.map((alloc, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{alloc.category}</span>
                      <span className="font-medium">{alloc.percentage}%</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setSelectedPortfolio(null)} className="rounded-2xl flex-1">
              Cancel
            </Button>
            <Button onClick={handleInvest} disabled={!investAmount || parseFloat(investAmount) < 1} className="rounded-2xl flex-1">
              Invest
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
