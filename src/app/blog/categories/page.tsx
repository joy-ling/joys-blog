import { Category, getCategories } from "@/lib/posts";
import Link from "next/link";

export default function CategoriesPage() {
    const categories = getCategories();
    

    return (
        <main className="flex min-h-screen flex-col items-center pt-10 p-5 md:p-24">
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
        </main>
    );
}