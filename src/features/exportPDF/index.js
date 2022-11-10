/** @format */

import React, { useEffect, useState } from "react";
import "jspdf-autotable";
import jsPDF from "jspdf";

function ExportIntoPDF() {
  const [data, setData] = useState();
 
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson);
      });
  };

  const exportAsPDF = () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const columns = ["UserId", "Id", "Title", "Description"];
    let rows = [];

    for (let i = 0; i < data.length; i++) {
      let temp = [data[i].userId, data[i].id, data[i].title, data[i].body];
      rows.push(temp);
    }
    pdf.text(235, 40, "Response Table");
    pdf.autoTable(columns, rows, {
      startY: 65,
      theme: "grid",
      styles: {
        halign: "center",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
      headStyles: {
        textColor: [0, 0, 0],
        fillColor: [166, 204, 247],
      },
      bodyStyles: {
        halign: "left",
      },
    });
    pdf.save("example");
  };

  useEffect(() => {
    getData();
  }, []);

  return <button onClick={exportAsPDF}>Export</button>;
}

export { ExportIntoPDF };
