import Link from "next/link";
import Image from "next/image";
import MassageChair from "@/public/images/massage-chair.webp";

export default function CardProduct() {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={MassageChair}
          alt="an picture showing the product, which is a massage chair"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <Link href="/" className="btn btn-primary threed">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
