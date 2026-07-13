import TypingText from "../components/TypingText";
import headline from "../headline";

function Home() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page" id = "home">
      <h1 style={{ textAlign: 'center', paddingRight: '20%'}}>Hi, I'm PJ.</h1>

      <div className ="typing-container narrow">
        <div style ={{ paddingLeft: '40%'}}>
          <TypingText
            text={headline}
            speed={50}
            delay = {1000}
          />
        </div>
      </div>

      <div className="button-grid">
        <div style={{ textAlign: 'center' }}>
          <button className="btn" onClick={() => scrollTo('about')}>
            Learn More ⤵
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;