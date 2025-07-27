"use client"

import { useState } from "react"
import { ArrowLeft, CreditCard, Truck, Phone, Lock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  })

  // Données de commande simulées
  const orderItems = [
    {
      id: 1,
      name: "Pack 4 Parfums Premium",
      price: 299,
      quantity: 1,
      parfums: ["Oud Royal", "Rose Damascena", "Ambre Noir", "Jasmin Blanc"],
    },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 200 ? 0 : 30
  const total = subtotal + shipping

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = () => {
    // Logique de soumission de commande
    alert("Commande passée avec succès !")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-center py-2 text-sm font-medium">
        LIVRAISON GRATUITE À PARTIR DE 200 DHS
      </div>

      {/* Navigation */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-yellow-500 hover:text-yellow-400"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour
              </Button>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">👑 HADRI</div>
                <div className="text-xs text-gray-400 tracking-widest">COLLECTION PARFUM</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Étape 2 sur 3</div>
              <div className="text-lg font-semibold text-white">Finaliser la commande</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire de commande */}
          <div className="lg:col-span-2 space-y-8">
            {/* Informations de livraison */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-yellow-500" />
                  Informations de livraison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-gray-300">
                    Adresse complète *
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Numéro, rue, quartier..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-gray-300">
                      Ville *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="Sélectionner une ville" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="casablanca">Casablanca</SelectItem>
                        <SelectItem value="rabat">Rabat</SelectItem>
                        <SelectItem value="marrakech">Marrakech</SelectItem>
                        <SelectItem value="fes">Fès</SelectItem>
                        <SelectItem value="tanger">Tanger</SelectItem>
                        <SelectItem value="agadir">Agadir</SelectItem>
                        <SelectItem value="meknes">Meknès</SelectItem>
                        <SelectItem value="oujda">Oujda</SelectItem>
                        <SelectItem value="kenitra">Kénitra</SelectItem>
                        <SelectItem value="tetouan">Tétouan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="text-gray-300">
                      Code postal
                    </Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      placeholder="20000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-gray-300">
                    Notes de livraison (optionnel)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Instructions spéciales pour la livraison..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Méthode de paiement */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-yellow-500" />
                  Méthode de paiement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500 transition-colors">
                    <RadioGroupItem value="cash_on_delivery" id="cash_on_delivery" className="text-yellow-500" />
                    <Label htmlFor="cash_on_delivery" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white">Paiement à la livraison</div>
                          <div className="text-sm text-gray-400">Payez en espèces lors de la réception</div>
                        </div>
                        <div className="text-green-500 font-semibold">Recommandé</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500 transition-colors">
                    <RadioGroupItem value="bank_transfer" id="bank_transfer" className="text-yellow-500" />
                    <Label htmlFor="bank_transfer" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-medium text-white">Virement bancaire</div>
                        <div className="text-sm text-gray-400">Paiement par virement bancaire</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg opacity-50">
                    <RadioGroupItem value="credit_card" id="credit_card" disabled className="text-gray-500" />
                    <Label htmlFor="credit_card" className="flex-1">
                      <div>
                        <div className="font-medium text-gray-500">Carte bancaire</div>
                        <div className="text-sm text-gray-500">Bientôt disponible</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "bank_transfer" && (
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <h4 className="font-semibold text-yellow-500 mb-2">Informations bancaires :</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div>Banque : Attijariwafa Bank</div>
                      <div>RIB : 007 780 0000123456789012 34</div>
                      <div>Bénéficiaire : HADRI PARFUMS SARL</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Conditions */}
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
                      J'accepte les{" "}
                      <a href="#" className="text-yellow-500 hover:text-yellow-400 underline">
                        conditions générales de vente
                      </a>{" "}
                      et la{" "}
                      <a href="#" className="text-yellow-500 hover:text-yellow-400 underline">
                        politique de confidentialité
                      </a>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="newsletter" className="mt-1" />
                    <Label htmlFor="newsletter" className="text-sm text-gray-300">
                      Je souhaite recevoir les offres spéciales et nouveautés par email
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Résumé de commande */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-700 sticky top-4">
              <CardHeader>
                <CardTitle className="text-white">Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Articles */}
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-xs">PACK</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-400 mt-1">Parfums: {item.parfums.join(", ")}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-400">Qté: {item.quantity}</span>
                          <span className="font-semibold text-yellow-500">{item.price} DH</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Sous-total</span>
                    <span>{subtotal} DH</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Livraison</span>
                    <span className={shipping === 0 ? "text-green-500" : ""}>
                      {shipping === 0 ? "Gratuite" : `${shipping} DH`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <div className="text-xs text-green-500">🎉 Vous économisez 30 DH sur la livraison !</div>
                  )}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-yellow-500">{total} DH</span>
                  </div>
                </div>

                {/* Garanties */}
                <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <Lock className="h-4 w-4 mr-2 text-green-500" />
                    Paiement 100% sécurisé
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Truck className="h-4 w-4 mr-2 text-blue-500" />
                    Livraison sous 24-48h
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Phone className="h-4 w-4 mr-2 text-yellow-500" />
                    Support client 7j/7
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleSubmitOrder}
                >
                  Confirmer la commande
                </Button>

                <div className="text-center">
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                    onClick={() => window.history.back()}
                  >
                    ← Retour au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer de sécurité */}
      <div className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2 text-green-500" />
              Connexion SSL sécurisée
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-blue-500" />
              Données protégées
            </div>
            <div className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-yellow-500" />
              Paiement sécurisé
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
