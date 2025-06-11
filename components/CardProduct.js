import Link from "next/link";

export default function CardProduct() {
  return (
    <div class="card bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div class="card-actions justify-end">
          <Link href="/" class="btn btn-primary threed">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
