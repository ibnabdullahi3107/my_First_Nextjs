import Image from 'next/image';
import React from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const FetchDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to Fetch Data");
  }

  return res.json();
}

const SingleDrinkPage = async ({ params }) => {
  const data = await FetchDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  const category = data?.drinks[0]?.strCategory;
  const dateMdfy = data?.drinks[0]?.dateModified;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          {/* Image */}
          <Image
            src={imgSrc}
            alt={title} 
            width={300} 
            height={300} 
            className="w-58 h-49 rounded-lg shadow-lg mb-4 object-cover"
            priority
          />
        </figure>
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div> 
          </h2>

          {/* Category */}
          <p className="font-bold">Category: {category}</p>

          {/* Date Modified */}
          <p className="text-sm text-gray-500">Last Modified: {dateMdfy || 'N/A'}</p>

          <div className="card-actions justify-end">
            {/* Badges */}
            <div className="badge badge-outline">Drinks</div>
            <div className="badge badge-outline">{category}</div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDrinkPage;
