import { useEffect, useState } from "react";

export default function CenterOffPopup() {
  const [show, setShow] = useState(false);
  const [popupCount, setPopupCount] = useState(0);
  const [pricing, setPricing] = useState(null);
  const [pricingReady, setPricingReady] = useState(false);

  /* -------------------------------------------------------
     LOAD PRICING (CLIENT SAFE)
  -------------------------------------------------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("userPricing");
    if (saved) {
      setPricing(JSON.parse(saved));
      setPricingReady(true);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        let newPricing;
        switch (data.country_code) {
          case "IN":
            newPricing = { symbol: "₹", ebookAmount: "99", hardcopyAmount: "999" };
            break;
          case "AE":
            newPricing = { symbol: "AED", ebookAmount: "9", hardcopyAmount: "99" };
            break;
          default:
            newPricing = { symbol: "$", ebookAmount: "4.99", hardcopyAmount: "19.99" };
        }
        localStorage.setItem("userPricing", JSON.stringify(newPricing));
        setPricing(newPricing);
      })
      .catch(() => {
        const fallback = { symbol: "$", ebookAmount: "4.99", hardcopyAmount: "19.99" };
        localStorage.setItem("userPricing", JSON.stringify(fallback));
        setPricing(fallback);
      })
      .finally(() => setPricingReady(true));
  }, []);

  /* -------------------------------------------------------
     POPUP TIMING (ONLY AFTER PRICING)
  -------------------------------------------------------- */
  useEffect(() => {
    if (!pricingReady) return;

    const delay =
      popupCount === 0 ? 15000 :
      popupCount === 1 ? 20000 :
      25000;

    const showTimer = setTimeout(() => setShow(true), delay);
    const hideTimer = setTimeout(() => {
      setShow(false);
      setPopupCount((p) => p + 1);
    }, delay + 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [popupCount, pricingReady]);

  if (!show || !pricing) return null;

  const ref = sessionStorage.getItem("reference") || "direct";

  const goToCheckout = (type) => {
    const params = new URLSearchParams({
      type,
      reference: ref,
      utm_source: sessionStorage.getItem("utm_source") || "",
      utm_medium: sessionStorage.getItem("utm_medium") || "",
      utm_campaign: sessionStorage.getItem("utm_campaign") || "",
      utm_content: sessionStorage.getItem("utm_content") || "",
    }).toString();
    window.location.href = `/books/atoz/checkout?${params}`;
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        {/* Close Button */}
        <button
          className="popup-close"
          onClick={() => {
            setShow(false);
            setPopupCount((p) => p + 1);
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Badge */}
        <div className="popup-badge">Limited Offer</div>

        {/* Title */}
        <h2 className="popup-title">The A To Z Of Dubai<br />Real Estate Book</h2>
        <p className="popup-author">By <strong>Mamata Jain</strong></p>

        {/* Book Cover */}
        <div className="popup-image-wrap">
          <img
            src="/books/atoz/images/heronew.webp"
            alt="The A To Z Of Dubai Real Estate"
            className="popup-image"
          />
        </div>

        {/* Description */}
        <p className="popup-description">
          Complete Guide to Investing &amp; Buying in Dubai
        </p>

        {/* Pricing Row */}
        {/* <div className="popup-pricing-row">
          <div className="popup-price-chip">
            📱 Ebook — <strong>{pricing.symbol}{pricing.ebookAmount}</strong>
          </div>
          <div className="popup-price-chip">
            📦 Hardcopy — <strong>{pricing.symbol}{pricing.hardcopyAmount}</strong>
          </div>
        </div> */}

        {/* CTA Buttons */}
        <div className="popup-buttons">
          <button className="popup-btn popup-btn-primary" onClick={() => goToCheckout("ebook")}>
            <span className="heartbeat-text">Order Ebook Now →</span>
          </button>
          <button className="popup-btn popup-btn-secondary" onClick={() => goToCheckout("hardcopy")}>
            <span className="heartbeat-text">Order Hardcopy Now →</span>
          </button>
        </div>

        {/* Timer Bar */}
        <div className="popup-timer-wrap">
          <div className="popup-timer-bar" />
        </div>
      </div>

      <style>{`
        /* ── Overlay ── */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 16px;
          backdrop-filter: blur(3px);
        }

        /* ── Card ── */
        .popup-card {
          background: linear-gradient(160deg, #0f2d4e 0%, #123050 60%, #0a1f36 100%);
          border: 1px solid rgba(255, 205, 155, 0.2);
          border-radius: 24px;
          width: 100%;
          max-width: 460px;
          padding: 32px 28px 24px;
          text-align: center;
          color: #fff;
          position: relative;
          animation: slideDown 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,205,155,0.08);
        }

        /* ── Close ── */
        .popup-close {
          position: absolute;
          top: 14px;
          right: 16px;
          background: rgba(255,255,255,0.08);
          border: none;
          color: #fff;
          font-size: 20px;
          line-height: 1;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .popup-close:hover { background: rgba(255,255,255,0.18); }

        /* ── Badge ── */
        .popup-badge {
          display: inline-block;
          background: rgba(255, 205, 155, 0.15);
          border: 1px solid rgba(255, 205, 155, 0.4);
          color: #FFCD9B;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 14px;
        }

        /* ── Title ── */
        .popup-title {
          color: #FFCD9B;
          font-size: clamp(20px, 5vw, 26px);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 6px;
        }

        /* ── Author ── */
        .popup-author {
          font-size: 13px;
          opacity: 0.75;
          margin: 0 0 16px;
        }

        /* ── Book Image ── */
        .popup-image-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 14px;
        }
        .popup-image {
          width: 160px;
          border-radius: 12px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.45);
        }

        /* ── Description ── */
        .popup-description {
          font-size: 13.5px;
          opacity: 0.8;
          margin: 0 0 16px;
          line-height: 1.5;
        }

        /* ── Pricing chips ── */
        .popup-pricing-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .popup-price-chip {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 13px;
          color: #fff;
        }
        .popup-price-chip strong {
          color: #FFCD9B;
        }

        /* ── Buttons ── */
        .popup-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .popup-btn {
          width: 100%;
          padding: 14px 20px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
        }
        .popup-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }
        .popup-btn:active { transform: translateY(0); }

        .popup-btn-primary {
          background: #FFCD9B;
          color: #0D2C4B;
          box-shadow: 0 6px 20px rgba(255, 205, 155, 0.35);
        }
        .popup-btn-secondary {
          background: transparent;
          color: #FFCD9B;
          border: 2px solid #FFCD9B;
        }

        /* ── Timer ── */
        .popup-timer-wrap {
          height: 3px;
          background: rgba(255,255,255,0.12);
          margin-top: 20px;
          border-radius: 2px;
          overflow: hidden;
        }
        .popup-timer-bar {
          height: 100%;
          width: 100%;
          background: #FFCD9B;
          animation: shrink 5s linear forwards;
        }

        /* ── Animations ── */
        @keyframes slideDown {
          from { transform: translateY(-40px) scale(0.97); opacity: 0; }
          to   { transform: translateY(0)     scale(1);    opacity: 1; }
        }
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%;   }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.04); }
        }
        .heartbeat-text {
          display: inline-block;
          animation: heartbeat 3s infinite;
        }

        /* ── Mobile ── */
        @media (max-width: 400px) {
          .popup-card { padding: 28px 18px 20px; }
          .popup-title { font-size: 20px; }
          .popup-image { width: 130px; }
        }
      `}</style>
    </div>
  );
}