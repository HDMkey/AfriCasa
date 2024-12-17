export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <p className="text-gray-400">
              AfriMarket est votre marketplace africaine de confiance pour acheter,
              vendre et louer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Acheter</li>
              <li>Vendre</li>
              <li>Louer</li>
              <li>Immobilier</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>FAQ</li>
              <li>Contact</li>
              <li>Aide</li>
              <li>Conditions d'utilisation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Abidjan, Côte d'Ivoire</li>
              <li>contact@afrimarket.com</li>
              <li>+225 07 07 07 07 07</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AfriMarket. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}