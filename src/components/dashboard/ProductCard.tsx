
interface ProductCardProps {
  name: string;
  brand: string;
  purpose: string;
  matchReason: string;
  imageUrl: string;
}

const ProductCard = ({ name, brand, purpose, matchReason, imageUrl }: ProductCardProps) => {
  return (
    <div className="card-product">
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <div className="p-4">
        <p className="text-skin-peach-700 text-sm font-medium mb-1">{brand}</p>
        <h3 className="font-medium text-skin-brown-800 mb-2">{name}</h3>
        <p className="text-skin-brown-600 text-sm mb-3">{purpose}</p>
        
        <div className="border-t border-skin-brown-100 pt-3 mt-3">
          <p className="text-xs text-skin-brown-800 font-medium mb-1">Why it's a match:</p>
          <p className="text-xs text-skin-brown-600">{matchReason}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
