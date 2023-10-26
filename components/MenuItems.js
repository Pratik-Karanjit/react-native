import React from 'react';

import { View, Text, ScrollView } from 'react-native';


//array to display below
const menuItemsToDisplay = [
    'Samosa \n Paneer Tikka \n Butter Chicken \n Biryani \n Chana Masala \n Tandoori Chicken \n Rogan Josh \n Aloo Gobi \n Naan Bread \n Palak Paneer \n Dosa \n Malai Kofta \n Chicken Tikka Masala \n Lamb Vindaloo \n Vegetable Biryani \n Rogani Murgh \n Mango Lassi \n Gulab Jamun \n Raita \n Tandoori Roti'
  ];


const MenuItems = () => {
  return (
    <View style={{ flex: 0.9 }}>
      <ScrollView
      //Setting indicatorStyle to white keeps the color of the scroller into white.
        indicatorStyle= {"white"}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "black",
        }}>
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
          View Menu
        </Text>
        <Text style={{ color: '#F4CE14', fontSize: 30 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;