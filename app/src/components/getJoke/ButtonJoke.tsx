import "./button.sass";

type Props = {
  checkedRadio: string;
};

const Button = ({ checkedRadio }: Props) => {
  return <button className="buttonJoke">Get a joke</button>;
};

export default Button;
