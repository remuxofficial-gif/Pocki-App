import { RouterProvider } from "react-router";
import { studentRouter } from "./student-routes";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <RouterProvider router={studentRouter} />
      <Toaster />
    </>
  );
}