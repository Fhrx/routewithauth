import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-7xl font-bold text-black mb-4">404</h1>
      <p className="text-gray-600 text-lg mb-6 text-center">
        Halaman yang kamu cari tidak ditemukan
      </p>
      <button
        onClick={() => navigate("/login")}
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
      >
        Kembali ke Login
      </button>
    </div>
  );
}