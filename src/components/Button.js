import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  console.log(rest);
  const classes = className(
    rest.className,
    "px-3 py-1.5 px-3 border flex items-center",
    {
      "border-black bg-blue-600 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-black bg-green-600 text-white": success,
      "border-black bg-yellow-400 text-white": warning,
      "border-black bg-red-600 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-yellow-500": outline && warning,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Only one can be true");
    }
    return new Error("Invalid props");
  },
};

export default Button;
