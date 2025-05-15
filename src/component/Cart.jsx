import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { List, Button, Typography, Row, Col, Card, Empty, Modal } from 'antd';
import './Cart.css';
import { incrementQuantity, decrementQuantity } from '../redux/cartSlice';


const { Title, Text } = Typography;

const Cart = () => {
const cartItems = useSelector(state => state.cart.items);
const total = useSelector(state => state.cart.totalAmount);
const dispatch = useDispatch();

const [isModalVisible, setIsModalVisible] = useState(false);
const [showPaymentOptions, setShowPaymentOptions] = useState(false);
const [showConfirmationModal, setShowConfirmationModal] = useState(false);
const [selectedPayment, setSelectedPayment] = useState('');

// ✅ Updated quantity logic
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      setIsModalVisible(true);
    }
  };

  const handlePay = () => {
    setIsModalVisible(false);
    setShowPaymentOptions(true);
  };

  const handleSelectPayment = (method) => {
    setSelectedPayment(method);
    setShowPaymentOptions(false);
    setShowConfirmationModal(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmationModal(false);
    setSelectedPayment('');
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsModalVisible(false);
      setShowPaymentOptions(false);
      setShowConfirmationModal(false);
    }
  }, [cartItems]);

  return (
    <Row justify="center" style={{ marginTop: 40 }}>
      <Col xs={22} sm={20} md={16} lg={12}>
        <Card bordered style={{ borderRadius: 8 }}>
          <Title level={3} id="add1">
            Your Cart{' '}
            {cartItems.length > 0 && (
              <Text type="secondary">(Total: Rs. {total})</Text>
            )}
          </Title>

          {cartItems.length === 0 ? (
            <Empty description="No items in cart" />
          ) : (
           <List
  itemLayout="horizontal"
  dataSource={cartItems}
  renderItem={item => (
    <List.Item
      actions={[
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Button size="small" onClick={() => dispatch(decrementQuantity(item.id))}>-</Button>
          <span>{item.quantity}</span>
          <Button size="small" onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
        </div>,
        <Button
          type="primary"
          danger
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<img src={item.image} alt={item.name} className="cart-item-image" />}
        title={<Text strong>{item.name}</Text>}
        description={
         <Text>
  {/* Price: Rs. {item.price} × {item.quantity} = <strong>Rs. {(item.price * item.quantity).toFixed(2)}</strong> */}
  Price = <strong>Rs. {(item.price * item.quantity).toFixed(2)}</strong>

</Text>

        }
      />
    </List.Item>
  )}
/>

          )}

          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <Text strong>Total: Rs. {total}</Text>
          </div>

          {cartItems.length > 0 && (
            <Button type="primary" id="buy" onClick={handleBuyNow}>
              Buy Now
            </Button>
          )}

          {/* 🛍️ Order Summary Modal */}
          <Modal
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={[
              <Button key="pay" type="primary" onClick={handlePay}>
                Proceed to Pay
              </Button>,
            ]}
            title="Thank You for Your Purchase!"
          >
            <p><strong>Quantity of Item:</strong> {totalQuantity}</p>
            <p><strong>Total Amount:</strong> Rs. {total}</p>
            <p style={{ color: 'green' }}>
              <strong>Thank you for buying the items from BackPacksy!</strong>
            </p>
          </Modal>

          {/* 💳 Payment Options Modal */}
          <Modal
            open={showPaymentOptions}
            onCancel={() => setShowPaymentOptions(false)}
            footer={null}
            title="Choose a Payment Method"
          >
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><Button block onClick={() => handleSelectPayment('UPI / QR Code')}>UPI / QR Code</Button></li>
              <li style={{ marginTop: 10 }}><Button block onClick={() => handleSelectPayment('Credit / Debit Card')}>Credit / Debit Card</Button></li>
              <li style={{ marginTop: 10 }}><Button block onClick={() => handleSelectPayment('Net Banking')}>Net Banking</Button></li>
              <li style={{ marginTop: 10 }}><Button block onClick={() => handleSelectPayment('Cash on Delivery')}>Cash on Delivery</Button></li>
            </ul>
          </Modal>

          {/* ✅ Confirmation Modal */}
          <Modal
            open={showConfirmationModal}
            onCancel={handleConfirmationClose}
            footer={[
              <Button key="ok" type="primary" onClick={handleConfirmationClose}>
                OK
              </Button>,
            ]}
            title="Payment Method Selected"
          >
            <p>You selected: <strong>{selectedPayment}</strong></p>
            <p>Thank you for your order!</p>
          </Modal>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
