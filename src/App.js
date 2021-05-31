import Information from './Information';
import { Footer } from './Footer';
import { Button } from './styled';

const CAT_IMAGE_SRC =
  'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg';

const App = () => {
  return (
    <div>
      <div>
        <img src={CAT_IMAGE_SRC} alt="cat" width="200" />
      </div>

      <Button primary>Play with the cat</Button>
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
      />
    </div>
  );
};

export default App;
