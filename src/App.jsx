export default function LandingPage() {
  const buttons = [
    {
      label: "info",
      href: "https://t.me/hatealinablog",
    },
    {
      label: "soundcloud",
      href: "https://soundcloud.com/lilwyshitposts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      label: "payhip",
      href: "https://payhip.com/variif1p",
    },
  ];

  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chango&family=Great+Vibes&display=swap');

        body, html {
          margin: 0;
          padding: 0;
        }

        .page {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: black;
          color: white;
          font-family: sans-serif;
        }

        .bg {
          position: absolute;
          inset: 0;
          background-image: url('/DaisiesBlueSign.jpg');
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          filter: blur(1px) brightness(0.9);
        }

        .fade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent);
        }

        .circle {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .c1 { left: -120px; top: 40%; width: 500px; height: 500px; }
        .c2 { right: -120px; top: 8%; width: 300px; height: 300px; }
        .c3 { right: 5%; top: 2%; width: 420px; height: 420px; }
        .c4 { left: 25%; top: 52%; width: 500px; height: 500px; }

        .line {
          position: absolute;
          left: 0;
          top: 42%;
          width: 40%;
          height: 1px;
          background: rgba(255,255,255,0.2);
          transform: rotate(6deg);
        }

        .container {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .logo {
          font-family: "Chango", cursive;
          font-size: 16px;
        }

        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: -120px;
        }

        h1 {
          font-family: "Great Vibes", cursive;
          font-size: 42px;
          text-align: center;
          line-height: 1;
          text-shadow: 0 0 20px rgba(255,255,255,0.4);
        }

        .buttons {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 160px;
        }

        .glass {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          border-radius: 999px;
          text-decoration: none;
          color: white;
          font-family: "Great Vibes", cursive;
          font-size: 18px;

          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(18px);

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.25),
            0 10px 40px rgba(0,0,0,0.25);

          transition: 0.4s;
          overflow: hidden;
        }

        .glass:hover {
          transform: translateY(-4px) scale(1.02);
          background: rgba(255,255,255,0.18);
        }

        .glass span {
          position: relative;
          z-index: 2;
          text-shadow: 0 0 10px rgba(255,255,255,0.6);
        }

        .glass::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8), transparent 25%),
            radial-gradient(circle at 80% 50%, rgba(173,216,255,0.55), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(255,200,220,0.45), transparent 35%);
          mix-blend-mode: screen;
          opacity: 0.9;
        }

      `}</style>

      <div className="bg"></div>

      <div className="fade"></div>

      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="circle c4"></div>

      <div className="line"></div>

      <div className="container">
        <div className="logo">variislop</div>

        <div className="center">
          <h1>
            Welcome to<br />my site!
          </h1>

          <div className="buttons">
            {buttons.map((b) => (
              <a key={b.label} className="glass" href={b.href} target="_blank">
                <span>{b.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
