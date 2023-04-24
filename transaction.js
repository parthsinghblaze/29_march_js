const data = [
  {
    id: 1,
    userName: "parth",
    total: 900,
  },
  {
    id: 2,
    userName: "satyam",
    total: -100,
  },
  {
    id: 3,
    userName: "Raju",
    total: 9000,
  },
  {
    id: 4,
    userName: "Kalpesh",
    total: 900,
  },
  {
    id: 5,
    userName: "Raj",
    total: -400,
  },
  {
    id: 6,
    userName: "kamlesh",
    total: 300,
  },
  {
    id: 7,
    userName: "Gokul",
    total: -10,
  },
  {
    id: 8,
    userName: "Ishan",
    total: 1900,
  },
];

const transactionUI = document.querySelector("#transaction");

function getTransaction(type) {

  for (const currentElement of data) {
    if (type === "all") {
      const html = `
        <div class="col-md-4 mb-2">
        <div class="card" style="height: 100%">
          <div class="card-body">
            <h5>Customer Name: ${currentElement.userName} </h5>
            <h6>Balance : ${currentElement.total} </h6>
          </div>
        </div>
      </div>
        `;

      transactionUI.insertAdjacentHTML("afterbegin", html);
    }

    if (type === "positive") {
    }

    if (type === "negative") {
    }
  }
}

getTransaction("all");

// const positionCustomers = data.filter((item) => {
//   return item.total > 0;
// });

// const negativeCustomers = data.filter((item) => {
//   return item.total < 0;
// });

// console.log("positive", positionCustomers);
// console.log("negative", negativeCustomers);
