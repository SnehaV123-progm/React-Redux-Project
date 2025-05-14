import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { List, Button, Typography, Row, Col, Card, Empty, Modal } from 'antd';
import './Cart.css';

const { Title, Text } = Typography;

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Calculate total quantity
  const totalQuantity = cartItems.length;

  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      setIsModalVisible(true);
    }
  };

  // Close modal and clear "thank you" state when cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setIsModalVisible(false);
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
                    description={<Text>{item.price}</Text>}
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

          {/* ✅ Modal for thank-you message */}
          <Modal
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={[
              <Button key="ok" type="primary" onClick={() => setIsModalVisible(false)}>
                OK
              </Button>,
            ]}
            title="Thank You for Your Purchase!"
          >
            <p><strong>Quantity of Item:</strong> {totalQuantity}</p>
            <p><strong>Total Amount:</strong> Rs. {total}</p>
            <p style={{ color: 'green' }}><strong>Thank you for buying the items from BackPacksy!</strong></p>
          </Modal>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
