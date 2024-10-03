"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {drinks.map((drink, index) => {
        return (
          <motion.li
            key={drink.idDrink}
            className="card bg-base-100 shadow-xl"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
          >
            <div className="card-body">
              {/* Card Image */}
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              {/* Drink Name */}
              <h2 className="card-title text-2xl font-medium">
                <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
              </h2>

              {/* Additional Drink Info (you can customize) */}
              <div className="card-actions justify-end">
                <Link
                  href={`/drinks/${drink.idDrink}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
