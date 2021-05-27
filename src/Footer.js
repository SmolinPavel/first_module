const Footer = ({
  first,
  children,
  second,
  user: { name, state, questions },
}) => {
  return (
    <footer>
      <p>Everyone has come back from the break</p>
      <p>
        First {first} is less then 10 that is {first < 10 ? 'correct' : 'a lie'}
      </p>
      {children}
      <p>
        My name is {name}, I am {state} and I will try my best to cover all{' '}
        {questions} questions
      </p>
    </footer>
  );
};

Footer.defaultProps = {
  first: 3,
};

export default Footer;
