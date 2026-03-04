import { Link, Outlet, useLocation } from "react-router";

export function FundLayout() {
  const location = useLocation();
  const isOffers = location.pathname.includes("/app/add-money/offers");

  return (
    <div className="min-h-full flex flex-col">
      <div className="bg-card border-b border-border px-4 py-3 flex gap-2">
        <Link
          to="/app/add-money"
          className={`flex-1 py-2.5 rounded-xl text-sm font-medium text-center transition-colors ${
            !isOffers
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Add Money
        </Link>
        <Link
          to="/app/add-money/offers"
          className={`flex-1 py-2.5 rounded-xl text-sm font-medium text-center transition-colors ${
            isOffers
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Offers
        </Link>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
