import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Progress from "@/components/Progress";
import axios from "axios";
import Modal from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { ChartsPage } from "./pages/ChartsPage";

axios.defaults.withCredentials = true;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

export default function Root() {
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black">
        <Progress />
        <Navbar />
        {location.pathname === "/" ? <ChartsPage /> : ""}
        <Outlet />
        <Modal />
      </div>
    </QueryClientProvider>
  );
}
