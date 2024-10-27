import React from "react";
import "./Adm.css"

function Adm () {
    return (
        <div className="container">   
          <table className="student-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, index) => (
                <tr key={index} className={index % 2 === 0 ? "row-gray" : ""}>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    export default Adm;