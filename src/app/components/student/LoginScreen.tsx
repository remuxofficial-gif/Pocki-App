import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import pockiLogo from "@/assets/ad0631c9d9463a72bdd55e1fe3fd648bbe78a280.png";

export function LoginScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app');
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
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Log in to continue growing your investments</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="h-14 rounded-2xl bg-input-background"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-primary font-medium"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-lg rounded-2xl mt-8"
          >
            Log In
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-primary font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}