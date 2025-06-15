import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-yellow/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            Cabinet ABAQ
          </h1>
          <p className="text-xl md:text-2xl text-secondary-gray mb-8">
            Expertise en Maîtrise d&apos;œuvre et Études Thermiques
          </p>
          <Link href="/contact" className="inline-block bg-primary-yellow hover:bg-primary-yellow/90 text-secondary-dark font-semibold py-3 px-8 rounded-lg transition-colors">
            Demander un devis
          </Link>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary-yellow text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Maîtrise d&apos;œuvre
              </h3>
              <p className="text-secondary-gray">
                Conduite de projets de construction et rénovation
              </p>
            </div>
            <div className="bg-secondary-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary-yellow text-3xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                BET Thermique
              </h3>
              <p className="text-secondary-gray">
                Études RT2012, RE2020, DPE
              </p>
            </div>
            <div className="bg-secondary-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary-yellow text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Audits énergétiques
              </h3>
              <p className="text-secondary-gray">
                Bâtiments résidentiels et tertiaires
              </p>
            </div>
            <div className="bg-secondary-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary-yellow text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Accompagnement réglementaire
              </h3>
              <p className="text-secondary-gray">
                Conformité, certifications
              </p>
            </div>
            <div className="bg-secondary-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary-yellow text-3xl mb-4">👷</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Suivi de chantier
              </h3>
              <p className="text-secondary-gray">
                Coordination, contrôles qualité
              </p>
            </div>
            <div className="bg-secondary-light p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary-yellow text-3xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Diagnostic immobilier
              </h3>
              <p className="text-secondary-gray">
                DPE, diagnostic amiante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-secondary-light/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
            Nos Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="bg-primary-yellow text-secondary-dark font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                OP
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                OPQIBI
              </h3>
              <p className="text-secondary-gray">
                Bureau d&apos;études qualifié
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="bg-primary-yellow text-secondary-dark font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                AM
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Certification Amiante
              </h3>
              <p className="text-secondary-gray">
                Repérage et diagnostic amiante
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="bg-primary-yellow text-secondary-dark font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                RG
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                RGE
              </h3>
              <p className="text-secondary-gray">
                Reconnu Garant Environnement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-yellow mb-2">10+</div>
              <p className="text-secondary-gray">Années d&apos;expérience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-yellow mb-2">200+</div>
              <p className="text-secondary-gray">Projets réalisés</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-yellow mb-2">100%</div>
              <p className="text-secondary-gray">Clients satisfaits</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-yellow mb-2">3</div>
              <p className="text-secondary-gray">Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 bg-secondary-light/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
            Dernières Réalisations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-primary-yellow/20 to-secondary-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                  Projet à venir
                </h3>
                <p className="text-secondary-gray mb-4">
                  Découvrez bientôt nos dernières réalisations
                </p>
                <Link href="/realisations" className="text-primary-yellow hover:underline">
                  Voir plus →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-primary-yellow/20 to-secondary-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                  Projet à venir
                </h3>
                <p className="text-secondary-gray mb-4">
                  Découvrez bientôt nos dernières réalisations
                </p>
                <Link href="/realisations" className="text-primary-yellow hover:underline">
                  Voir plus →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-primary-yellow/20 to-secondary-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                  Projet à venir
                </h3>
                <p className="text-secondary-gray mb-4">
                  Découvrez bientôt nos dernières réalisations
                </p>
                <Link href="/realisations" className="text-primary-yellow hover:underline">
                  Voir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
            Actualités
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-secondary-light/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Article à venir
              </h3>
              <p className="text-secondary-gray mb-4">
                Restez informés de nos dernières actualités
              </p>
              <Link href="/actualites" className="text-primary-yellow hover:underline">
                Lire la suite →
              </Link>
            </article>
            <article className="bg-secondary-light/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Article à venir
              </h3>
              <p className="text-secondary-gray mb-4">
                Restez informés de nos dernières actualités
              </p>
              <Link href="/actualites" className="text-primary-yellow hover:underline">
                Lire la suite →
              </Link>
            </article>
            <article className="bg-secondary-light/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Article à venir
              </h3>
              <p className="text-secondary-gray mb-4">
                Restez informés de nos dernières actualités
              </p>
              <Link href="/actualites" className="text-primary-yellow hover:underline">
                Lire la suite →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-secondary-gray mb-8">
            Contactez-nous pour une étude personnalisée
          </p>
          <Link href="/contact" className="inline-block bg-secondary-dark hover:bg-secondary-gray text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}