import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import pockiLogo from "@/assets/ad0631c9d9463a72bdd55e1fe3fd648bbe78a280.png";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
      <div className="w-full max-w-[390px] min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-orange-50 shadow-xl">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <img src={pockiLogo} alt="Pocki Logo" className="w-32 h-32 mb-3" />
            <span className="text-primary text-2xl font-bold">Pocki</span>
          </div>
          
          <h1 className="text-4xl font-bold text-primary mb-4 leading-tight">
            Invest from £1.<br />Start Small. Grow Smart.
          </h1>
          
          <p className="text-lg text-gray-700 mb-12 max-w-sm">
            Build your financial future with micro-investing designed for students 🌱
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="w-full space-y-4 pb-8 px-6">
          <Button 
            size="lg"
            className="w-full h-14 text-lg bg-primary text-white hover:bg-primary/90 rounded-2xl shadow-lg"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="w-full h-14 text-lg text-primary border-primary/30 hover:bg-primary/10 rounded-2xl"
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}