import React from "react";
const DiscountBadge = ({ discountValue, className }) => {
  return (
    <div
      className={`${className || ""} discountBadge`}
      data-testid="badge"
    >
      {discountValue && <>{discountValue} % off</>}
    </div>
  );
};

export default DiscountBadge;
