export default function App() {
  const buttons = [
    { label: 'info', href: 'https://t.me/hatealinablog' },
    { label: 'soundcloud', href: 'https://soundcloud.com/lilwyshitposts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { label: 'payhip', href: 'https://payhip.com/variif1p' }
  ]

  return (
    <div style={styles.root}>
      <div style={styles.bg}></div>

      <div style={styles.center}>
        <h1 style={styles.h1}>Welcome to<br/>my site!</h1>

        <div style={styles.buttons}>
          {buttons.map((b) => (
            <a key={b.label} href={b.href} target="_blank" style={styles.button}>
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  root: {
    height: '100vh',
    background: 'black',
    color: 'white',
    overflow: 'hidden',
    fontFamily: 'sans-serif'
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('/Daisies Blue Sign.jpg')",
    backgroundSize: 'cover',
    filter: 'blur(1px) brightness(0.9)'
  },
  center: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 40,
    textAlign: 'center',
    textShadow: '0 0 20px white'
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  button: {
    padding: '10px 20px',
    borderRadius: 999,
    background: 'rgba(255,255,255,0.15)',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    backdropFilter: 'blur(10px)'
  }
}
