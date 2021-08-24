## Create an API-first backend and Visually compelling frontend

### Prerequisites
- Use any JVM stack for the backend
- Use a PostgreSQL database
- Use [React](https://reactjs.org/) for the frontend
- Docker Compose

### Requirements (backend and frontend)
 
- **Upload endpoint** 
  - POST-BODY: a pipe delimitted TXT file.
  - Side effect: The uploaded file is parsed and persisted into a PostgreSQL database. The format of the file will be: `<order_id> | <product_name> | <product_quantity>`. Example: `2 | Eggs | 20`
  - Output: HTTP 200 response with JSON output of the number of lines in the file. JSON output shall contain the id of the upload. There can be multiple uploads for each user. 
- **Read Single endpoint** 
  - Input: upload id
  - Output: HTTP 200 response with JSON output of the upload id
- **Delete endpoint** 
  - Input: upload id
  - Output: HTTP 200 response with JSON output of the upload id that got deleted
- **Frontend** - Create a React frontend that makes use of the above endpoints. The UI can be sparse but should still look compelling.  
- **CORS** - There should be no CORS isussues between frontend and backend. There should be no JS errors in the console on the frontend.

### Deliverables:
- GitHub repo of source code (provide `omnipresent07` and `meissadia` read access)
- A great README with instructions on how to run everything locally

### What we're looking for:
- Ability to deliver functioning app
- A commit history that tells a story
- A README with details such that someone without any context to this exercise would be able to understand what is going on and being delivered

### Gift Card
- You will receive a $200 gift card for completing this coding challenge, but our ultimate goal is for you to join our engineering team. 