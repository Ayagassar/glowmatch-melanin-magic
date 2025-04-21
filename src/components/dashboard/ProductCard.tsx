
interface ProductCardProps {
  name: string;
  brand: string;
  purpose: string;
  matchReason: string;
  imageUrl: string;
}

const ProductCard = ({ name, brand, purpose, matchReason, imageUrl }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-skin-brown-200 hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <div className="p-4">
        <div className="bg-skin-peach-100 text-skin-peach-700 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">
          {purpose}
        </div>
        
        <p className="text-skin-terracotta-600 text-sm font-medium mb-1">{brand}</p>
        <h3 className="font-medium text-skin-brown-800 mb-3">{name}</h3>
        
        <div className="border-t border-skin-brown-100 pt-3 mt-1">
          <p className="text-xs text-skin-brown-800 font-medium mb-1">Why it's perfect for you:</p>
          <p className="text-xs text-skin-brown-600">{matchReason}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
