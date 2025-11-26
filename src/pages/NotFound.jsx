import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-serif text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-gold text-white rounded-full hover:bg-gold-dark transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
