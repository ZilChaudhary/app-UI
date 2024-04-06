import React from 'react';
import ReactInstaStories from 'react-insta-stories';

// Define InteractiveButton component
function InteractiveButton({ label }) {
  return (
    <button style={{ margin: '0 0px', padding: '1px', fontSize: '16px' }}>{label}</button>
  );
}

// App component
export function App() {
  // Calculate the height for stories and buttons based on window height
  const windowHeight = window.innerHeight;
  const storiesHeight = Math.min(windowHeight * (3/4), 768);
  const buttonsHeight = Math.min(windowHeight * (1/4), 768);

  // Set the width for both stories and buttons containers
  const containerWidth = 432; // Width for both containers

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      {/* Stories container */}
      <div style={{ height: `${storiesHeight}px`, width: `${containerWidth}px`, marginBottom: '10px' }}>
        <ReactInstaStories
          stories={stories}
          defaultInterval={1500}
          width={containerWidth}
          height={storiesHeight}
        />
      </div>
      {/* Buttons container */}
      <div style={{ display: 'grid', height: `${buttonsHeight}px`, width: `410px`, gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', justifyContent: 'center', backgroundColor: '#ADD8E6', padding: '10px'}}>
        <InteractiveButton label="Button 1" />
        <InteractiveButton label="Button 2" />
        <InteractiveButton label="Button 3" />
        <InteractiveButton label="Button 4" />
        <InteractiveButton label="Button 5" />
        <InteractiveButton label="Button 6" />
      </div>
    </div>
  );
}

// Stories data
const stories = [
  {
    url: 'https://picsum.photos/1080/1920',
    header: {
      heading: 'User1',
      subheading: 'Posted 5h ago',
      profileImage: 'https://picsum.photos/1000/1000'
    }
  },
  {
    url:
      'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header: {
      heading: 'User1',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'User1',
      subheading: 'Posted 32m ago',
      profileImage:
        'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  },
  {
    url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
    header: {
      heading: 'User1',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920'
    },
    type: 'video',
    duration: 1000
  },
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    type: 'video',
    header: {
      heading: 'User1',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920'
    }
  },
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'video',
    header: {
      heading: 'User1',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920'
    }
  },

];
