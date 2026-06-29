import {
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying your payment...");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const gateway = searchParams.get("gateway");
  const navigate = useNavigate();

  /* ================= PAYMENT VERIFY ================= */
  useEffect(() => {
    async function verify() {
      try {
        if (gateway === "stripe") {
          const sessionId = searchParams.get("session_id");

          const res = await fetch(
            "https://testingdrmamatajain.valleyhoster.com/api/verifyPayment_t3",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                session_id: sessionId,
                gateway: "stripe",
              }),
            }
          );

          console.log("Payment response:", res);

          const data = await res.json();
          console.log("Payment data:", data);
          
          if (data?.success) {
            setStatus("Your payment was successful!");
            setSuccess(true);
          } else {
            setStatus("Payment verification failed.");
          }
        } else if (gateway === "razorpay") {
          setStatus("Your payment was successful!");
          setSuccess(true);
        } else {
          setStatus("Unknown payment gateway.");
        }
      } catch (err) {
        console.error("Payment verify error:", err);
        setStatus("Verification failed. Please contact support.");
      } finally {
        setLoading(false);
      }
    }

    verify();
  }, [gateway, searchParams]);

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* ===== PAYMENT CARD ===== */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 text-center border">
          {loading ? (
            <>
              <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-700 rounded-full animate-spin mx-auto mb-6" />
              <p className="text-gray-600 text-lg">{status}</p>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                {success ? (
                  <CheckCircle className="w-20 h-20 text-green-500" />
                ) : status.includes("failed") ? (
                  <AlertTriangle className="w-20 h-20 text-yellow-500" />
                ) : (
                  <XCircle className="w-20 h-20 text-red-500" />
                )}
              </div>

              <h1 className="text-3xl font-extrabold text-blue-900 mb-3">
                {success ? "Thank You for Your Purchase!" : "Payment Issue"}
              </h1>

              <p
                className={`text-lg mb-6 ${
                  success ? "text-gray-700" : "text-red-500"
                }`}
              >
                {status}
              </p>

              {success && (
                
                 <a href="https://tejasvalleyhoster.com/books/atoz2/"
                  className="inline-flex cursor-pointer items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition font-semibold"
                >
                  Back To The Page
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}