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
import {toggleSearchModal,searchProduct,updateSelectedProduct,getProduct,setButtonTitle,searchProductList} from '@store/slice/product';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';
import {CheckboxIcon, UncheckboxIcon} from '@icons';
import {useToggle,useSearchProduct,useUserInfo} from '@hooks';
import {ISearchBarFields} from '@common';
import {toggleGlobalLoader} from '@store/slice';





export function SearchPopUp() {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useUserInfo();

  const [searchText, setSearchText] = useState("");
  //const [toggleButtonTitle, setToggleButtonTitle] = useState("Search");


  const {t} = useTheme();
  const searchmodel = useSelector((state: RootState) => state.searchmodal);
  const {visible} = searchmodel;

  const buttonText = useSelector((state: RootState) => state.button);
  const {title} = buttonText;



  const arraySearch = useSearchProduct();

  const onToggleSelectedItems = (item,index ) =>{
     dispatch(updateSelectedProduct({selectedItem : !item.isSelected , selectedIndex : index}));
  }

  const onCloseModal = () =>{
    dispatch(toggleSearchModal(!visible));
  }


const onSearchProduct = () =>{
  if (title == "Add") {
    if (arraySearch.length != 0) {
      var resultsValue = {} ;
      var tempArray = [];
      for (let index = 0; index < arraySearch.length; index++) {
        if (arraySearch[index].isSelected) {
          tempArray.push(arraySearch[index]);
        }
      }
      resultsValue = { results : tempArray};
      dispatch(getProduct(resultsValue));
    }
    var refreshData = [];
    dispatch(searchProductList(refreshData));
    dispatch(toggleSearchModal(!visible));
    dispatch(setButtonTitle("Search"));
  }else{
    if (searchText != null) {
      dispatch(searchProduct({token:user.access,value:searchText}));
      setSearchText("");
    }
  }
}



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
      placeholderTextColor = {t.colors.lightBlack}
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
              <QRTitle>{title}</QRTitle>
            </SearchButton>

      </SearchContainer>

    </Modal>
  );
}
