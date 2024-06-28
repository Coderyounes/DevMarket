// TODO: read, Create , Update, Delete Contract  ( managed using Contract status)

// TODO: Create a Contract
// TODO: Read Contract ( both Freelance Employer has same Route)
// TODO: Update Contract
// TODO: Delete Contract

/*
only Employer can Create, Update, Delete Contract,
Contract has Status: Pending, accepted, rejected, ask for update
if it still on Pending or rejected or ask Update Employer can update it
if it Accepted Employer cannot Update it or Delete it
Contract has isDone: false or True, ( if it Done Procees to payment)
Contract Done when the freelance deliver the work & Employer Accept it
*/


/*
Based on the provided description, here are the API endpoints you might need:

1. `POST /contracts` - Create a new contract. This should only be accessible by an employer.
2. `GET /contracts/:id` - Read a specific contract. This should be accessible by both the freelancer and the employer.
3. `PUT /contracts/:id` - Update a specific contract. This should only be accessible by an employer and only if the contract is in 'Pending', 'Rejected', or 'Ask for Update' status.
4. `DELETE /contracts/:id` - Delete a specific contract. This should only be accessible by an employer and only if the contract is not in 'Accepted' status.
5. `PATCH /contracts/:id/done` - Mark a contract as done. This should be accessible by both the freelancer (to deliver the work) and the employer (to accept it).
PATCH /contracts/:id/deliver - Deliver the work for a specific contract. This should only be accessible by the freelancer associated with the contract. This endpoint could update the contract status to 'Delivered' or similar, which would then allow the employer to accept the work and mark the contract as done
Remember, these are just suggested endpoints. The actual endpoints you need may vary based on your application's specific requirements.
*/