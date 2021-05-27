import Footer from './Footer';
import Information from './Information';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Information>
        <h1>My plan!</h1>
        <ul>
          <li>learn React</li>
          <li>stay healthy</li>
          <li>Make people happy</li>
        </ul>
      </Information>
      <Footer
        first={20}
        second={2}
        user={{
          name: 'Denys',
          state: 'Happy',
          questions: 20,
        }}
      >
        <h2 style={{ color: 'tomato' }}>Do not hesitate! React is cool!</h2>
      </Footer>
    </div>
  );
};

export default App;
