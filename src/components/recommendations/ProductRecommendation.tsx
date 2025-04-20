
import React from "react";

interface ProductRecommendationProps {
  name: string;
  brand: string;
  type: string;
  highlights: string;
  recommendation: string;
  imageUrl: string;
  step: number;
}

const ProductRecommendation = ({
  name,
  brand,
  type,
  highlights,
  recommendation,
  imageUrl,
  step
}: ProductRecommendationProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-skin-brown-200 flex flex-col">
      <div className="p-4 border-b border-skin-brown-100 bg-skin-brown-50 flex items-center">
        <div className="w-8 h-8 rounded-full bg-skin-terracotta-500 text-white flex items-center justify-center font-medium flex-shrink-0">
          {step}
        </div>
        <span className="ml-3 font-medium text-skin-brown-800">{type}</span>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 aspect-square">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4 flex-1">
          <p className="text-skin-peach-700 text-sm font-medium">{brand}</p>
          <h3 className="font-medium text-skin-brown-800 mb-1">{name}</h3>
          <p className="text-sm text-skin-brown-600 mb-3">{highlights}</p>
          
          <div className="mt-auto">
            <h4 className="text-xs font-medium uppercase text-skin-brown-500 mb-1">Why it's perfect for you:</h4>
            <p className="text-sm text-skin-brown-700">{recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendation;
