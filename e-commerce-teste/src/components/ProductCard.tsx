import { Star, ShoppingCart } from 'lucide-react'
import type { Product } from '../interfaces'

export default function ProductCard( product: Product ) {
  function convertValue(num: number) : string {
    let numF = num.toFixed(2)
    numF = numF.replace(/\./g, ',')
    return 'R$ ' + numF
  }

  return (
      <div className="group bg-brand-surface w-72 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-primary/10 hover:cursor-pointer">
    {/* Imagem do Produto */}
    <div className="relative h-64 bg-gray-100 overflow-hidden">
      <img 
        src={product.img_url}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <span className="absolute top-3 left-3 bg-brand-accent text-brand-text text-xs font-bold px-2 py-1 rounded-full uppercase">
        Oferta
      </span>
    </div>

    {/* Conteúdo */}
    <div className="p-5 text-start">
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className={`${i <= product.stars_average - 1 ? 'fill-brand-accent' : 'fill-brand-bg'} text-brand-accent`} />
        ))}
        <span className="text-brand-muted text-xs ml-1">({product.reviews})</span>
      </div>

      <h3 className="text-brand-text font-semibold text-lg leading-tight mb-1">
        {product.name}
      </h3>
      <p className="text-brand-muted text-sm mb-4">{product.collection}</p>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-brand-muted text-xs line-through block">{convertValue(product.old_price)}</span>
          <span className="text-brand-primary font-bold text-xl">{convertValue(product.current_price)}</span>
        </div>

        <button className="bg-brand-primary hover:bg-brand-primary/90 text-white p-3 rounded-xl transition-colors shadow-lg shadow-brand-primary/20">
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  </div>
  )
}