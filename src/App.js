import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 space-y-12">
      <header className="flex items-center justify-start mb-8">
        <img src="/logo192.png" alt="Proches Logo" className="h-16" />
        <h1 className="text-3xl font-bold ml-4">Proches — Espace PRO</h1>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">📦 Ma cave à vin</h2>
        <p>Gérez votre inventaire : ajoutez, consultez, organisez vos références.</p>
        <ul className="list-disc ml-6">
          <li>Nom du vin</li>
          <li>Millésime</li>
          <li>Stock</li>
          <li>Prix</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🧾 Créer ma carte des vins</h2>
        <p>Créez une carte personnalisée en sélectionnant vos références favorites.</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🛍️ Vente à emporter</h2>
        <p>Activez les vins que vous souhaitez proposer à vos clients en cartons ou à emporter.</p>
      </section>
    </div>
  );
}

export default App;