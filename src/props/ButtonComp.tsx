import "./Button.css";

interface ButtonProps{
    label:string;
    onClick:()=>void;
    disabled?: boolean;
    color?: "primary" | "secondary" | "readmore";

}

const ButtonComp = ({label,onClick,disabled=false, color="primary"}:ButtonProps) => {
  const btnStyles = `button ${color} ${disabled? 'disabled':''}`
  return (
    <div>
      <button className={btnStyles} onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default ButtonComp
