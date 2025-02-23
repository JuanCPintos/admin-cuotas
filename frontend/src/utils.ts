
interface Request {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  header: object;
  body: object;
}

type PrivateRequest = Partial<Request>;
type PublicRequest = <Request>;

export const privateRequest :  = ({method, body}) => ({
  method,
  header: {
    "Authorization": "Bearer " + localStorage.getItem(AUTH_TOKEN),
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})

export const publicRequest = () => ({

})