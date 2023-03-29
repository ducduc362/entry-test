import { useState } from 'react';
import './App.css';
import HorizontalSlideShow from './components/HorizontalSlideShow';

function App() {
  // const [srcImage, setSrcImage] = useState([
  //   {
  //     id: 1,
  //     title: "Title 1",
  //     img: "https://picsum.photos/id/240/300/300"
  //   },
  //   {
  //     id: 2,
  //     title: "Title 2",
  //     img: "https://picsum.photos/id/241/300/300"
  //   },
  //   {
  //     id: 3,
  //     title: "Title 3",
  //     img: "https://picsum.photos/id/242/300/300"
  //   },
  //   {
  //     id: 4,
  //     title: "Title 4",
  //     img: "https://picsum.photos/id/243/300/300"
  //   },
  //   {
  //     id: 5,
  //     title: "Title 5",
  //     img: "https://picsum.photos/id/244/300/300"
  //   },
  //   {
  //     id: 6,
  //     title: "Title 6",
  //     img: "https://picsum.photos/id/247/300/300"
  //   },
  //   {
  //     id: 7,
  //     title: "Title 7",
  //     img: "https://picsum.photos/id/248/300/300"
  //   },
  //   {
  //     id: 8,
  //     title: "Title 8",
  //     img: "https://picsum.photos/id/250/300/300"
  //   }
  // ])

  return (
    <div className="App">
      <HorizontalSlideShow
        show={5}
        infiniteLoop={true}
      // srcImg={srcImage}
      >
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/240/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/241/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/242/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/243/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/244/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/247/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/248/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://picsum.photos/id/250/300/300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
      </HorizontalSlideShow>
    </div>
  );
}

export default App;
