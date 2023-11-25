import { useMemo } from "react";
import "./BuyButton.css";

const BuyButton = ({
  buttonText,
  typeSecondarySizeLargeIcBorderRadius,
  typeSecondarySizeLargeIcBackgroundColor,
  typeSecondarySizeLargeIcPosition,
  typeSecondarySizeLargeIcTop,
  typeSecondarySizeLargeIcLeft,
  typeSecondarySizeLargeIcWidth,
  typeSecondarySizeLargeIcHeight,
  buttonFontSize,
  buttonFontFamily,
  buttonColor,
}) => {
  const typeSecondarySizeLargeIcStyle = useMemo(() => {
    return {
      borderRadius: typeSecondarySizeLargeIcBorderRadius,
      backgroundColor: typeSecondarySizeLargeIcBackgroundColor,
      position: typeSecondarySizeLargeIcPosition,
      top: typeSecondarySizeLargeIcTop,
      left: typeSecondarySizeLargeIcLeft,
      width: typeSecondarySizeLargeIcWidth,
      height: typeSecondarySizeLargeIcHeight,
    };
  }, [
    typeSecondarySizeLargeIcBorderRadius,
    typeSecondarySizeLargeIcBackgroundColor,
    typeSecondarySizeLargeIcPosition,
    typeSecondarySizeLargeIcTop,
    typeSecondarySizeLargeIcLeft,
    typeSecondarySizeLargeIcWidth,
    typeSecondarySizeLargeIcHeight,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      fontFamily: buttonFontFamily,
      color: buttonColor,
    };
  }, [buttonFontSize, buttonFontFamily, buttonColor]);

  return (
    <div
      className="typesecondary-sizelarge-ic"
      style={typeSecondarySizeLargeIcStyle}
    >
      <div className="button" style={buttonStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default BuyButton;
