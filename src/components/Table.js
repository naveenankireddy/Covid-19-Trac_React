import React from "react";

export default function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => {
        return (
          <td>
            <tr>{country}</tr>
            <tr>{cases}</tr>
          </td>
        );
      })}
    </div>
  );
}
