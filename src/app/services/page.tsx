export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-yellow/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-gray mb-8">
            Une expertise complète en maîtrise d&apos;œuvre et études thermiques
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* Maîtrise d'œuvre */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-primary-yellow text-5xl mb-6">🏗️</div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Maîtrise d&apos;œuvre
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  Nous accompagnons vos projets de construction et de rénovation de A à Z. 
                  De la conception à la réception des travaux, notre équipe vous garantit 
                  un suivi professionnel et personnalisé.
                </p>
                <ul className="space-y-3 text-secondary-gray">
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Conception et plans d&apos;exécution
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Demandes d&apos;autorisations administratives
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Consultation et sélection d&apos;entreprises
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Suivi de chantier et coordination
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Réception des travaux
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80"></div>
            </div>

            {/* BET Thermique */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80 md:order-1"></div>
              <div className="md:order-2">
                <div className="text-primary-yellow text-5xl mb-6">🔥</div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Bureau d&apos;Études Thermiques
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  Nos études thermiques optimisent les performances énergétiques de vos bâtiments 
                  tout en respectant la réglementation en vigueur. Nous vous accompagnons dans 
                  vos démarches de conformité.
                </p>
                <ul className="space-y-3 text-secondary-gray">
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Études RT2012 et RE2020
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Diagnostics de Performance Énergétique (DPE)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Simulation thermique dynamique
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Optimisation des systèmes énergétiques
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Conseil en rénovation énergétique
                  </li>
                </ul>
              </div>
            </div>

            {/* Audits énergétiques */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-primary-yellow text-5xl mb-6">🔍</div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Audits Énergétiques
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  Nos audits énergétiques identifient les potentiels d&apos;amélioration de vos 
                  bâtiments résidentiels et tertiaires. Nous vous proposons des solutions 
                  concrètes pour réduire vos consommations.
                </p>
                <ul className="space-y-3 text-secondary-gray">
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Audit énergétique réglementaire
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Analyse des consommations énergétiques
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Préconisations d&apos;amélioration
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Calcul du retour sur investissement
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Accompagnement aux aides financières
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80"></div>
            </div>

            {/* Diagnostic immobilier */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80 md:order-1"></div>
              <div className="md:order-2">
                <div className="text-primary-yellow text-5xl mb-6">🏡</div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Diagnostic Immobilier
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  Nos diagnostics immobiliers réglementaires vous accompagnent dans vos 
                  transactions immobilières et la gestion de votre patrimoine bâti en 
                  toute sécurité.
                </p>
                <ul className="space-y-3 text-secondary-gray">
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Diagnostic amiante (avant travaux/démolition)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    Diagnostic plomb
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    État des installations électriques
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    État des installations de gaz
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-yellow mr-3">✓</span>
                    État relatif à la présence de termites
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">
            Besoin d&apos;un devis personnalisé ?
          </h2>
          <p className="text-xl text-secondary-gray mb-8">
            Contactez-nous pour discuter de votre projet
          </p>
          <a href="/contact" className="inline-block bg-secondary-dark hover:bg-secondary-gray text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Demander un devis
          </a>
        </div>
      </section>
    </main>
  );
}