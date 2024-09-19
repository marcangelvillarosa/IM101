import { useLocation } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
 
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
 

    </div>
  );
}

export default Payment;
