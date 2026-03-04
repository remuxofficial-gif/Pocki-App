import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { Coins, GraduationCap, Shield } from "lucide-react";

export function OnboardingFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingSteps = [
    {
      icon: Coins,
      title: "Invest from as little as £1",
      description: "No need for thousands. Start your investment journey with just a pound and grow from there.",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Learn as you invest",
      description: "Access bite-sized lessons on investing, finance, and wealth building—all designed for students.",
      color: "bg-accent"
    },
    {
      icon: Shield,
      title: "Low fees. No confusion.",
      description: "Simple, transparent pricing with no hidden charges. What you see is what you pay.",
      color: "bg-purple-500"
    }
  ];

  const currentOnboarding = onboardingSteps[currentStep];
  const Icon = currentOnboarding.icon;

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/app');
    }
  };

  const handleSkip = () => {
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto p-6">
      {/* Skip Button */}
      <div className="flex justify-end pt-4 pb-8">
        <Button variant="ghost" onClick={handleSkip}>
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Icon */}
        <div className={`w-32 h-32 ${currentOnboarding.color} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
          <Icon className="w-16 h-16 text-white" />
        </div>

        {/* Title and Description */}
        <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
          {currentOnboarding.title}
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-sm leading-relaxed">
          {currentOnboarding.description}
        </p>

        {/* Dots Indicator */}
        <div className="flex gap-2 mb-12">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pb-8">
        <Button
          size="lg"
          className="w-full h-14 text-lg rounded-2xl"
          onClick={handleNext}
        >
          {currentStep === onboardingSteps.length - 1 ? 'Start Investing' : 'Continue'}
        </Button>
      </div>
    </div>
  );
}
