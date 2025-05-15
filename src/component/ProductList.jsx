import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Modal, Button, Typography } from 'antd';
import './ProductList.css';

// ✅ Step 1: Import Images
import toteSample from './images/tote2.jpg';
import backpackSample from './images/Backpck1.jpg';
import clutchSample from './images/night.jpg';
import laptopSample from './images/office.jpg';
import pouchSample from './images/mini.jpg';
import suitSample from './images/wandr.jpg';
import trekSample from './images/day.jpg';
import slingSample from './images/shoulder.jpg';

import tote1 from './images/greentote.jpg';
import backpack1 from './images/Backpack3.jpg';
import clutch1 from './images/casual.jpg';
import laptop1 from './images/slim.jpg';
import pouch1 from './images/zip.jpg';
import suit1 from './images/jet.jpg';
import trek1 from './images/over.jpg';
import sling1 from './images/travel.jpg';

import tote2 from './images/earthy.jpg';
import backpack2 from './images/peak.jpg';
import clutch2 from './images/luxe.jpg';
import laptop2 from './images/exe.jpg';
import pouch2 from './images/snap.jpg';
import suit2 from './images/roam.jpg';
import trek2 from './images/expe.jpg';
import sling2 from './images/cross.jpg';


import tote3 from './images/nature.jpg';
import backpack3 from './images/wild.jpg';
import clutch3 from './images/opu.jpg';
import laptop3 from './images/urbaned.jpg';
import pouch3 from './images/loop.jpg';
import suit3 from './images/nest.jpg';
import trek3 from './images/convert.jpg';
import sling3 from './images/shoulder.jpg';


import tote4 from './images/terra.jpg';
import backpack4 from './images/alipne.jpg';
import clutch4 from './images/noir.jpg';
import laptop4 from './images/desk.jpg';
import pouch4 from './images/pure.jpg';
import suit4 from './images/nomad.jpg';
import trek4 from './images/hydr.jpg';
import sling4 from './images/tech.jpg';


import tote5 from './images/wildfibre.jpg';
import backpack5 from './images/aero.jpg';
import clutch5 from './images/silk.jpg';
import laptop5 from './images/metro.jpg';
import pouch5 from './images/hold.jpg';
import suit5 from './images/vault.jpg';
import trek5 from './images/multi.jpg';
import sling5 from './images/sport.jpg';


// ✅ Step 2: Define Categories
const categories = [
  {
    name: 'Tote Bag',
    image: toteSample,
    items: [
      { id: 't1', name: 'Urban Tote', price: 'Rs. 750', image: toteSample },
      { id: 't2', name: 'Green Tote', price: 'Rs. 250', image: tote1 },
      { id: 't3', name: 'Earthy Tote', price: 'Rs. 350', image: tote2 },
      { id: 't4', name: 'Nature Tote', price: 'Rs. 400', image: tote3 },
      { id: 't5', name: 'Terra Tote', price: 'Rs. 600', image: tote4 },
      { id: 't6', name: 'WildFiber Tote', price: 'Rs. 500', image: tote5 },
    ],
  },
  {
    name: 'Backpack',
    image: backpackSample,
    items: [
      { id: 'b1', name: 'Travel Pro', price: 'Rs 1200', image: backpackSample },
      { id: 'b2', name: 'Campus Backpack', price: 'Rs 950', image: backpack1 },
      { id: 'b3', name: 'PeakPack', price: 'Rs 1000', image: backpack2 },
      { id: 'b4', name: 'WildRidge', price: 'Rs 1200', image: backpack3 },
      { id: 'b5', name: 'AlpineCarry', price: 'Rs 1350', image: backpack4 },
      { id: 'b6', name: 'AeroPack', price: 'Rs 1450', image: backpack5 },
    ],
  },
  {
    name: 'Clutches',
    image: clutchSample,
    items: [
      { id: 'c1', name: 'Night Clutch', price: 'Rs 400', image: clutchSample },
      { id: 'c2', name: 'Casual Clutch', price: 'Rs 350', image: clutch1 },
      { id: 'c3', name: 'LuxeClutch', price: 'Rs 250', image: clutch2 },
      { id: 'c4', name: 'Opulenza', price: 'Rs 150', image: clutch3 },
      { id: 'c5', name: 'NoirBelle', price: 'Rs 180', image: clutch4 },
      { id: 'c6', name: 'Silken Secret', price: 'Rs 399', image: clutch5 },
    ],
  },
  {
    name: 'Laptop Bag',
    image: laptopSample,
    items: [
      { id: 'l1', name: 'Office Pro', price: 'Rs 1300', image: laptopSample },
      { id: 'l2', name: 'Slim Sleeve', price: 'Rs 1100', image: laptop1 },
      { id: 'l3', name: 'ExecCase', price: 'Rs 2400', image: laptop2 },
      { id: 'l4', name: 'UrbanEdge', price: 'Rs 3500', image: laptop3 },
      { id: 'l5', name: 'DeskMate', price: 'Rs 1500', image: laptop4 },
      { id: 'l6', name: 'MetroPort', price: 'Rs 1800', image: laptop5 },
    ],
  },
  {
    name: 'Mobile Pouch',
    image: pouchSample,
    items: [
      { id: 'm1', name: 'Pouch Mini', price: 'Rs 150', image: pouchSample },
      { id: 'm2', name: 'Zip Pouch', price: 'Rs 180', image: pouch1 },
      { id: 'm3', name: 'Snap Pouch', price: 'Rs 99', image: pouch2 },
      { id: 'm4', name: 'Luxe loop Pouch', price: 'Rs 120', image: pouch3 },
      { id: 'm5', name: 'PurePocket Pouch', price: 'Rs 100', image: pouch4 },
      { id: 'm6', name: 'UrbanHold Pouch', price: 'Rs 140', image: pouch5 },
    ],
  },
  {
    name: 'Suitcase Bag',
    image: suitSample,
    items: [
      { id: 'st1', name: 'WanderCase', price: 'Rs 1500', image: suitSample },
      { id: 'st2', name: 'JetHaul', price: 'Rs 1800', image: suit1 },
      { id: 'st3', name: 'RoamRide', price: 'Rs 1200', image: suit2 },
      { id: 'st4', name: 'TravelNest', price: 'Rs 2700', image: suit3 },
      { id: 'st5', name: 'NomadWheel', price: 'Rs 1309', image: suit4 },
      { id: 'st6', name: 'VoyageVault', price: 'Rs 1900', image: suit5 },
    ],
  },
  {
    name: 'Trekking Bag',
    image: trekSample,
    items: [
      { id: 't1', name: 'Daypack', price: 'Rs 2400', image: trekSample },
      { id: 't2', name: 'Overnight Backpack', price: 'Rs 1800', image: trek1 },
      { id: 't3', name: 'Expedition Backpack', price: 'Rs 1900', image: trek2 },
      { id: 't4', name: 'Convertible Backpack', price: 'Rs 2100', image: trek3 },
      { id: 't5', name: 'Hydration Pack', price: 'Rs 3000', image: trek4 },
      { id: 't6', name: 'Multi-Day Backpack', price: 'Rs 1600', image: trek5 },
    ],
  },
  {
    name: 'Sling Bag',
    image: slingSample,
    items: [
      { id: 'sb1', name: 'Everyday Sling', price: 'Rs 150', image: slingSample },
      { id: 'sb2', name: 'Travel Sling', price: 'Rs 99', image: sling1 },
      { id: 'sb3', name: 'Crossbody Sling', price: 'Rs 100', image: sling2 },
      { id: 'sb4', name: 'Shoulder Sling', price: 'Rs 120', image: sling3 },
      { id: 'sb5', name: 'Tech Sling', price: 'Rs 450', image: sling4 },
      { id: 'sb6', name: 'Sports Sling', price: 'Rs 250', image: sling5 },
    ],
  },
];

const { Title } = Typography;

const ProductList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleShowcase = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAddedItems((prev) => new Set(prev).add(item.id));
  };

  return (
    <section className="products" id="shop">
      <div className="container">
        <Title level={3}>Featured Bag Categories</Title>

        <div className="category-grid">
          {categories.map((cat) => (
            <div className="category-card" key={cat.name}>
              <img src={cat.image} alt={cat.name} />
              <h4>{cat.name}</h4>
              <Button type="primary" onClick={() => handleShowcase(cat)}>
                Showcase
              </Button>
            </div>
          ))}
        </div>

        <Modal
          title={selectedCategory?.name}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <div className="modal-grid">
            {selectedCategory?.items.map((item) => (
              <div className="modal-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <Button
                  type={addedItems.has(item.id) ? 'default' : 'primary'}
                  onClick={() => handleAddToCart(item)}
                  disabled={addedItems.has(item.id)}
                >
                  {addedItems.has(item.id) ? 'Added' : 'Add to Cart'}
                </Button>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ProductList;
