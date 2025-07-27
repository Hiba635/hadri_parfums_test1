"use client"

import { useState } from "react"
import { Minus, Plus, Search, ShoppingCart, Menu, Truck, Shield, CreditCard, Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Parfum {
  id: string
  name: string
  category: "homme" | "femme" | "unisexe"
  price: number
  image: string
  description: string
}

const parfumsData: Parfum[] = [
  {
    id: "1",
    name: "Oud Royal",
    category: "homme",
    price: 120,
    image: "/placeholder.svg?height=100&width=100",
    description: "Fragrance orientale intense",
  },
  {
    id: "2",
    name: "Rose Damascena",
    category: "femme",
    price: 95,
    image: "/placeholder.svg?height=100&width=100",
    description: "Élégance florale pure",
  },
  {
    id: "3",
    name: "Ambre Noir",
    category: "unisexe",
    price: 110,
    image: "/placeholder.svg?height=100&width=100",
    description: "Mystère et sophistication",
  },
  {
    id: "4",
    name: "Jasmin Blanc",
    category: "femme",
    price: 85,
    image: "/placeholder.svg?height=100&width=100",
    description: "Fraîcheur florale",
  },
  {
    id: "5",
    name: "Santal Mystique",
    category: "homme",
    price: 130,
    image: "/placeholder.svg?height=100&width=100",
    description: "Boisé envoûtant",
  },
  {
    id: "6",
    name: "Bergamote Fraîche",
    category: "unisexe",
    price: 75,
    image: "/placeholder.svg?height=100&width=100",
    description: "Agrumes pétillants",
  },
  {
    id: "7",
    name: "Musc Précieux",
    category: "homme",
    price: 140,
    image: "/placeholder.svg?height=100&width=100",
    description: "Sensualité masculine",
  },
  {
    id: "8",
    name: "Vanille Dorée",
    category: "femme",
    price: 90,
    image: "/placeholder.svg?height=100&width=100",
    description: "Douceur gourmande",
  },
  {
    id: "9",
    name: "Cèdre Atlas",
    category: "homme",
    price: 115,
    image: "/placeholder.svg?height=100&width=100",
    description: "Force et caractère",
  },
  {
    id: "10",
    name: "Fleur d'Oranger",
    category: "femme",
    price: 80,
    image: "/placeholder.svg?height=100&width=100",
    description: "Fraîcheur méditerranéenne",
  },
]

export default function HadriParfumsAdvanced() {
  const [quantity, setQuantity] = useState(1)
  const [selectedChoices, setSelectedChoices] = useState<{ [key: string]: Parfum | null }>({
    choice1: null,
    choice2: null,
    choice3: null,
    choice4: null,
  })
  const [activeChoice, setActiveChoice] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const filteredParfums = parfumsData.filter((parfum) => {
    const matchesSearch = parfum.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || parfum.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleParfumSelect = (parfum: Parfum) => {
    if (activeChoice) {
      setSelectedChoices((prev) => ({
        ...prev,
        [activeChoice]: parfum,
      }))
      setActiveChoice(null)
    }
  }

  const handleAddToCart = () => {
    const selectedParfums = Object.values(selectedChoices).filter(Boolean)
    if (selectedParfums.length === 4) {
      setCartItems((prev) => [...prev, { pack: selectedParfums, quantity, price: 299 }])
      setShowSuccessModal(true)
    }
  }

  const isPackComplete = Object.values(selectedChoices).filter(Boolean).length === 4

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-center py-2 text-sm font-medium">
        LIVRAISON GRATUITE À PARTIR DE 200 DHS
      </div>

      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">👑 HADRI</div>
                <div className="text-xs text-gray-400 tracking-widest">COLLECTION PARFUM</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-yellow-500 font-medium transition-colors">
                PRODUITS
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 font-medium transition-colors">
                À PROPOS
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 font-medium transition-colors">
                NOS PACKS
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 font-medium transition-colors">
                CONTACT
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-500">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-yellow-500">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-yellow-500 text-black">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative border border-gray-800">
              {/* Discount Badge */}
              <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                25% DE REMISE
              </div>

              {/* Product Display */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  {/* Main Product Box */}
                  <div className="w-80 h-80 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-2xl shadow-2xl flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-500">
                    <div className="text-center text-black p-8">
                      <div className="text-4xl font-bold mb-3">HADRI</div>
                      <div className="text-xl mb-2">PARFUMS</div>
                      <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
                      <div className="text-sm font-semibold">PACK PREMIUM</div>
                      <div className="text-xs mt-2">4 FRAGRANCES SÉLECTIONNÉES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Pack 4 Parfums Premium</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-gray-400 font-medium">(127 avis clients)</span>
                <Badge className="bg-green-600 text-white">En stock</Badge>
              </div>
            </div>

            {/* Selection Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((num) => {
                  const choiceKey = `choice${num}`
                  const selectedParfum = selectedChoices[choiceKey]

                  return (
                    <div key={num} className="text-center">
                      <Button
                        variant="outline"
                        className={`w-full h-24 border-2 transition-all duration-300 ${
                          selectedParfum
                            ? "border-yellow-500 bg-yellow-500/10"
                            : "border-gray-600 hover:border-yellow-500 bg-gray-900 hover:bg-gray-800"
                        }`}
                        onClick={() => setActiveChoice(choiceKey)}
                      >
                        <div className="text-center">
                          {selectedParfum ? (
                            <>
                              <Check className="h-6 w-6 text-yellow-500 mx-auto mb-1" />
                              <span className="text-xs text-yellow-500 font-medium">{selectedParfum.name}</span>
                            </>
                          ) : (
                            <>
                              <Plus className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-400">Parfum {num}</span>
                            </>
                          )}
                        </div>
                      </Button>
                    </div>
                  )
                })}
              </div>

              {/* Selection Summary */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((num) => {
                  const choiceKey = `choice${num}`
                  const selectedParfum = selectedChoices[choiceKey]

                  return (
                    <div key={num} className="flex items-center justify-between py-3 border-b border-gray-800">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-300 font-medium">Choix {num} :</span>
                        <span className="text-white">{selectedParfum ? selectedParfum.name : "Non sélectionné"}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveChoice(choiceKey)}
                        className="text-yellow-500 hover:text-yellow-400"
                      >
                        {selectedParfum ? "Modifier" : "Choisir"}
                      </Button>
                    </div>
                  )
                })}
              </div>

              {!isPackComplete && (
                <div className="bg-yellow-600/20 border border-yellow-600/50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-300">
                    <span className="font-medium">💡 Information :</span> Veuillez sélectionner 4 parfums pour compléter
                    votre pack.
                  </p>
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-gray-400 line-through">399,00 DHs</span>
                <span className="text-4xl font-bold text-yellow-500">299,00 DHs</span>
                <Badge className="bg-red-600 text-white">-25%</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-600 rounded-lg bg-gray-900">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-white hover:bg-gray-800"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 py-3 min-w-[4rem] text-center font-medium text-white">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-white hover:bg-gray-800"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  disabled={!isPackComplete}
                  onClick={handleAddToCart}
                >
                  AJOUTER AU PANIER
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <Card className="text-center p-6 bg-gray-900 border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="text-sm font-bold text-white mb-1">LIVRAISON</div>
                  <div className="text-sm font-bold text-white mb-2">GRATUITE</div>
                  <div className="text-xs text-gray-400">À partir de 200 DH</div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-gray-900 border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="text-sm font-bold text-white mb-1">HAUTE</div>
                  <div className="text-sm font-bold text-white mb-2">QUALITÉ</div>
                  <div className="text-xs text-gray-400">Garantie authentique</div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-gray-900 border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="text-sm font-bold text-white mb-1">PAIEMENT À</div>
                  <div className="text-sm font-bold text-white mb-2">LA LIVRAISON</div>
                  <div className="text-xs text-gray-400">100% sécurisé</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Parfum Selection Modal */}
      <Dialog open={!!activeChoice} onOpenChange={() => setActiveChoice(null)}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-yellow-500">
              Choisir un parfum - {activeChoice && `Choix ${activeChoice.slice(-1)}`}
            </DialogTitle>
          </DialogHeader>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Rechercher par nom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48 bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all">Tous les parfums</SelectItem>
                <SelectItem value="homme">Parfum Homme</SelectItem>
                <SelectItem value="femme">Parfum Femme</SelectItem>
                <SelectItem value="unisexe">Parfum Unisexe</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Parfums Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredParfums.map((parfum) => (
              <Card
                key={parfum.id}
                className="bg-gray-800 border-gray-700 hover:border-yellow-500 cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => handleParfumSelect(parfum)}
              >
                <CardContent className="p-4">
                  <img
                    src={parfum.image || "/placeholder.svg"}
                    alt={parfum.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-bold text-white mb-1">{parfum.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{parfum.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge
                      className={`${
                        parfum.category === "homme"
                          ? "bg-blue-600"
                          : parfum.category === "femme"
                            ? "bg-pink-600"
                            : "bg-purple-600"
                      } text-white`}
                    >
                      {parfum.category.charAt(0).toUpperCase() + parfum.category.slice(1)}
                    </Badge>
                    <span className="text-yellow-500 font-bold">{parfum.price} DH</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredParfums.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">Aucun parfum trouvé avec ces critères.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-green-500 text-center">
              ✅ Produit ajouté avec succès à votre panier
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="text-center">
              <p className="text-gray-300 mb-4">Votre pack de 4 parfums a été ajouté au panier.</p>
            </div>

            <div className="flex flex-col space-y-3">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                onClick={() => {
                  setShowSuccessModal(false)
                  // Redirect to cart page
                  window.location.href = "/cart"
                }}
              >
                Voir le panier
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-bold"
                onClick={() => {
                  setShowSuccessModal(false)
                  // Redirect to checkout
                  window.location.href = "/checkout"
                }}
              >
                Passer la commande
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                onClick={() => setShowSuccessModal(false)}
              >
                Continuer vos achats
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
