import * as React from 'react';
import { useState, useEffect,useCallback} from 'react';
import { Image } from 'react-native';
import {SecondContainer,
  MyIcon,
  ProductListContainer,
  ProductFlatList,
  ItemContainer,
  RowContainer,
  ImageContainer,
  ItemMainContainer,
  ItemBottomContainer,
  CategoryTitle,
  SubCategoryTitle,
  ProductTitle,NumberInput,
  BlankMessageContainer,
  BlankMessageTitle
} from './styles';
import {IGetProductFields} from '@common';
import {AppDispatch} from '@store/store';
import {getProductDetails,toggleDeleteModal,updateNoOfQRInItem} from '@store/slice/product';
import {useDispatch} from 'react-redux';
import {useProducts,useUserInfo} from '@hooks';
import {DeletePopUp} from './DeletePopUp';


interface IProps {}

function ProductList(props: IProps) {
  const [numberText, onChangeNumber] = useState(0);
  const {user} = useUserInfo();
  const dispatch = useDispatch<AppDispatch>();
  // dispatch our thunk when component first mounts
    useEffect(() => {
      dispatch(getProductDetails(user.access));
    }, [])

  const productObject = useProducts();

  const onLongPressButton = () =>{dispatch(toggleDeleteModal(true));}

  const addNoOfQR = (item,index) => {
    dispatch(updateNoOfQRInItem({value : parseInt(numberText) , selectedIndex : index}));

  }
//   const onChangeHandler = (text,item,index) => {
//    setNumber(text);
//    dispatch(updateNoOfQRInItem({value : parseInt(numberText) , selectedIndex : index}));
//
// };

  const renderItem = ({ item,index }) => {
    console.log( item.category.image);

    return (
      <ItemContainer onLongPress={onLongPressButton} underlayColor="white" >
        <SecondContainer>
          <RowContainer>
            <ImageContainer>
            <Image style = {{width:'80%',height:'80%'}} source={{uri: item.category.image}}/>
            </ImageContainer>
            <ItemMainContainer>
              <ProductTitle>{item.model}</ProductTitle>
              <CategoryTitle>{item.category.name}</CategoryTitle>
              <CategoryTitle>{item.sub_category.name}</CategoryTitle>
              <SubCategoryTitle>{"Unit : "+item.main_unit.title}</SubCategoryTitle>
            </ItemMainContainer>
          </RowContainer>
          <ItemBottomContainer>
          <RowContainer>
            <CategoryTitle>No of QR</CategoryTitle>
            <NumberInput
            onEndEditing={() => addNoOfQR(item,index)}
            onChangeText={onChangeNumber}
            keyboardType="numeric"/>
          </RowContainer>
          </ItemBottomContainer>
        </SecondContainer>
      </ItemContainer>
    );
  };

  return<ProductListContainer>
  <DeletePopUp/>
  {
    productObject.length == 0 ?
    <BlankMessageContainer>
      <BlankMessageTitle>
        Please Select Search Value.
      </BlankMessageTitle>
    </BlankMessageContainer>
    :
    <ProductFlatList
          data={productObject}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={productObject}/>
  }

  </ProductListContainer>;
}

export {ProductList};
