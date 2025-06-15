import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Cabinet ABAQ Logo"
                className="h-8 w-auto max-w-[150px] object-contain"
                style={{ maxHeight: '32px' }}
              />
              <span className="text-lg font-semibold">Cabinet ABAQ</span>
            </div>
            <p className="text-gray-300">
              Expertise en Maîtrise d&apos;œuvre et Études Thermiques
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Maîtrise d&apos;œuvre</li>
              <li>BET Thermique</li>
              <li>Audits énergétiques</li>
              <li>Accompagnement réglementaire</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-gray-300">
              <li>OPQIBI</li>
              <li>Certification Amiante</li>
              <li>RGE</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 contact@cabinet-abaq.fr</p>
              <p>📞 01 23 45 67 89</p>
              <p>📍 Adresse à définir</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2024 Cabinet ABAQ. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-gray-300 hover:text-primary-yellow transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-300 hover:text-primary-yellow transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}