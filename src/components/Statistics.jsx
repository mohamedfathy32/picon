import { useState, useEffect } from 'react';
import { FaTruck, FaUsers, FaStore } from 'react-icons/fa';

const Statistics = () => {
  const [stats, setStats] = useState({
    sales: 0,
    clients: 0,
    brands: 0
  });

  const targetStats = {
    sales: 1000, // 1000 tons
    clients: 500, // 500 clients
    brands: 50   // 50 brands
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateValue = (start, end, setter) => {
      let current = start;
      const increment = (end - start) / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          current = end;
          clearInterval(timer);
        }
        setter(Math.round(current));
      }, stepDuration);

      return timer;
    };

    const timers = [
      animateValue(0, targetStats.sales, (value) => setStats(prev => ({ ...prev, sales: value }))),
      animateValue(0, targetStats.clients, (value) => setStats(prev => ({ ...prev, clients: value }))),
      animateValue(0, targetStats.brands, (value) => setStats(prev => ({ ...prev, brands: value })))
    ];

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const statItems = [
    {
      icon: <FaTruck className="text-4xl text-orange-500" />,
      value: stats.sales,
      label: "Tons of Sales",
      suffix: "+"
    },
    {
      icon: <FaUsers className="text-4xl text-orange-500" />,
      value: stats.clients,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: <FaStore className="text-4xl text-orange-500" />,
      value: stats.brands,
      label: "Brands",
      suffix: "+"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {item.value}{item.suffix}
              </div>
              <div className="text-lg text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 