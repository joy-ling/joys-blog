import { Category } from "@/lib/posts";
import Link from "next/link";

export default function CategoryLabel({category}: {category: Category}) {
    return (
        <Link href={`/blog/categories/${category?.categorySlug}`}>
            <span className="text-xs text-red-500">
                {category?.categoryName}
            </span>
        </Link>
    );
}