import { useLocation } from "wouter";

export const Adv = () => {
  const [, setLocation] = useLocation("./advertizing");
  return (
    <>
      <a
        href='https://talents.taktsoft.com/bewerbung?bootcamp=0'
        target='_blank'
      >
        <img src='/TaktsoftLogo.jpg' />
      </a>
      <h3>Advertising</h3>
      <button onClick={() => setLocation("./result")}>Skip Ad</button>
    </>
  );
};
