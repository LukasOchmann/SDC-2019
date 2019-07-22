export default function(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`button ${props.style}`}>
        {props.text}
    </button>
  );
}
