const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price); // No need to divide by 100, as the price is already in dollars
};

export default FormatPrice;
