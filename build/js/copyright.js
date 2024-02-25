"use strict";
// const year = document.getElementById("year")!;
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear as unknown as string);
// year.textContent = thisYear as unknown as string;
const year = document.getElementById("year");
const thisYear = "" + new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
