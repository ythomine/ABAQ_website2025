export default function Certifications() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-yellow/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            Nos Certifications
          </h1>
          <p className="text-xl md:text-2xl text-secondary-gray mb-8">
            Des qualifications reconnues pour votre sécurité et votre confiance
          </p>
        </div>
      </section>

      {/* Certifications Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* OPQIBI */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary-yellow text-secondary-dark font-bold text-6xl w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  OP
                </div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Qualification OPQIBI
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  L&apos;OPQIBI (Organisme de Qualification de l&apos;Ingénierie) certifie notre 
                  expertise en tant que bureau d&apos;études qualifié. Cette qualification 
                  garantit nos compétences techniques et notre professionnalisme.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary-light p-4 rounded-lg">
                    <h3 className="font-semibold text-secondary-dark mb-2">Domaines qualifiés :</h3>
                    <ul className="space-y-2 text-secondary-gray">
                      <li>• Études thermiques et énergétiques</li>
                      <li>• Maîtrise d&apos;œuvre bâtiment</li>
                      <li>• Conception bioclimatique</li>
                      <li>• Énergies renouvelables</li>
                    </ul>
                  </div>
                  <div className="bg-primary-yellow/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary-gray">
                      <strong>Numéro de qualification :</strong> [À définir]<br/>
                      <strong>Valide jusqu&apos;au :</strong> [À définir]
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-primary-yellow text-secondary-dark font-bold text-4xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      OP
                    </div>
                    <h3 className="text-xl font-bold text-secondary-dark">OPQIBI</h3>
                    <p className="text-secondary-gray">Bureau d&apos;études qualifié</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Amiante */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80 flex items-center justify-center md:order-1">
                <div className="text-center">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-primary-yellow text-secondary-dark font-bold text-4xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      AM
                    </div>
                    <h3 className="text-xl font-bold text-secondary-dark">Certification</h3>
                    <p className="text-secondary-gray">Amiante</p>
                  </div>
                </div>
              </div>
              <div className="md:order-2">
                <div className="bg-primary-yellow text-secondary-dark font-bold text-6xl w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  AM
                </div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Certification Amiante
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  Notre certification amiante nous autorise à réaliser les diagnostics 
                  et repérages amiante obligatoires. Nous intervenons sur tous types 
                  de bâtiments dans le respect strict de la réglementation.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary-light p-4 rounded-lg">
                    <h3 className="font-semibold text-secondary-dark mb-2">Types d&apos;interventions :</h3>
                    <ul className="space-y-2 text-secondary-gray">
                      <li>• Repérage amiante avant travaux</li>
                      <li>• Repérage amiante avant démolition</li>
                      <li>• Diagnostic amiante parties privatives</li>
                      <li>• Contrôle périodique des flocages</li>
                    </ul>
                  </div>
                  <div className="bg-primary-yellow/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary-gray">
                      <strong>Certification délivrée par :</strong> [Organisme à préciser]<br/>
                      <strong>Valide jusqu&apos;au :</strong> [À définir]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RGE */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary-yellow text-secondary-dark font-bold text-6xl w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  RG
                </div>
                <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                  Reconnu Garant Environnement (RGE)
                </h2>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  Le label RGE atteste de notre expertise dans le domaine de la rénovation 
                  énergétique. Il permet à nos clients de bénéficier des aides publiques 
                  pour leurs travaux d&apos;amélioration énergétique.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary-light p-4 rounded-lg">
                    <h3 className="font-semibold text-secondary-dark mb-2">Avantages pour nos clients :</h3>
                    <ul className="space-y-2 text-secondary-gray">
                      <li>• Éligibilité aux aides MaPrimeRénov&apos;</li>
                      <li>• Accès aux Certificats d&apos;Économies d&apos;Énergie</li>
                      <li>• Éco-prêt à taux zéro</li>
                      <li>• TVA réduite à 5,5%</li>
                    </ul>
                  </div>
                  <div className="bg-primary-yellow/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary-gray">
                      <strong>Qualification RGE :</strong> [Type à préciser]<br/>
                      <strong>Valide jusqu&apos;au :</strong> [À définir]
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-yellow/20 to-secondary-light rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-primary-yellow text-secondary-dark font-bold text-4xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      RG
                    </div>
                    <h3 className="text-xl font-bold text-secondary-dark">RGE</h3>
                    <p className="text-secondary-gray">Reconnu Garant Environnement</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-16 bg-secondary-light/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
            Autres Qualifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-primary-yellow text-secondary-dark font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                DT
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Diagnostic Technique
              </h3>
              <p className="text-secondary-gray">
                Habilitation pour les diagnostics techniques réglementaires
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-primary-yellow text-secondary-dark font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                QE
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Qualification Énergétique
              </h3>
              <p className="text-secondary-gray">
                Expertise reconnue en performance énergétique
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-primary-yellow text-secondary-dark font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                FC
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                Formation Continue
              </h3>
              <p className="text-secondary-gray">
                Mise à jour régulière des compétences et connaissances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">
            Pourquoi Choisir un Professionnel Certifié ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-primary-yellow text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Garantie Qualité
              </h3>
              <p className="text-secondary-gray">
                Nos certifications garantissent le respect des normes et réglementations
              </p>
            </div>
            <div className="text-center">
              <div className="text-primary-yellow text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Aides Financières
              </h3>
              <p className="text-secondary-gray">
                Accès aux subventions et aides publiques pour vos projets
              </p>
            </div>
            <div className="text-center">
              <div className="text-primary-yellow text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                Conformité Légale
              </h3>
              <p className="text-secondary-gray">
                Respect strict des obligations réglementaires et légales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">
            Faites Confiance à Notre Expertise
          </h2>
          <p className="text-xl text-secondary-gray mb-8">
            Contactez-nous pour vos projets d&apos;études et diagnostics
          </p>
          <a href="/contact" className="inline-block bg-secondary-dark hover:bg-secondary-gray text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}