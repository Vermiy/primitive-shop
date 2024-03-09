CREATE TABLE Stores (
  shop_id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Medicines (
  id SERIAL PRIMARY KEY,
  store_id INT REFERENCES Stores(shop_id),
  name VARCHAR(100) NOT NULL,
  amount INT,
  price DECIMAL(10,2) NOT NULL,
);


CREATE TABLE Orders (
  order_id SERIAL PRIMARY KEY,
  order_date TIMESTAMP,
  order_price INT,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  customer_adress VARCHAR(255),
  customer_phone VARCHAR(50),
  status VARCHAR(100), -- [Delivered, Proccesing, Pending]
);

