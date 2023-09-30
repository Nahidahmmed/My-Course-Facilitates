
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const UseCarts = () => {
    const {user} = useContext(AuthContext);
    const { isLoading, data: cart =[] } = useQuery({
        queryKey: ['carts',user?.email],
        // queryFn: fetchTodoList,
        queryFn: async () =>{
            const response = await fetch(`https://online-course-server-gamma.vercel.app/carts?email=${user?.email}`)
            return response.json();
        },
      });
      return [cart,isLoading]
    
};

export default UseCarts;