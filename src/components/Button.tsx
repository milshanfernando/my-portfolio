type ButtonProps = {
  className?: string;
  id?: string;
  text: string;
};

const Button = ({ className, id, text }: ButtonProps) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="https://img.icons8.com/metro/26/1A1A1A/long-arrow-down.png"
            alt="arrow"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
