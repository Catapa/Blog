'use client';

import { Category } from "@/types";
import { useEffect, useState } from "react";

export const CategorySelect = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            fetch('http://localhost:8080/api/topics', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(categories => setCategories(categories.data));
        }

        fetchCategories();
    }, []);

    return (
        <select name="category" className="w-[180px] p-2 text-sm">
            {
                categories.map(category => (
                <option key={category.name} value={category.id}>{category.name}</option>
            ))
            }
            
        </select>
    );
};