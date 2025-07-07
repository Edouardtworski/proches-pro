function FeatureCard({ title, label, href }) {
  return (
    <a
      href={href}
      className="flex flex-col justify-between p-6 bg-white rounded-xl border border-[#6D1C35]/20 shadow hover:shadow-md hover:border-[#6D1C35]/40 transition text-left"
    >
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-2xl font-bold text-[#6D1C35] mt-2">{title}</h3>
    </a>
  );
}

export default function ProchesApp() {
  return (
    <div className="min-h-screen bg-[#FAF7EF] text-gray-800 p-6 space-y-12">
      <header className="flex items-center justify-start mb-6">
        <img src="/logo192.png" alt="Proches Logo" className="h-20" />
      </header>

      <div className="bg-[#FDFBF6] rounded-xl shadow p-6 border border-[#6D1C35]/20">
        <h1 className="text-5xl font-bold text-[#6D1C35] mb-4">Espace Professionnel</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bienvenue dans l’espace professionnel de l’application <strong>Proches</strong>.<br />
          Accompagnement œnologique, cave connectée, carte sur mesure.<br />
          Pensé pour les restaurateurs, cavistes, et passionnés du vin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          label="Fonctionnalité"
          title="📦 Ma cave à vin"
          href="#pro"
        />
        <FeatureCard
          label="Fonctionnalité"
          title="🧾 Créer ma carte"
          href="#particuliers"
        />
        <FeatureCard
          label="Fonctionnalité"
          title="🛍️ Vente à emporter"
          href="#consulting"
        />
      </div>
    </div>
  );
}