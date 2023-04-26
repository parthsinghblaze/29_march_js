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

  let filterData = []

  if(type === 'all') {
    filterData = data
  }

  if(type === 'positive') {
    filterData = data.filter((item) => item.total > 0)
  }

  if(type === 'negative') {
    filterData = data.filter((item) => item.total < 0)
  }

  while (transactionUI.hasChildNodes()) {
    transactionUI.firstChild.remove()
  }

  for (const currentElement of filterData) {
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
}

getTransaction("all");