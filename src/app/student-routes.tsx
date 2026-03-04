import { createBrowserRouter, Navigate } from "react-router";
import { MobileLayout } from "./components/student/MobileLayout";
import { WelcomeScreen } from "./components/student/WelcomeScreen";
import { SignUpScreen } from "./components/student/SignUpScreen";
import { LoginScreen } from "./components/student/LoginScreen";
import { OnboardingFlow } from "./components/student/OnboardingFlow";
import { DashboardScreen } from "./components/student/DashboardScreen";
import { FundLayout } from "./components/student/FundLayout";
import { AddMoneyScreen } from "./components/student/AddMoneyScreen";
import { BrandOffersScreen } from "./components/student/BrandOffersScreen";
import { InvestScreen } from "./components/student/InvestScreen";
import { LearnScreen } from "./components/student/LearnScreen";
import { ProfileScreen } from "./components/student/ProfileScreen";

// Component to handle 404 redirects
function NotFoundRedirect() {
  return <Navigate to="/" replace />;
}

// Error boundary component
function ErrorBoundary() {
  return <Navigate to="/" replace />;
}

export const studentRouter = createBrowserRouter([
  {
    path: "/",
    Component: WelcomeScreen,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/signup",
    Component: SignUpScreen,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    Component: LoginScreen,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/onboarding",
    Component: OnboardingFlow,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/app",
    Component: MobileLayout,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, Component: DashboardScreen },
      {
        path: "add-money",
        Component: FundLayout,
        children: [
          { index: true, Component: AddMoneyScreen },
          { path: "offers", Component: BrandOffersScreen },
        ],
      },
      { path: "invest", Component: InvestScreen },
      { path: "learn", Component: LearnScreen },
      { path: "profile", Component: ProfileScreen },
    ],
  },
  {
    path: "*",
    Component: NotFoundRedirect,
  },
]);