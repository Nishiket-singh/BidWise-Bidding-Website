import { useMemo } from "react";
import "./NewBid.css";

const NewBid = ({
  bidLabel,
  bidButtonLabel,
  placeholderText,
  customIconId,
  stateDefaultLabelTrueReqPosition,
  stateDefaultLabelTrueReqTop,
  stateDefaultLabelTrueReqLeft,
  stateDefaultLabelTrueReqWidth,
  stateDefaultLabelTrueReqHeight,
  labelFontSize,
  labelFontFamily,
  labelColor,
}) => {
  const stateDefaultLabelTrueReqStyle = useMemo(() => {
    return {
      position: stateDefaultLabelTrueReqPosition,
      top: stateDefaultLabelTrueReqTop,
      left: stateDefaultLabelTrueReqLeft,
      width: stateDefaultLabelTrueReqWidth,
      height: stateDefaultLabelTrueReqHeight,
    };
  }, [
    stateDefaultLabelTrueReqPosition,
    stateDefaultLabelTrueReqTop,
    stateDefaultLabelTrueReqLeft,
    stateDefaultLabelTrueReqWidth,
    stateDefaultLabelTrueReqHeight,
  ]);

  const labelStyle = useMemo(() => {
    return {
      fontSize: labelFontSize,
      fontFamily: labelFontFamily,
      color: labelColor,
    };
  }, [labelFontSize, labelFontFamily, labelColor]);

  return (
    <div
      className="statedefault-labeltrue-req"
      style={stateDefaultLabelTrueReqStyle}
    >
      <div className="label-parent">
        <div className="label" style={labelStyle}>
          {bidLabel}
        </div>
        <div className="required">*</div>
      </div>
      <div className="frame-parent">
        <div className="general-calendar-parent">
          <img className="general-calendar" alt="" src={bidButtonLabel} />
          <div className="text">Text</div>
          <div className="placeholder">{placeholderText}</div>
        </div>
        <div className="general-delete-wrapper">
          <img className="general-calendar" alt="" src={customIconId} />
        </div>
      </div>
      <div className="error-state-text">
        <img className="general-alert" alt="" src="/32--general--alert.svg" />
        <div className="something-went-wrong">Something went wrong</div>
      </div>
      <div className="helper-text">
        <div className="something-went-wrong">
          Tristique senectus et netus et
        </div>
      </div>
    </div>
  );
};

export default NewBid;