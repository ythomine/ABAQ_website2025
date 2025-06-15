'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-primary-yellow/10 p-12 rounded-lg max-w-2xl mx-auto">
            <div className="text-primary-yellow text-6xl mb-6">✓</div>
            <h1 className="text-3xl font-bold text-secondary-dark mb-4">
              Message Envoyé !
            </h1>
            <p className="text-secondary-gray mb-8">
              Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                  projectType: ''
                });
              }}
              className="bg-primary-yellow hover:bg-primary-yellow/90 text-secondary-dark font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Envoyer un Autre Message
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-yellow/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-secondary-gray mb-8">
            Parlons de votre projet ensemble
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-8">
                Demande de Devis
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-dark mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-light rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-light rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary-dark mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-light rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-colors"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-secondary-dark mb-2">
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-light rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="maitrise-oeuvre">Maîtrise d&apos;œuvre</option>
                      <option value="bet-thermique">BET Thermique</option>
                      <option value="audit-energetique">Audit énergétique</option>
                      <option value="diagnostic-immobilier">Diagnostic immobilier</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-secondary-dark mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-light rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-colors"
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-light rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-yellow hover:bg-primary-yellow/90 disabled:bg-secondary-light text-secondary-dark font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-8">
                Informations de Contact
              </h2>
              
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-secondary-light/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary-dark mb-6">
                    Coordonnées
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-yellow text-xl mt-1">📧</div>
                      <div>
                        <p className="font-semibold text-secondary-dark">Email</p>
                        <p className="text-secondary-gray">contact@cabinet-abaq.fr</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-yellow text-xl mt-1">📞</div>
                      <div>
                        <p className="font-semibold text-secondary-dark">Téléphone</p>
                        <p className="text-secondary-gray">01 23 45 67 89</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-yellow text-xl mt-1">📍</div>
                      <div>
                        <p className="font-semibold text-secondary-dark">Adresse</p>
                        <p className="text-secondary-gray">
                          [Adresse à définir]<br/>
                          [Code postal] [Ville]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-secondary-light/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary-dark mb-6">
                    Horaires d&apos;Ouverture
                  </h3>
                  <div className="space-y-2 text-secondary-gray">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span>9h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary-yellow/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary-dark mb-4">
                    Temps de Réponse
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary-yellow">⚡</div>
                      <span className="text-secondary-gray">Réponse sous 24h en moyenne</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-primary-yellow">📋</div>
                      <span className="text-secondary-gray">Devis gratuit sous 48h</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-primary-yellow">🤝</div>
                      <span className="text-secondary-gray">Rendez-vous possible sous 1 semaine</span>
                    </div>
                  </div>
                </div>

                {/* Zone d'intervention */}
                <div className="bg-secondary-light/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary-dark mb-4">
                    Zone d&apos;Intervention
                  </h3>
                  <p className="text-secondary-gray mb-4">
                    Nous intervenons principalement dans les départements suivants :
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-secondary-gray">
                    <div>• [Département 1]</div>
                    <div>• [Département 2]</div>
                    <div>• [Département 3]</div>
                    <div>• [Département 4]</div>
                  </div>
                  <p className="text-sm text-secondary-gray mt-4">
                    * Possibilité d&apos;intervention élargie selon le projet
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-light/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
            Questions Fréquentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-dark mb-3">
                Combien coûte une étude thermique ?
              </h3>
              <p className="text-secondary-gray">
                Le coût d&apos;une étude thermique varie selon la complexité du projet. 
                Contactez-nous pour un devis gratuit personnalisé.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-dark mb-3">
                Quels sont les délais d&apos;intervention ?
              </h3>
              <p className="text-secondary-gray">
                Nous nous engageons à répondre sous 24h et à planifier votre intervention 
                dans un délai d&apos;une semaine selon disponibilités.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-dark mb-3">
                Intervenez-vous en urgence ?
              </h3>
              <p className="text-secondary-gray">
                Pour les diagnostics urgents ou les situations particulières, 
                nous pouvons organiser des interventions en urgence sur demande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}