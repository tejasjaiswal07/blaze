import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.Node }) => {
  return (
    <div className="h-full relative">
      <div className="h-full hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="text-white  text-4xl">
          
          <Sidebar />
        </div>
      </div>

      <main className="md:pl-72 text-black">
        <Navbar />
        hello main content
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
