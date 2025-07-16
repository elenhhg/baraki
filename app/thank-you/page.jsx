import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 bg-black">
      <div className="max-w-xl text-center animate-fade-in-up">
        <CheckCircle className="w-20 h-20 mx-auto mb-6 text-red-600 animate-pulse" />
        <h1 className="mb-4 text-5xl font-extrabold tracking-wide text-white">
          Thank You!
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Your reservation has been successfully submitted. <br />
          We'll contact you shortly to confirm the details.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 font-semibold text-red-600 transition-colors duration-300 bg-black border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
