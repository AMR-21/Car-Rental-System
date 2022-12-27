const users = [
  {
    id: 1671498239235,
    fname: "Wyatt",
    lname: "Beck",
    email: "wyatt.beck@example.com",
    password: "frank",
    phone_no: "01-6513-2013",
    license: "5E4EEF",
    region: "Australia",
    ncars: 10,
    debt: 300,
    transactions: 1200,
  },
  {
    id: "34e270961f",
    fname: "Borislav",
    lname: "Tišma",
    email: "borislav.tisma@example.com",
    password: "emmanuel",
    phone_no: "022-3431-670",
    license: "D43057",
    region: "Serbia",
    ncars: 10,
    debt: 300,
    transactions: 1200,
  },
  {
    id: 1671498246235,
    fname: "Alexandre",
    lname: "Singh",
    email: "alexandre.singh@example.com",
    password: "seven",
    phone_no: "A64 P41-5741",
    license: "32CF62",
    region: "Canada",
    ncars: 10,
    debt: 300,
    transactions: 1200,
  },
  {
    id: 1671498242235,
    fname: "یاسمن",
    lname: "صدر",
    email: "ysmn.sdr@example.com",
    password: "newman",
    phone_no: "055-53625106",
    license: "DD1246",
    region: "Iran",
    ncars: 10,
    debt: 300,
    transactions: 1200,
  },
];

const data = [
  {
    carId: "1234",
    brand: "bmw",
    model: "x6",
    type: "coupe",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12142",
    color: "red",
    region: "egypt",
    cca3: "egy",
    cca2: "eg",
    powertrain: "electric",
    status: "active",
  },
  {
    carId: "12223422",
    brand: "audi",
    model: "a4",
    type: "coupe",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12141212",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "active",
  },
  {
    carId: "12223422",
    brand: "bmw",
    model: "i3",
    type: "coupe",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12141212",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "active",
  },
  {
    carId: "1234212112",
    brand: "mercedes",
    type: "sedan",
    model: "g-class",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12142",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "active",
  },
];

const favs = [
  {
    carId: "12223422",
    brand: "bmw",
    model: "i3",
    type: "coupe",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12141212",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "active",
  },
  {
    carId: "123412",
    brand: "audi",
    model: "a3",
    type: "coupe",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12112142",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "electric",
    status: "oos",
  },
];

const rev = [
  {
    carId: "34e270961f",
    resId: "34e270961f",
    custId: "34e270961f",
    custName: "Amr Yasser",
    brand: "bentley",
    type: "sedan",
    model: "bentayga",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12142",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "reserved",
    pickup: "2022-12-15",
    drop: "2022-12-15",
    date: "2022-12-15",
  },
  {
    carId: "12223422",
    resId: "12392222",
    custId: "211221",
    custName: "Amr Yasser",
    brand: "kia",
    model: "carens",
    type: "coupe",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12141212",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "active",
    pickup: "2022-11-15",
    drop: "2022-12-15",
    date: "2022-11-15",
  },
];

const ren = [
  {
    carId: "123219",
    resId: "12392111122111",
    custId: "211221",
    brand: "jeep",
    type: "sedan",
    model: "wrangler",
    year: 2020,
    seating: 4,
    transmission: "automatic",
    description: "",
    rate: 400,
    plateNo: "12142",
    color: "black",
    region: "usa",
    cca3: "usa",
    cca2: "us",
    powertrain: "fuel",
    status: "rented",
    pickup: "2022-12-15",
    drop: "2022-12-15",
    date: "2022-12-15",
  },
];

const pays = [
  {
    pickup: "2022-12-15",
    drop: "2022-12-15",
    return: "2022-12-15",
    brand: "bmw",
    model: "x6",
    carId: "1221",
    rate: 250,
    duration: 5,
    orderId: "12123",
    payment: 2122,
    status: false,
    method: "",
  },
  {
    pickup: "2022-12-15",
    drop: "2022-12-15",
    return: "2022-12-15",
    payDate: "2022-12-15",
    brand: "bmw",
    model: "x6",
    carId: "1221",
    rate: 250,
    duration: 5,
    method: "cash",
    orderId: "1212223",
    payment: 2122,
    status: true,
  },
  {
    pickup: "2022-12-15",
    drop: "2022-12-15",
    return: "2022-12-15",
    payDate: "2022-12-15",
    brand: "bmw",
    model: "x6",
    carId: "1221",
    rate: 250,
    duration: 5,
    method: "cash",
    orderId: "12122212123",
    payment: 2122,
    status: false,
  },
];

let countries;

const mysql = require("mysql");
const session = require("express-session");
const path = require("path");
const { v4: uuid } = require("uuid");
require("dotenv").config();

const init = async () => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    countries = data;
  } catch (e) {
    console.log(e);
  }
};

const addCCA = (data) => {
  data.forEach((car) => {
    console.log(car.region);
    let country = countries.find((c) =>
      c.name.common.toLowerCase().includes(car.region.toLowerCase())
    );

    if (!country)
      country = countries.find((c) => c.cca3 === car.region.toUpperCase());

    car.cca2 = country?.cca2;
    car.cca3 = country?.cca3;
  });
};

init();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
  multipleStatements: true,
});

connection.connect((err) => {
  try {
    if (err) throw err;
    console.log("Connected!");
  } catch (e) {
    console.log(e);
  }
});

const getId = function () {
  return uuid().split("-").join("").slice(0, 10);
};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
const cookieParser = require("cookie-parser");
// Initialization
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.static(__dirname + "/app"));

const filtersSQL = `
    SELECT color as name, COUNT(*) AS count
    FROM car
    GROUP BY
    color;
    SELECT transmission as name, COUNT(*) AS count
    FROM car
    GROUP BY
    transmission;
    SELECT brand as name, COUNT(*) AS count
    FROM car
    GROUP BY
    brand;
    SELECT
    powertrain as name,
    COUNT(*) AS count
    FROM car
    GROUP BY
    powertrain ;
    SELECT type as name, COUNT(*) AS count
    FROM car
    GROUP BY
    type;`;

let filters = [];

app.get("/", function (request, response) {
  if (request.session.admin) response.redirect("/admin");
  else if (request.session.loggedin) response.redirect("/user");
  else response.redirect("/home");
});

app.get("/admin", function (request, response) {
  if (request.session.admin)
    response.sendFile(path.join(__dirname + "/app/admin.html"));
  else response.send("You are not allowed to view this page");
});

app.get("/user", function (request, response) {
  if (request.session.loggedin)
    response.sendFile(path.join(__dirname + "/app/customer.html"));
  else response.redirect("/login");
});

app.get("/home", function (request, response) {
  response.sendFile(path.join(__dirname + "/app/home.html"));
});

app.get("/logIn", function (request, response) {
  response.sendFile(path.join(__dirname + "/app/login.html"));
});

// register page
app.get("/createAccount", function (request, response) {
  response.sendFile(path.join(__dirname + "/app/register.html"));
});

app.post("/signIn", function (request, response) {
  const data = request.body;

  if (data.email === "admin@admin" && data.password === "admin") {
    request.session.admin = true;
    response.sendStatus(200);
    return;
  }

  const query = `
    select fname,customer_id from customer where email = "${data.email}" and \`password\` = sha1("${data.password}")
  `;

  connection.query(query, (err, rows) => {
    try {
      if (err) throw err;
      if (rows.length === 0) throw new Error();

      request.session.loggedin = true;
      request.session.userId = rows[0].customer_id;
      request.session.name = rows[0].fname;
      connection.query(
        `select count(res_id) as resNo from reservations where customer_id="${request.session.userId}" and res_status = "active";`,
        (err, rows) => {
          try {
            if (err) throw err;
            if (rows.length === 0) throw new Error();

            request.session.limit = process.env.userLimit - rows[0].resNo;
            response.sendStatus(200);
          } catch (error) {
            console.log(error);
          }
        }
      );
    } catch (error) {
      response.sendStatus(404);
      response.end();
    }
  });
});

app.post("/register", function (request, response) {
  // Get new user data and generated ID
  const data = request.body;
  const id = getId();

  // Generate query
  // prettier-ignore
  const query = `
    insert into customer(customer_id,email,password,fname,lname,phone_no,license_no,region) 
                values("${id}","${data.email}",sha1("${data.password}"),"${data.fname}","${data.lname}","${data.phone_no}","${data.license_no}","${ data.region[0].toUpperCase() + data.region.slice(1).toLowerCase()}");
  `;

  console.log(query);

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
        return;
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/signOut", function (request, response) {
  request.session.destroy();
  response.redirect("/home");
});

const setFilters = (colors, transmissions, brands, powertrain, types) => {
  filters = [
    {
      name: "color",
      categories: colors,
    },
    {
      name: "transmission",
      categories: transmissions,
    },
    {
      name: "brand",
      categories: brands,
    },
    {
      name: "powertrain",
      categories: powertrain,
    },
    {
      name: "type",
      categories: types,
    },
  ];
};

app.get("/adminData", async (request, response) => {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }
  // TODO CONNECT TO DB, GET ALL CARS, GET ALL RESERVATIONS WITH EACH CAR INFO, GET ALL USERS, GET ALL FILTERS
  const query = `
    SELECT * 
    FROM car; 
    SELECT * 
    FROM customer;
    SELECT *
    FROM reservations NATURAL JOIN car;
    ${filtersSQL}
  `;
  try {
    // TODO CONNECT TO DB AND SEARCH FOR ACCOUNT AND GET LIMIT
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        setFilters(rows[3], rows[4], rows[5], rows[6], rows[7]);
        addCCA(rows[0]);
        addCCA(rows[2]);

        const data = {
          cars: rows[0],
          users: rows[1],
          reservations: rows[2],
          filters,
        };
        response.json(data);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/data", (request, response) => {
  // TODO CONNECT TO DB, GET ALL AVAILABLE CARS, GET ALL RESERVED/RENTED CARS WITH EACH CAR INFO, GET ALL FILTERS
  const query = `
    SELECT * 
    FROM car;
    SELECT *
    FROM reservations NATURAL JOIN car
    where customer_id = "${request.session.userId}" and res_status = "active";
    Select *
    from favourites
    where customer_id = "${request.session.userId}";
    ${filtersSQL}
  `;
  try {
    // TODO CONNECT TO DB AND SEARCH FOR ACCOUNT AND GET LIMIT
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        setFilters(rows[3], rows[4], rows[5], rows[6], rows[7]);
        addCCA(rows[0]);
        addCCA(rows[1]);

        const data = {
          cars: rows[0].filter((c) => c.status === "active"),
          reservations: rows[1],
          favs: rows[0].filter((c) =>
            rows[2].some((f) => c.car_id === f.car_id)
          ),
          filters,
        };
        response.json(data);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/payments", (request, response) => {
  if (!request.session.loggedin) {
    response.redirect("/login");
    return;
  }

  const query = `
    select * 
    from payments NATURAL JOIN reservations NATURAL JOIN car
    where customer_id = "${request.session.userId}"
  `;
  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        response.json(rows);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/addCar", (request, response) => {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }

  const id = getId();
  const data = request.body;

  //prettier-ignore
  const query = `
  insert into car(car_id,brand,model,type,color,year,seating,powertrain,transmission,rate,plate_no,region,status) 
  values("${id}","${data.brand}","${data.model}","${data.type}","${data.color}",${data.year},${data.seating},"${data.powertrain}","${data.transmission}",${data.rate},"${data.plate_no}","${data.region[0].toUpperCase() + data.region.slice(1).toLowerCase()}","active");
`;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

//  POST Route

app.post("/dailyPayments", (request, response) => {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }

  const period = request.body.period;

  const [d1, d2] = period.split("-").map((d) => {
    const date = new Date(d);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  });

  const query = `
   select pay_date as date,sum(total) as total,count(pay_date) as number
  from payments
  WHERE pay_date between "${d1}" and "${d2}" and pay_status="paid";
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        response.json(rows);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/addFavourite", function (request, response) {
  if (!request.session.loggedin) {
    response.redirect("/login");
    return;
  }

  const id = request.body.id;

  const query = `
    INSERT INTO favourites VALUES ('${request.session.userId}','${id}')
  `;
  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/removeFavourite", function (request, response) {
  if (!request.session.loggedin) {
    response.redirect("/login");
    return;
  }

  const id = request.body.id;

  const query = `
    Delete 
    from favourites 
    where customer_id = '${request.session.userId}' and car_id = '${id}';
  `;
  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/pickCar", function (request, response) {
  if (!request.session.loggedin) {
    response.redirect("/login");
    return;
  }

  const id = request.body.id;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const query = `
  Update car
  set status = "rented"
  where car_id = "${id}";
  select *
  from history
  where date="${date}" and car_id = "${id}";
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        if (rows[1].length === 0) {
          connection.query(
            `insert into history values("${date}","${id}","active")`
          );
        } else {
          connection.query(
            `update history 
             set status= "active" 
             where date = "${date}" and car_id ="${id}";`
          );
        }
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/revokeCar", function (request, response) {
  if (!request.session.loggedin && !request.session.admin) {
    response.redirect("/login");
    return;
  }

  const id = request.body.id;
  const order = request.body.order;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const query = `
  Update reservations
  set res_status = "revoked"
  where res_id = "${order}";
  Update car
  set status = "active"
  where car_id = "${id}";
  select *
  from history
  where date="${date}" and car_id = "${id}";
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        if (rows[2].length === 0) {
          connection.query(
            `insert into history values("${date}","${id}","active")`
          );
        } else {
          connection.query(
            `update history 
             set status= "active" 
             where date = "${date}" and car_id ="${id}";`
          );
        }
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/returnCar", function (request, response) {
  if (!request.session.loggedin && !request.session.admin) {
    response.redirect("/login");
    return;
  }

  const id = request.body.id;
  const order = request.body.order;
  const cust = request.session.userId || request.body.cust;
  const returnDate = request.body.date; // return date

  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const query = `
    select pick_date,drop_date
    from reservations
    where res_id = "${order}";
    
    Update reservations
    set res_status = "returned"
    where res_id = "${order}";

    Update car
    set status = "active"
    where car_id = "${id}";

    select rate
    from car
    where car_id = "${id}";

    select *
    from history
    where date="${date}" and car_id = "${id}";
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        const pick = new Date(rows[0][0].pick_date);
        const drop = new Date(rows[0][0].drop_date);
        const period = Math.ceil(Math.abs(drop - pick) / (1000 * 60 * 60 * 24));
        const actualPeriod = Math.ceil(
          Math.abs(new Date(returnDate) - pick) / (1000 * 60 * 60 * 24)
        );

        const rate = rows[3][0].rate;

        const total = period * rate + (actualPeriod - period) * (rate + 150);

        connection.query(
          `INSERT INTO payments
          VALUES ('${order}','${id}','${cust}','${returnDate}',null,'unpaid',${total},null,${period})`
        );

        if (rows[4].length === 0) {
          connection.query(
            `insert into history values("${date}","${id}","active")`
          );
        } else {
          connection.query(
            `update history 
             set status= "active" 
             where date = "${date}" and car_id ="${id}";`
          );
        }
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/reserveCar", function (request, response) {
  if (!request.session.loggedin) {
    response.redirect("/login");
    return;
  }

  if (request.session.limit === 0) {
    response.sendStatus(404);
    return;
  }

  const resId = getId();
  const data = request.body.data;

  const query = `
  INSERT INTO reservations VALUES 
  ('${resId}','${data.car_id}','${request.session.userId}','${data.date}','${data.drop_place}','${data.drop_date}','${data.pick_place}','${data.pick_date}','active');

  update car
  set status = 'reserved'
  where car_id = "${data.car_id}";

  select *
  from history
  where date="${data.date}" and car_id = "${data.car_id}";
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        if (rows[2].length === 0) {
          connection.query(
            `insert into history values("${data.date}","${data.car_id}","reserved")`
          );
        } else {
          connection.query(
            `update history 
             set status= "reserved" 
             where date = "${data.date}" and car_id ="${data.car_id}";`
          );
        }

        request.session.limit--;
        response.json(resId);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/pay", function (request, response) {
  if (!request.session.loggedin) {
    response.redirect("/login");
    return;
  }

  const order = request.body.order;
  const method = request.body.method;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  request.session.userId = "00b94dd08b";
  const query = `
    update payments
    set method = "${method}" , pay_date="${date}", pay_status="paid" 
    where customer_id = "${request.session.userId}" and res_id="${order}";
  `;
  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/suspendCar", function (request, response) {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }

  // TODO CONNECT TO DB SET CAR STATUS TO OOS

  const id = request.body.id;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const query = `
  Update car
  set status = "oos"
  where car_id = "${id}";

  select *
  from history
  where date="${date}" and car_id = "${id}";  
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        if (rows[1].length === 0) {
          connection.query(
            `insert into history values("${date}","${id}","oos")`
          );
        } else {
          connection.query(
            `update history 
             set status= "oos" 
             where date = "${date}" and car_id ="${id}";`
          );
        }
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/activateCar", function (request, response) {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }

  // TODO CONNECT TO DB SET CAR STATUS TO ACTIVE

  const id = request.body.id;
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const query = `
  Update car
  set status = "active"
  where car_id = "${id}";

  select *
  from history
  where date="${date}" and car_id = "${id}";  
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;

        if (rows[1].length === 0) {
          connection.query(
            `insert into history values("${date}","${id}","active")`
          );
        } else {
          connection.query(
            `update history 
             set status= "active" 
             where date = "${date}" and car_id ="${id}";`
          );
        }
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/deleteCustomer", function (request, response) {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }

  const id = request.body.id;

  const query = `
  Delete
  from customer
  where customer_id = "${id}";
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        response.sendStatus(200);
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/daily", (request, response) => {
  if (!request.session.admin) {
    response.send("You are not allowed to view this page");
    return;
  }

  // TODO CONNECT TO DB AND GET REPORT WITH GIVEN DATE
  const date = request.body.date;
  const query = `
    select
        car_id,
        brand,
        model,
        type,
        color,
        year,
        seating,
        powertrain,
        transmission,
        rate,
        "active" as status,
        plate_no,
        region
    from car
    where car_id not in (
            select car_id
            from history
            where
                date <= "${date}"
        )
    UNION (
        SELECT
            c.car_id,
            brand,
            model,
            type,
            color,
            year,
            seating,
            powertrain,
            transmission,
            rate,
            status,
            plate_no,
            region
        FROM history as h
            join (
                SELECT
                    car_id,
                    brand,
                    model,
                    type,
                    color,
                    year,
                    seating,
                    powertrain,
                    transmission,
                    rate,
                    plate_no,
                    region
                from
                    car
            ) as c on h.car_id = c.car_id
        WHERE h.date in (
                select max(date)
                from history
                where
                    date <= "${date}"
            )
    )
    ORDER BY brand  
  `;

  try {
    connection.query(query, (err, rows) => {
      try {
        if (err) throw err;
        response.json({ date, data: rows });
      } catch (error) {
        console.log(error);
        response.sendStatus(404);
      }
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

// Setup Server
const port = 8000;

const server = app.listen(port, () =>
  console.log(`Server is running on localhost: ${port}`)
);
