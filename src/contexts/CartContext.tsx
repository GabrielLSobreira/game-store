import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Game } from '../types/Game';

interface CartContextProps {
  cart: Game[];
  handleAddCart?: (item: Game) => void;
  handleDeleteCart?: (index: number) => void;
  cartValue: number;
}

interface AppProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  cartValue: 0,
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [cart, setCart] = useState<Game[]>([]);

  const handleAddCart = (item: Game) => {
    if (cart.some((i) => i.slug === item.slug)) {
      return alert('Você já adicionou esse jogo ao carrinho!');
    }
    setCart([...cart, item]);
  };

  const handleDeleteCart = (index: number) => {
    setCart(cart.filter((i) => cart.indexOf(i) !== index));
  };

  const cartValue = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddCart,
        handleDeleteCart,
        cartValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
