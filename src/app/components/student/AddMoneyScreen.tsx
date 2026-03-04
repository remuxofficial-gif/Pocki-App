import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { Wallet, Calendar, CreditCard, Smartphone, Building2 } from "lucide-react";

const RECURRING_PRESETS = ["5", "10", "20", "50"];

export function AddMoneyScreen() {
  const [manualAmount, setManualAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [recurringAmount, setRecurringAmount] = useState("");
  const [recurringFrequency, setRecurringFrequency] = useState<string>("");
  const [startDate, setStartDate] = useState("");
  const [recurringEnabled, setRecurringEnabled] = useState(false);

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(manualAmount);
    if (!paymentMethod) {
      toast.error("Choose a payment method");
      return;
    }
    if (!manualAmount || amount < 1) {
      toast.error("Enter an amount of at least £1");
      return;
    }
    toast.success("Funds added", {
      description: `£${amount.toFixed(2)} will be added to your portfolio.`,
    });
    setManualAmount("");
  };

  const handleSaveSchedule = () => {
    const amount = parseFloat(recurringAmount);
    if (!recurringEnabled) {
      toast.error("Turn on Recurring Contributions first");
      return;
    }
    if (!recurringAmount || amount < 1) {
      toast.error("Enter an amount of at least £1");
      return;
    }
    if (!recurringFrequency) {
      toast.error("Select a frequency (Weekly, Monthly, or Annually)");
      return;
    }
    const freqLabel = { weekly: "Weekly", monthly: "Monthly", annually: "Annually" }[recurringFrequency] || recurringFrequency;
    toast.success("Schedule saved", {
      description: `£${amount.toFixed(2)} will be invested ${freqLabel.toLowerCase()}.`,
    });
  };

  return (
    <div className="pb-6 px-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground mb-1">Add Money</h1>
        <p className="text-sm text-muted-foreground">Fund your portfolio</p>
      </div>

      <div className="space-y-4">
        {/* Direct Deposit */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Direct Deposit</h2>
                <p className="text-xs text-muted-foreground">Add funds manually</p>
              </div>
            </div>
            <form onSubmit={handleAddFunds} className="space-y-4">
              <div>
                <Label className="text-foreground text-sm">Amount</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-foreground">£</span>
                  <Input
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    value={manualAmount}
                    onChange={(e) => setManualAmount(e.target.value)}
                    className="h-11 pl-8"
                  />
                </div>
              </div>
              <div>
                <Label className="text-foreground text-sm">Payment Method</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="h-11 mt-1">
                    <SelectValue placeholder="Choose method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Bank Account
                      </span>
                    </SelectItem>
                    <SelectItem value="card">
                      <span className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Debit / Credit Card
                      </span>
                    </SelectItem>
                    <SelectItem value="wallet">
                      <span className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Apple Pay / Google Pay
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full rounded-xl">Add Funds</Button>
            </form>
          </CardContent>
        </Card>

        {/* Recurring Contributions */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Recurring Contributions</h2>
                <p className="text-xs text-muted-foreground">Schedule automatic deposits on a regular basis.</p>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <p className="text-sm text-muted-foreground flex-1">
                Enable automatic deposits (e.g. invest £20 every month).
              </p>
              <Switch
                checked={recurringEnabled}
                onCheckedChange={setRecurringEnabled}
                className="shrink-0"
              />
            </div>

            {/* Amount and Frequency always visible so you can set options */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div>
                <Label htmlFor="recurring-amount" className="text-foreground text-sm">Amount</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground font-medium">£</span>
                  <Input
                    id="recurring-amount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    value={recurringAmount}
                    onChange={(e) => setRecurringAmount(e.target.value)}
                    className="h-11 pl-8"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {RECURRING_PRESETS.map((preset) => (
                    <Button
                      key={preset}
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-9 flex-1 min-w-[60px]"
                      onClick={() => setRecurringAmount(preset)}
                    >
                      £{preset}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-foreground text-sm">Frequency</Label>
                <Select value={recurringFrequency} onValueChange={setRecurringFrequency}>
                  <SelectTrigger className="h-11 mt-1">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="start-date" className="text-foreground text-sm">Start Date</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-11 mt-1"
                />
              </div>
              <Button
                type="button"
                className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90"
                onClick={handleSaveSchedule}
              >
                Save Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
