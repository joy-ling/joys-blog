import { Categories, getCategories } from "@/lib/posts";
import Link from "next/link";

export default function CategoriesPage() {
    const categories = getCategories();

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h2 className="text-xl">Categories</h2>
            <ul>
                {categories.map((category: Categories) => {
                    return (
                        <li key={category.categorySlug}>
                            <Link href={`/blog/categories/${category.categorySlug}`}>{category.categoryName}</Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}