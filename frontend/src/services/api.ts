

// const apiOrigin = `http://3.209.81.97:4000/api`
const apiOrigin = `http://localhost:4000/api`

interface Body {
  method: 'GET' | 'POST' | 'DELETE'
  headers: {
    'Content-Type': string,
    'AUTHORIZATION'?: string
  };
  body?: string
}

export interface IProduct {
  _kid: string
  name: string
  brand: string
  sector: string
  cost: number
  percentageIncrease: number
}

// type Data = {
//   product: Partial<IProduct>
// }



const privateOption = (method: 'GET' | 'POST', data?: Partial<IProduct> | null) => {
  const opt: Body = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'AUTHORIZATION': `Bareer ${sessionStorage.getItem('token')}`
    },
  }

  if (data) {
    opt.body = JSON.stringify(data)
  }

  return opt
}

export const api = {
  product: {
    async getAll(query: string = '') {
      const response: Response = await fetch(`${apiOrigin}/product?query=${query}`)
      console.log(response);

      if (response.ok) {
        const res = await response.json()
        console.log(res);
        return res
      }

    },
    async createProduct(data: Partial<IProduct>) {
      const response = await fetch(`${apiOrigin}/product`, privateOption('POST', data))
      const res = response.json()
      return res
    }
  }
}