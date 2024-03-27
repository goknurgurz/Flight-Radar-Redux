import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  console.log();
  return (
    <header>
      <div>
        <img src="/logo-f.png" alt="" />
        <h2>Flight Radar</h2>
      </div>

      <h4>
        {store.isLoading
          ? "Flights are calculated..."
          : `${store.flight.length} Flight found`}
      </h4>
    </header>
  );
};

export default Header;
