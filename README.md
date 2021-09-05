# LLRaftChallenge
Raft code challenge. 

## Steps to Setup the Spring Boot Back end app

1. **Clone the application**

	```bash
	git clone https://github.com/luislahoz/LLRaftChallenge.git
	cd LLRaftChallenge
	```

2. **Create Postgres database**

	```bash
	create database raftchallenge
	```

3. **Change MySQL username and password as per your MySQL installation**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

4. **Run the app**

	You can run the spring boot app by typing the following command -

	```bash
	mvn spring-boot:run
	```

	The server will start on port 8080.

5. **Data base Table**
	
	I have added the following sql queries in `src/main/resources/schema.sql` file. Spring boot will automatically execute this script on startup.

	```sql
    CREATE TABLE IF NOT EXISTS orders (id SERIAL PRIMARY KEY, order_id INT NOT NULL, product_name VARCHAR(45) NOT NULL, product_quantity INT NOT NULL);
	```

	Any new user who signs up to the app is assigned the `ROLE_USER` by default.

## Steps to Setup the React Front end app

First go to the `frontend` folder -

```bash
cd frontend
```

Then type the following command to install the dependencies and start the application -

```bash
npm install && npm start
```

The front-end server will start on port `3000`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
