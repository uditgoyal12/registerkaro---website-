export default function Stats() {
  const stats = [
    { label: 'Customer Rating', value: '4.5+' },
    { label: 'Clients', value: '20,000+' },
    { label: 'Financial Stability', value: '99.8%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-primary">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}