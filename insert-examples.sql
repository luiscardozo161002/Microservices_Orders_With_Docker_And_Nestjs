INSERT INTO users (username, email, password) VALUES
('luis', 'luis_cardozo@gmail.com', 'luis2Car'),
('gerardo', 'gerardo_cardozo@gmail.com', 'gerardo2Car');


INSERT INTO products (name, description, price, stock) VALUES
('Martillo', 'Martillo de Acero del 12', 49.99, 100),
('Clavos', '1kg clavos 2 pulgadas', 39.99, 50);


INSERT INTO orders ("userId", "productId", "quantity", "totalPrice") VALUES
(1, 1, 2, 49.98),  
(2, 2, 1, 39.99);
