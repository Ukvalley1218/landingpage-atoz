import { useEffect, useState } from "react";

export default function RecentPurchasePopup() {
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState(null);
  const [timeAgo, setTimeAgo] = useState("1m ago");

  const purchases = [
    { name: "Aarav Mehta",    city: "Mumbai",      country: "India" },
    { name: "Riya Patel",     city: "Ahmedabad",   country: "India" },
    { name: "Neha Sharma",    city: "Delhi",       country: "India" },
    { name: "Karthik Iyer",   city: "Chennai",     country: "India" },
    { name: "Pooja Nair",     city: "Kochi",       country: "India" },
    { name: "Rahul Verma",    city: "Jaipur",      country: "India" },
    { name: "Michael Brown",  city: "New York",    country: "USA"   },
    { name: "Sophia Johnson", city: "Los Angeles", country: "USA"   },
    { name: "Ahmed Khan",     city: "Dubai",       country: "UAE"   },
    { name: "Fatima Ali",     city: "Sharjah",     country: "UAE"   },
  ];

  const timeOptions = ["2s ago", "5s ago", "15s ago", "30s ago", "1m ago"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPerson(purchases[Math.floor(Math.random() * purchases.length)]);
      setTimeAgo(timeOptions[Math.floor(Math.random() * timeOptions.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  if (!show || !person) return null;

  return (
    <>
      <div className="recent-purchase-popup">
        {/* Avatar */}
        <div className="rpp-avatar">📚</div>

        {/* Text */}
        <div className="rpp-body">
          <div className="rpp-top-row">
            <strong>{person.name}</strong>
            <span className="rpp-time">{timeAgo}</span>
          </div>
          <div className="rpp-location">{person.city}, {person.country}</div>
          <div className="rpp-action">just purchased this book</div>
        </div>
      </div>

      <style>{`
        .recent-purchase-popup {
          position: fixed;
          bottom: 180px;
          left: 20px;
          background: #f7f3ff;
          color: #1a1a1a;
          padding: 14px 18px;
          border-radius: 14px;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
          font-size: 14px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 300px;
          border-left: 5px solid #123050;
          animation: rpp-slideIn 0.4s ease-out;
        }

        @media (max-width: 480px) {
          .recent-purchase-popup {
            width: calc(100vw - 40px);
            bottom: 100px;
            left: 20px;
          }
        }

        .rpp-avatar {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          background: #123050;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .rpp-body {
          flex: 1;
          min-width: 0;
        }

        .rpp-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .rpp-top-row strong {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .rpp-time {
          font-size: 12px;
          color: #123050;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .rpp-location {
          font-size: 13px;
          opacity: 0.7;
          margin-top: 2px;
        }

        .rpp-action {
          font-size: 13px;
          margin-top: 3px;
          color: #123050;
          font-weight: 500;
        }

        @keyframes rpp-slideIn {
          from { transform: translateY(16px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}