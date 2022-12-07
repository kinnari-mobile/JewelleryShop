import React from 'react';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {RootState} from '@store/reducers';
import {useTheme} from '@theme';
import {SearchContainer,
  ProductFlatList,
  ItemContainer,
  RowContainer,
  ImageContainer,
  SearchItemMainContainer,
  ItemBottomContainer,
  CategoryTitle,
  SubCategoryTitle,
  ProductTitle,
  SelectedContainer,
  SearchButton,
  QRTitle,
  InputContainer,
  BlankMessageTitle,
  BlankMessageContainer
} from './styles';
import {toggleSearchModal,searchProduct,updateSelectedProduct,getProduct} from '@store/slice/product';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';
import {CheckboxIcon, UncheckboxIcon} from '@icons';
import {useToggle,useSearchProduct,useUserInfo} from '@hooks';
import {ISearchBarFields} from '@common';





export function SearchPopUp() {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useUserInfo();

  const [searchText, setSearchText] = useState("");

  const {t} = useTheme();
  const searchmodel = useSelector((state: RootState) => state.searchmodal);
  const {visible} = searchmodel;
  const arraySearch = useSearchProduct();
  const onToggleSelectedItems = (item,index ) =>{
     dispatch(updateSelectedProduct({selectedItem : !item.isSelected , selectedIndex : index}));
  }

  const onCloseModal = () =>{
    var results = {};
    var tempArray = [];
    for (let index = 0; index < arraySearch.length; index++) {
      if (arraySearch[index].isSelected) {
        tempArray.push(arraySearch[index]);
      }
    }
    results = { results :tempArray};
    dispatch(getProduct(results));
    dispatch(toggleSearchModal(!visible));
  }
const onSearchProduct = () =>{
  if (searchText != null) {
    dispatch(searchProduct({token:user.access,value:searchText}));
  }
}

  //const productObject = useProducts();


  const renderItem = ({ item,index }) => {
    return (
      <ItemContainer>
          <RowContainer>
            <ImageContainer>
            </ImageContainer>
            <SearchItemMainContainer>
              <ProductTitle>{item.model}</ProductTitle>
              <CategoryTitle>{item.category.name}</CategoryTitle>
              <CategoryTitle>{item.sub_category.name}</CategoryTitle>
              <SubCategoryTitle>{"Unit : "+item.main_unit.title}</SubCategoryTitle>
            </SearchItemMainContainer>
            <SelectedContainer activeOpacity={1} onPress={()=>onToggleSelectedItems(item,index)}>
                {item.isSelected ? (
                  <CheckboxIcon height={25} width={25} />
                ) : (
                  <UncheckboxIcon height={25} width={25} />
                )}
            </SelectedContainer>
          </RowContainer>

      </ItemContainer>
    );
  };

  return (
    <Modal
      isVisible={visible}
      statusBarTranslucent
      backdropColor="#000000AD"
      backdropOpacity={0.8}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onRequestClose={onCloseModal}>

      <SearchContainer>
      <InputContainer
      placeholder="Search Product"
      onChangeText={setSearchText}/>

        {
          arraySearch.length == 0 ?
          <BlankMessageContainer>
            <BlankMessageTitle>
              Please Enter Search Value.{"\n"} Click on "Search" Button.
            </BlankMessageTitle>
          </BlankMessageContainer>
          :
          <ProductFlatList
                data={arraySearch}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={arraySearch}/>
        }

            <SearchButton onPress = {onSearchProduct}>
              <QRTitle>Search</QRTitle>
            </SearchButton>

      </SearchContainer>

    </Modal>
  );
}
