import {Link} from 'react-router-dom'
const IconButton = ({ text, icon, onClick, className }) => {
  return (
    <button onClick={onClick}
      className={`flex items-center px-4 py-1 gap-0.5  rounded-md  text-white ${className}`}
    >
     {icon}
     
      <p className="text-black text-md font-semibold">{text}</p>
    </button>
  );
}

export default IconButton;
