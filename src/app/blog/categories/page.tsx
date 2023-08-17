import { Categories, getCategories } from "@/lib/posts";
import Link from "next/link";

export default function CategoriesPage() {
    const categories = getCategories();
    return (
        <div>
            <ul>
                {categories.map((category: Categories) => {
                    return (
                        <li>
                            <Link href={`/blog/category/`${category.categorySlug}}></Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}