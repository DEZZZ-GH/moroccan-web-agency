import React, { useState } from 'react';
import { 
  Smartphone, 
  Search, 
  Zap, 
  Headphones, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Coffee,
  Palette,
  Rocket,
  BarChart,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const MoroccanWebAgencyLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    whatsapp: ''
  });

    const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    const whatsappUrl = `https://wa.me/212XXXXXXXXX?text=Bonjour! Je m'appelle ${formData.name}. Mon entreprise: ${formData.businessType}.`;
    window.open(whatsappUrl, '_blank');
  };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }; 

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/212XXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle size={24} />
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">DabaDigital</span>
            </div>
            <button 
              onClick={scrollToContact}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Moroccan pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformez votre Business avec un Site Web qui vend vraiment
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Had l'<span className="text-teal-500 font-semibold">عام</span>, donnez à votre entreprise l'image qu'elle mérite. Des sites professionnels, rapides, et optimisés pour le marché marocain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Démarrer mon Projet <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button 
                onClick={scrollToProjects}
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-full text-lg border-2 border-gray-200 transition duration-300"
              >
                Voir nos Réalisations
              </button>
            </div>
          </div>
        </div>
      </section>

            {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi un site web en 2026 ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Crédibilité</h3>
              <p className="text-gray-600">
                80% des clients marocains recherchent sur Google avant d'acheter. 
                Un site web professionnel augmente instantanément votre crédibilité.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <BarChart className="text-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Propriété</h3>
              <p className="text-gray-600">
                Ne dépendez plus uniquement des algorithmes de Facebook ou Instagram. 
                Votre site web est votre espace numérique permanent.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-teal-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ventes 24/7</h3>
              <p className="text-gray-600">
                Votre business reste ouvert même quand vous dormez. 
                Acceptez des commandes et générez des leads à toute heure.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Features Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Notre Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Design Mobile-First</h3>
              <p className="text-gray-600 text-sm">
                Parfait sur tous les smartphones marocains, de Casablanca à Agadir.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Référencement (SEO)</h3>
              <p className="text-gray-600 text-sm">
                Soyez premier sur Google à Casablanca, Rabat, ou partout au Maroc.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vitesse Exceptionnelle</h3>
              <p className="text-gray-600 text-sm">
                Chargement en moins de 2 secondes pour une expérience utilisateur optimale.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Support Local</h3>
              <p className="text-gray-600 text-sm">
                On parle votre langue (Darija & Français). Support dédié 7j/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Packs
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pack Start */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack Start</h3>
                <div className="text-teal-500 text-4xl font-bold mb-4">À partir de 3,999 DH</div>
                <p className="text-gray-600">Pour les artisans et freelances</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Site vitrine 5 pages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Design responsive</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Formulaire de contact</span>
                </li>
              </ul>
              <button 
                onClick={scrollToContact}
                className="w-full bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-900 font-semibold py-3 rounded-lg transition duration-300"
              >
                Choisir ce pack
              </button>
            </div>

            {/* Pack Business */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-teal-500 transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-teal-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Plus Populaire
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack Business</h3>
                <div className="text-teal-500 text-4xl font-bold mb-4">À partir de 7,999 DH</div>
                <p className="text-gray-600">Pour les PME et commerces</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Site web jusqu'à 10 pages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>SEO de base inclus</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Intégration réseaux sociaux</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Support 3 mois</span>
                </li>
              </ul>
              <button 
                onClick={scrollToContact}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Choisir ce pack
              </button>
            </div>

            {/* Pack E-com */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack E-com</h3>
                <div className="text-teal-500 text-4xl font-bold mb-4">À partir de 14,999 DH</div>
                <p className="text-gray-600">Boutique en ligne complète</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Boutique en ligne complète</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Paiement CMI & local</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Gestion des stocks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-teal-500 mr-3" size={20} />
                  <span>Support 6 mois</span>
                </li>
              </ul>
              <button 
                onClick={scrollToContact}
                className="w-full bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-900 font-semibold py-3 rounded-lg transition duration-300"
              >
                Choisir ce pack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Processus Simple et Transparent
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Coffee className="text-teal-500" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Café & Discussion</h3>
              <p className="text-gray-600 text-sm">
                On discute de vos besoins autour d'un café (virtuel ou réel)
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="text-teal-500" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Création du design adapté à votre secteur
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="text-teal-500" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Lancement</h3>
              <p className="text-gray-600 text-sm">
                Votre site est mis en ligne et optimisé
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <BarChart className="text-teal-500" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Suivi</h3>
              <p className="text-gray-600 text-sm">
                Analyse des performances et ajustements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Prêt à Démarrer ?
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Votre Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-teal-500"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                  Type d'Entreprise
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-teal-500"
                  required
                >
                  <option value="">Sélectionnez votre secteur</option>
                  <option value="artisan">Artisanat</option>
                  <option value="restaurant">Restauration</option>
                  <option value="boutique">Boutique/Commerce</option>
                  <option value="service">Services</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                  Numéro WhatsApp
                </label>
                <div className="flex">
                  <div className="flex items-center px-4 py-3 bg-gray-800 border border-r-0 border-gray-700 rounded-l-lg">
                    +212
                  </div>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 rounded-r-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-teal-500"
                    placeholder="XX-XXXXXXX"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300"
              >
                Recevoir une Proposition Gratuite
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg"></div>
                  <span className="text-xl font-bold">DabaDigital</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-gray-400" />
                  <Mail size={20} className="text-gray-400" />
                  <MapPin size={20} className="text-gray-400" />
                </div>
              </div>
              <p className="text-center mt-6 text-gray-400">
                Fait avec ❤️ au Maroc
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoroccanWebAgencyLanding;