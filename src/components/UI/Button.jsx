import Home from "../../views/Home.jsx";
import PropTypes from "prop-types";

const Button = (props) => {
  const {text, handleClick} = props;
  return (
    <>
      <button className='m-3 mt-0 p-3 rounded-lg bg-stone-500 text-stone-100'
        onClick={handleClick}>
        {text}
      </button>
    </>
  )
};

Button.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
