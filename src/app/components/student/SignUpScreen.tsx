import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Checkbox } from "../ui/checkbox";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import pockiLogo from "@/assets/ad0631c9d9463a72bdd55e1fe3fd648bbe78a280.png";

export function SignUpScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isStudent: false,
    agreedToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreedToTerms) {
      navigate('/onboarding');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="p-6 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1 flex justify-center">
          <img 
            src={pockiLogo} 
            alt="Pocki" 
            className="w-12 h-12"
          />
        </div>
        <div className="w-10" /> {/* Spacer for alignment */}
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join thousands of students investing smart</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="h-14 rounded-2xl bg-input-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@university.ac.uk"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="h-14 rounded-2xl bg-input-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a secure password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="h-14 rounded-2xl bg-input-background"
              required
            />
          </div>

          {/* Student Verification Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-2xl">
            <div className="flex-1">
              <Label className="text-base">I'm a student</Label>
              <p className="text-sm text-muted-foreground mt-1">Get exclusive student benefits</p>
            </div>
            <Switch
              checked={formData.isStudent}
              onCheckedChange={(checked) => setFormData({...formData, isStudent: checked})}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm font-normal leading-relaxed cursor-pointer">
              I agree to the <span className="text-primary">Terms & Conditions</span> and <span className="text-primary">Privacy Policy</span>
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-lg rounded-2xl mt-8"
            disabled={!formData.agreedToTerms}
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-primary font-medium"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}