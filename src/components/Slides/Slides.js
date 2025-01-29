import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/moon.css';
import './SlideDeck.css';

const SlideDeck = () => {
  useEffect(() => {
    let deck = new Reveal({
      plugins: [Markdown],
      controls: true,
      progress: true,
      transition: 'slide',
    });
    deck.initialize();
  }, []);

  return (
    <div className='reveal reveal-demo overflow-hidden outline-none text-center' tabIndex={-1}>
      <div className="slides">
        <section>
          <h1>Slide Deck</h1>
        </section>
        <section>
          Slide 1
        </section>
        <section>
          Slide 2
        </section>
      </div>
    </div>
  );
};

export default SlideDeck;