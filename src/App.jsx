import { Routes, Route } from "react-router";
import './App.css';
import Navigation from './components/navigation/Navigation';
import Listing from './components/listing/Listing';
import About from "./components/pages/About";
import Policy from "./components/pages/Policy";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="mainContainer"> 
        <Navigation />
        <Routes>
          <Route index element={<Listing />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>
    </QueryClientProvider>
  )
}
export default App;
