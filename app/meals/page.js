import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/type-1"> Meal-type-1</Link>
      </p>
      <p>
        <Link href="/meals/type-2"> Meal-type-2</Link>
      </p>
    </main>
  );
}
