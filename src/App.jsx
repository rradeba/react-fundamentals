import './App.css';

export function Header() {
  return (
    <header className="header">
      <h1>Nirvana</h1>
      <img src="/images.jpg" alt="nirvana" />
    </header>
  );
}

export function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers, most notably Chad Channing, before recruiting Dave Grohl in 1990. Nirvana's success popularized alternative rock, and they were often referenced as the figurehead band of Generation X. Despite a short mainstream career spanning only three years, their music maintains a popular following and continues to influence modern rock culture.</p>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Phone Number: (123)456-7890</p>
      <p>Email: kurt@gmail.com</p>
      <p>Address: 1234 Main St., Aberdeen, Washington</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;