import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import { LayoutDashboard, Image, Users, MessageSquare, Briefcase, Settings, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';

const sidebarLinks = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Projects', path: '/admin/projects', icon: Briefcase },
  { name: 'Gallery', path: '/admin/gallery', icon: Image },
  { name: 'Staff', path: '/admin/staff', icon: Users },
  { name: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export const AdminLayout = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-white flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-poppins font-bold text-white hover:text-gray-300 transition-colors">Admin Panel</Link>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-white/10 text-gray-300'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl hover:bg-red-500/20 text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm h-16 flex items-center px-8">
          <h1 className="text-xl font-semibold text-secondary">
            {sidebarLinks.find(l => l.path === location.pathname)?.name || 'Dashboard'}
          </h1>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
