import React from "react";
const DiscountBadge = ({ discount_amount, className }) => {
  console.log("discount_amount", discount_amount);

  return (
    <div
      className={`${className || ""} discountBadge`}
      data-testid="badge"
    >
      {discount_amount && <>{discount_amount} % off</>}
    </div>
  );
};

export default DiscountBadge;
