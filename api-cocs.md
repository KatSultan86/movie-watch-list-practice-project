### Create a user first
```
POST http://3.15.206.121:5000/api/users
payload: 
{
	"name": "John Doe",
	"email": "johndoe@email.com"
}
```
This will give you a response as: 
- If success:
```
Status Code: 201
{
	"id": number,
	"message": "User created successfully",
	"note": "Save the id, you will need it for further requests"
}
```
- If error:
```
Status Code: 400 Bad Request 
OR
Status Code: 500 Internal Server Error
```