import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region");
    const data = await res.json();

    return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
    const [search, setSearch] = useState<string>("");
    const [region, setRegion] = useState<string>("");



    const filteredCountries = loaderData.filter((country: any) => {
        const matchesRegion = !region || country.region.toLowerCase().includes(region.toLowerCase());
        const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());

        return matchesSearch && matchesRegion;
    })

    return (
        <div>
            <h2> Countries </h2>

            <div>
                <input 
                type="text" 
                placeholder="Search by name..."
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                />

                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="">All Regions </option>
                    <option value="africa"> Africa </option>
                    <option value="americas"> Americas </option>
                    <option value="asia"> Asia </option>
                    <option value="europe"> Europe </option>
                    <option value="oceania"> Oceania </option> 
                </select>
            </div>
            <ul>
                {filteredCountries.map((country: any, key: number) => (
                    <li key={key}>
                        <Link to={`/countries/${country.name.common}`}> { country.name.common }</Link>
                        <div>
                            Region: {country.region} | Population: { country.population} 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
