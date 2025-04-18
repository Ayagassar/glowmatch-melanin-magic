
import ProductCard from "./ProductCard";

interface RoutineSectionProps {
  title: string;
  products: {
    name: string;
    brand: string;
    purpose: string;
    matchReason: string;
    imageUrl: string;
  }[];
}

const RoutineSection = ({ title, products }: RoutineSectionProps) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-medium text-skin-brown-800 mb-6">{title}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RoutineSection;
