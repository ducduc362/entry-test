import './App.css';
import HorizontalSlideShow from './components/HorizontalSlideShow';
import Slide from './components/HorizontalSlideShow/features/Slide';

function App() {
  return (
    <div className="App">
      <HorizontalSlideShow
        show={5}
        infiniteLoop={true}
      >
        <Slide>
          <img src="https://picsum.photos/id/240/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/241/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/242/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/243/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/244/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/247/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/248/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
        <Slide>
          <img src="https://picsum.photos/id/250/300/300" alt="placeholder" style={{ width: '100%' }} />
        </Slide>
      </HorizontalSlideShow>
    </div>
  );
}

export default App;
