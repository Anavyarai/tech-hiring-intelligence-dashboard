import Navbar from "./components/layout/Navbar";
import PageContainer from "./components/layout/PageContainer";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
    return (
        <PageContainer>
            <Navbar />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                <Dashboard />
            </div>
        </PageContainer>
    );
}