export default function ButtonFacebook() {
  return (
    <>
      <a
        href="https://facebook.com/"
        target="_blank"
        aria-label="Contact us on Facebook"
        className="btn bg-[#1A77F2] text-white border-[#005fd8]"
      >
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="white"
            d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
          ></path>
        </svg>
        Contact on Facebook
      </a>
    </>
  );
}
