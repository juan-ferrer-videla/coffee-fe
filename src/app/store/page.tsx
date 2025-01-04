import { Product } from "@/components/product";
import img1 from "@/assets/cogollo.webp";

const products = [
  {
    title: "Coffee",
    price: 3400,
    id: 1,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
  {
    title: "Coffee",
    price: 4000,
    id: 2,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
  {
    title: "Coffee",
    price: 5400,
    id: 3,
    img: img1,
    description: "ashdkasjhdakjsdhas dajk sdaks dasd hasdk asdh",
    is_recommended: true,
  },
];

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight lg:text-5xl xl:text-6xl">
          Store
        </h1>
        <p className="mb-8 max-w-2xl scroll-m-20 text-lg font-light text-muted-foreground sm:mb-12 md:mb-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          ipsam nihil tenetur voluptas architecto dolores, consequatur illo
          accusantium culpa tempore est placeat, ad similique magni fugiat harum
          obcaecati rem velit!
        </p>
      </div>
      <section className="pb-4 sm:pb-8 md:pb-12 lg:pb-16">
        <ul className="grid justify-center gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
          {products.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
