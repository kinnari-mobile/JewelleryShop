import * as React from 'react';
import { useState, useEffect,useCallback} from 'react';
import { Image,RefreshControl } from 'react-native';
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
import {useDispatch,useSelector} from 'react-redux';
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
    }, [dispatch])

  const productObject = useProducts();

  const onLongPressButton = () =>{dispatch(toggleDeleteModal(true));}

  const onRefreshProduct = () =>{
    onChangeNumber(0);
    dispatch(getProductDetails(user.access));

  }


  const addNoOfQR = (text,index) => {
    onChangeNumber(text);
    dispatch(updateNoOfQRInItem({value : parseInt(text) , selectedIndex : index}));
  }

  const renderItem = ({ item,index }) => {
      return (
      <ItemContainer onLongPress={onLongPressButton} underlayColor="white" >
        <SecondContainer>
          <RowContainer>
            <ImageContainer>
            <Image style = {{width:'80%',height:'80%'}} source={{uri: item.images[0].image}}/>
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
            onChangeText={(e) => addNoOfQR(e,index)}
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
          extraData={productObject}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefreshProduct} />
          }/>
  }

  </ProductListContainer>;
}

export {ProductList};
