import { useLocation } from "wouter";

export const Adv = () => {
  const [, setLocation] = useLocation("./advertizing");
  return (
    <>
      <a href='https://talents.taktsoft.com/' target='_blank'>
        <div className='adv-img-container'>
          <img className='adv-img' src='/tct-logo.png' />
        </div>
      </a>
      <p className='description'>
        Do you want to learn how to create this and dozens of other cool web
        applications? Ready to start a new career and secure your financial
        future? Join the Taktsoft Campus Talents program and sign up for our
        Bootcamp as a Frontend or Fullstack developer.{" "}
      </p>
      <h3>Advertising</h3>
      <form
        className='buttons-container'
        target='_blank'
        action='https://talents.taktsoft.com/'
      >
        <button type='submit'>Learn More</button>
        <button type='button' onClick={() => setLocation("./result")}>
          Skip Ad
        </button>
      </form>
    </>
  );
};
