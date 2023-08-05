import { AuthProvider } from "@/Context/AuthContext";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
      <NavBar></NavBar>
      <div className="mb-12"></div>
      <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}
