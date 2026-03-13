import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Journal from "./pages/Journal";
import JournalDetail from "./pages/JournalDetail";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import PaymentMethods from "./pages/PaymentMethods";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Service from "./pages/Service";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SmoothScroll>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:slug" element={<JournalDetail />} />
                <Route path="/support" element={<Support />} />
                <Route path="/payment-methods" element={<PaymentMethods />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/services" element={<Service />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </SmoothScroll>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
