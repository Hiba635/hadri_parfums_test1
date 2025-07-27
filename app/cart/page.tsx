"use client"

import { useState } from "react"
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pack 4 Parfums Premium",
      price: 299,
      quantity: 1,
      parfums: ["Oud Royal", "Rose Damascena", "Ambre Noir", "Jasmin Blanc"],
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((items) => items.filter((item) => item.id !== id))
    } else {
      setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-center py-2 text-sm font-medium">
        LIVRAISON GRATUITE À PARTIR DE 200 DHS
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            className="text-yellow-500 hover:text-yellow-400 mr-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour
          </Button>
          <h1 className="text-3xl font-bold text-white">Votre Panier</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold">PACK</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-400 mb-2">Parfums sélectionnés: {item.parfums.join(", ")}</div>
                      <div className="text-lg font-bold text-yellow-500">{item.price} DH</div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-white hover:bg-gray-700"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 py-2 text-white">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-white hover:bg-gray-700"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 0)}
                        className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {cartItems.length === 0 && (
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-400 text-lg">Votre panier est vide</p>
                  <Button
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black"
                    onClick={() => (window.location.href = "/")}
                  >
                    Continuer vos achats
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-700 sticky top-4">
              <CardHeader>
                <CardTitle className="text-white">Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Sous-total</span>
                  <span>{total} DH</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuite</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-yellow-500">{total} DH</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 text-lg"
                  disabled={cartItems.length === 0}
                  onClick={() => (window.location.href = "/checkout")}
                >
                  Passer la commande
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  onClick={() => (window.location.href = "/")}
                >
                  Continuer vos achats
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
