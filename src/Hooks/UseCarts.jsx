
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const UseCarts = () => {
    const {user} = useContext(AuthContext);
    const { isLoading, data: cart =[] } = useQuery({
        queryKey: ['carts',user?.email],
        // queryFn: fetchTodoList,
        queryFn: async () =>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json();
        },
      });
      return [cart,isLoading]
    
};

export default UseCarts;