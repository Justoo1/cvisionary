import { Country } from "@/types";
import React from "react";

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: Country | null;
  onSelectCountry: (country: Country) => void;
}

const CountrySelector = ({
  countries,
  selectedCountry,
  onSelectCountry,
}: CountrySelectorProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const country = countries.find((c) => c.id === selectedId) || null;
    if (country) {
      onSelectCountry(country);
    }
  };

  return (
    <div className="relative">
      <select
        value={selectedCountry?.id || ""}
        onChange={handleChange}
        className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg className="h-4 w-4 fill-current text-gray-400" viewBox="0 0 20 20">
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CountrySelector;
