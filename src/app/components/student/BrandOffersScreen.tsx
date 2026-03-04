import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { Tag, Percent, TrendingUp } from "lucide-react";

const brandOffers = [
  { id: 1, name: "Amazon", description: "Electronics and Accessories", discount: "10% Cashback", category: "Shopping", buttonLabel: "Shop Offer" },
  { id: 2, name: "Nike", description: "Sportswear and shoes", discount: "15% Student Discount", category: "Fashion", buttonLabel: "Shop Offer" },
  { id: 3, name: "Uber", description: "Your next ride", discount: "£5 Off", category: "Travel", buttonLabel: "Use Offer" },
  { id: 4, name: "Spotify", description: "Music and podcasts", discount: "3 Months Premium", category: "Entertainment", buttonLabel: "Claim Offer" },
];

export function BrandOffersScreen() {
  const [allocationEnabled, setAllocationEnabled] = useState(true);
  const [allocationPercent, setAllocationPercent] = useState([50]);
  const [customPercent, setCustomPercent] = useState("");
  const [previewDiscount, setPreviewDiscount] = useState(10);

  const percentValue = customPercent !== "" ? Math.min(100, Math.max(0, Number(customPercent) || 0)) : allocationPercent[0];
  const invested = (previewDiscount * percentValue) / 100;
  const kept = previewDiscount - invested;

  return (
    <div className="pb-6 px-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground mb-1">Brand Offers</h1>
        <p className="text-sm text-muted-foreground">Partner offers — invest part of your savings</p>
      </div>

      <div className="space-y-4">
        {/* Allocation Control */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Percent className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Investment From Savings</h2>
                <p className="text-xs text-muted-foreground">% of savings that goes to portfolio</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-sm">Invest savings</Label>
              <Switch checked={allocationEnabled} onCheckedChange={setAllocationEnabled} />
            </div>
            {allocationEnabled && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Percentage</span>
                  <span className="font-semibold text-accent">{customPercent !== "" ? `${percentValue}%` : `${allocationPercent[0]}%`}</span>
                </div>
                <Slider
                  value={customPercent !== "" ? [percentValue] : allocationPercent}
                  onValueChange={(v) => { setAllocationPercent(v); setCustomPercent(""); }}
                  min={0}
                  max={100}
                  step={5}
                />
                <div>
                  <Label className="text-xs">Custom %</Label>
                  <div className="relative mt-1 max-w-[100px]">
                    <Input type="number" min={0} max={100} placeholder="40" value={customPercent} onChange={(e) => setCustomPercent(e.target.value)} className="h-9 pr-7" />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">%</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Offer Tiles */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Tag className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-semibold text-foreground">Partner Offers</h2>
            </div>
            <div className="space-y-3">
              {brandOffers.map((offer) => (
                <Card key={offer.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-lg font-bold text-primary">{offer.name.charAt(0)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">{offer.name}</span>
                          <Badge variant="secondary" className="text-xs">{offer.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{offer.description}</p>
                        <p className="text-sm font-medium text-accent mt-0.5">{offer.discount}</p>
                      </div>
                      <Button size="sm" className="rounded-xl shrink-0">{offer.buttonLabel}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-semibold text-foreground">Savings Breakdown</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label className="text-sm text-muted-foreground">Example discount (£)</Label>
                <Input type="number" min="0" step="0.01" value={previewDiscount} onChange={(e) => setPreviewDiscount(Number(e.target.value) || 0)} className="h-8 w-20 text-right" />
              </div>
              <div className="pt-2 border-t border-border flex justify-between">
                <span className="text-sm font-medium">Invested</span>
                <span className="font-semibold text-accent">£{invested.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Kept</span>
                <span className="font-semibold">£{kept.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
