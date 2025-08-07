const RangeSlider = (props) => {
  return (
    <input
      className={props.className}
      type='range'
      value={props.value}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
};

export default RangeSlider;
