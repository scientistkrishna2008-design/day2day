import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, Image as ImageIcon, MessageSquare } from 'lucide-react';

const stats = [
  { name: 'Total Projects', value: '24', icon: Briefcase, color: 'bg-blue-500' },
  { name: 'Staff Members', value: '156', icon: Users, color: 'bg-green-500' },
  { name: 'Gallery Images', value: '89', icon: ImageIcon, color: 'bg-purple-500' },
  { name: 'New Inquiries', value: '12', icon: MessageSquare, color: 'bg-orange-500' },
];

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Admin Panel</title>
      </Helmet>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.name}</p>
                <p className="text-2xl font-bold text-secondary">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-secondary mb-4">Welcome to Admin Panel</h2>
        <p className="text-gray-600 text-lg">
          From here you can manage your website's content dynamically. Use the sidebar to navigate to different sections like Projects, Staff, Gallery, and Inquiries.
        </p>
      </div>
    </>
  );
};
