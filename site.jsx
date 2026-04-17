export default function LandingPage() {
  const buttons = [
    {
      label: 'info',
      href: 'https://t.me/hatealinablog',
    },
    {
      label: 'soundcloud',
      href: 'https://soundcloud.com/lilwyshitposts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      label: 'payhip',
      href: 'https://payhip.com/variif1p',
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chango&family=Great+Vibes&display=swap');

        .script-font {
          font-family: 'Great Vibes', cursive;
        }

        .logo-font {
          font-family: 'Chango', cursive;
        }

        .glass-button {
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.25),
            0 10px 40px rgba(0,0,0,0.25);
        }

        .glass-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8), transparent 25%),
            radial-gradient(circle at 80% 50%, rgba(173,216,255,0.55), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(255,200,220,0.45), transparent 35%);
          mix-blend-mode: screen;
          opacity: 0.9;
          pointer-events: none;
        }

        .glass-button:hover {
          transform: translateY(-4px) scale(1.02);
          background: rgba(255,255,255,0.18);
        }
      `}</style>

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/Daisies Blue Sign.jpg')",
          filter: 'blur(1px) brightness(0.9)',
        }}
      />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />

      <div className="absolute -left-32 top-[40%] h-[500px] w-[500px] rounded-full border border-white/25" />
      <div className="absolute right-[-120px] top-[8%] h-[300px] w-[300px] rounded-full border border-white/20" />
      <div className="absolute right-[5%] top-[2%] h-[420px] w-[420px] rounded-full border border-white/15" />
      <div className="absolute left-[25%] top-[52%] h-[500px] w-[500px] rounded-full border border-white/20" />

      <div className="absolute left-0 top-[42%] h-px w-[40%] bg-white/20 rotate-6" />

      <div className="relative z-10 flex min-h-screen flex-col px-4 py-5 md:px-6">
        <div className="logo-font text-sm text-white drop-shadow-lg md:text-lg">
          variislop
        </div>

        <div className="-mt-56 flex flex-1 flex-col items-center justify-center">
          <h1 className="script-font text-center text-3xl leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] md:text-5xl">
            Welcome to
            <br />
            my site!
          </h1>

          <div className="mt-4 flex w-full max-w-[160px] flex-col gap-3">
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button script-font flex h-10 items-center justify-center rounded-full text-lg text-white transition-all duration-500"
              >
                <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                  {button.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
