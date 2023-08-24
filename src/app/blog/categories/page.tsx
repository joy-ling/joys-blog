import { Category, getCategories } from "@/lib/posts";
import Link from "next/link";

export default function CategoriesPage() {
    const categories = getCategories();
    

    return (
        <div>
            <h2 className="text-xl">Categories</h2>
            <ul>
                {categories.map((category: Category) => {
                    return (
                        <li key={category.categorySlug}>
                            <Link href={`/blog/categories/${category.categorySlug}`}>{category.categoryName}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
        
    );
}