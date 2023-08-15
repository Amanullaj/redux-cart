import {ScrollView,StyleSheet,Text,View,Image,Pressable,SafeAreaView,} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "./CartReducer";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const Products = [
            {id:1,name:'Iphone',color:'Gold',price:50000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:2,name:'Samsung',color:'White',price:20000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:3,name:'Nokia',color:'Black',price:25000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:4,name:'MI',color:'White',price:10000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:5,name:'Lenovo',color:'Black',price:30000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:6,name:'Oppo',color:'Blue',price:20000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:7,name:'One Plus',color:'Gold',price:40000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:8,name:'Vivo',color:'Green',price:30000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
            {id:9,name:'Xiomi',color:'Silver',price:15000,image:'https://www.nicepng.com/png/detail/249-2496005_android-transparent-png-phone-clipart.png'},
          ]
 
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  }
  const decreaseQuantity = (item) => {
    if(item.quantity == 1){
      dispatch(removeFromCart(item));
    }else{
      dispatch(decrementQuantity(item));
    }
  }
  return (
    <SafeAreaView>
     <ScrollView>
      {Products.map((item) => (
        <View
          key={item.id}
          style={styles.main}>
           <Image style={{ width: 70, height: 120 }}
              source={{ uri: item.image }}/>
          
          <View>
            <Text style={{ fontWeight: "bold",color:'blue',fontSize:25 }}>{item.name}</Text>
            <Text style={styles.txt1}>Color :{item.color}</Text>
            <Text style={styles.txt1}>Price : Rs.{item.price}</Text>
            {cart.some((value) => value.id == item.id) ? (
              <Pressable onPress={() => removeItemFromCart(item)}>
                <Text style={styles.txt3}>
                  REMOVE FROM CART
                </Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => addItemToCart(item)}>
                <Text style={styles.txt4}>
                  ADD TO CART
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      ))}

    <Text style={styles.cart}>Cart</Text>
    
      {cart.map((item,index) => (
        <View style={{padding:10,margin:10,alignItems:'center',borderWidth:1}} key={index}>
           <Text style={{ fontWeight: "bold",color:'blue',fontSize:20 }}>{item.name}</Text>
            <Text style={styles.txt1}>Color :{item.color}</Text>
            <Text style={styles.txt1}>Price : Rs.{item.price}</Text>
          <Image style={{ width: 80, height: 150, borderRadius: 8,marginTop:6 }}
              source={{ uri: item.image }}/>
          <View style={styles.container}>
            <Pressable onPress={() => decreaseQuantity(item)}>
              <Text style={styles.txt}> - </Text>
            </Pressable>

            <Pressable>
              <Text style={styles.txt}> {item.quantity}  </Text>
            </Pressable>

            <Pressable onPress={() => increaseQuantity(item)}>
              <Text style={styles.txt}>  +  </Text>
            </Pressable>
          </View>
        </View>
      ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  txt : {fontSize: 20,color: "white",paddingHorizontal: 10,},
  txt1: { color:'blue'},
  main :{ flexDirection: "row",margin:30,borderWidth:1,justifyContent:'space-evenly',padding:10 },
  txt3 : {borderColor: "gray",borderWidth: 1,marginVertical: 10,padding: 5,color:'red' },
  txt4 : {borderColor: "gray",borderWidth: 1,marginVertical: 10,padding: 5,color:'blue'},
  cart : {backgroundColor:'orange',padding:10,margin:10,borderRadius:10,fontSize:25,
  color:'white',fontWeight:'bold'},
  container : {flexDirection: "row",marginTop:20,alignItems: "center",backgroundColor: "#FF3366",borderRadius: 5,
  width: 120,}
});
