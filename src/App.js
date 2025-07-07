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
        <Section
          title="📦 Ma cave à vin"
          description="Ajoutez, organisez et suivez vos références, millésimes et stocks."
          href="#pro"
        />
        <Section
          title="🧾 Créer ma carte"
          description="Générez une carte des vins claire, adaptée à votre sélection."
          href="#particuliers"
        />
        <Section
          title="🛍️ Vente à emporter"
          description="Proposez certains vins à vos clients à prix spécial ou par carton."
          href="#consulting"
        />
      </div>
    </div>
  );
}

function Section({ title, description, href }) {
  return (
    <a
      href={href}
      className="block p-6 bg-white border border-[#6D1C35]/10 rounded-2xl shadow hover:shadow-lg hover:border-[#6D1C35]/30 transition"
    >
      <h3 className="text-xl font-semibold text-[#6D1C35] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </a>
  );
}
