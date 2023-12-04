import React from "react";
const DiscountBadge = ({ discount_amount, className }) => {
  const discountAmount = discount_amount || 0;
  console.log(discountAmount);
  return (
    <div
      className={`${className || ""} discountBadge`}
      data-testid="badge">
      {/* {discountAmount && <span>{discountAmount} % off</span>} */}
    </div>
  );
};

export default DiscountBadge;
