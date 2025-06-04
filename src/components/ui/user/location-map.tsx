import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { IProduct } from "@/types"

export function UserLocationMap({ data }: { data: IProduct[] }) {

  const locationStats = Array.isArray(data)
    ? data.reduce(
      (acc, product) => {
        const location = product?.location || "Unknown"
        if (!acc[location]) {
          acc[location] = { count: 0, products: [] }
        }
        acc[location].count++
        acc[location].products.push(product)
        return acc
      },
      {} as Record<string, { count: number; products: typeof data }>
    )
    : {}


  const locations = Object.entries(locationStats)

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-violet-700" />
          My Locations ({locations.length})
        </CardTitle>
        <CardDescription>Where your products are listed</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-64 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg flex items-center justify-center border border-purple-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-purple-200 to-violet-200"></div>
          </div>
          {locations?.map(([location, data], index) => (
            <div
              key={location}
              className={`absolute animate-pulse`}
              style={{
                top: `${20 + index * 25}%`,
                left: `${15 + index * 30}%`,
              }}
            >
              <div className="relative">
                <div className="h-6 w-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {data.count}
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 min-w-max z-10 opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium">{location}</p>
                  <p className="text-xs text-gray-500">{data.count} product(s)</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center z-10">
            <Navigation className="h-8 w-8 text-purple-700 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">Product Distribution</p>
            <p className="text-sm text-gray-500">Hover markers for details</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {locations?.map(([location, data]) => (
            <div key={location} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">{location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {data.count} product{data.count !== 1 ? "s" : ""}
                </Badge>
                <div className="flex space-x-1">
                  {data.products?.map((product) => (
                    <div
                      key={product._id}
                      className={`w-2 h-2 rounded-full ${product.status === "sold" ? "bg-blue-500" : "bg-green-500"}`}
                      title={product.title}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
