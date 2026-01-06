import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      {/* Main content */}
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-500 blur-2xl opacity-20 rounded-full" />
          <h1 className="relative text-9xl font-black text-gray-900 tracking-tighter">
            404
          </h1>
          <div className="mt-4 w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600">
            Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>

        {/* Single Action Button */}
        <div className="pt-4">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-3 rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
          >
            <span>←</span>
            Kembali ke Halaman Sebelumnya
          </button>
        </div>

        {/* Simple decorative element */}
        <div className="pt-8">
          <div className="inline-flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-150" />
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse animation-delay-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Add custom CSS for animations
const styles = `
  .animation-delay-150 {
    animation-delay: 150ms;
  }
  
  .animation-delay-300 {
    animation-delay: 300ms;
  }
`;

// Add styles to the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}