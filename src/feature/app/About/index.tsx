import React from 'react';
import {Container,BottomContainer,QRGenerateTouchable,QRTitle,AddQRTouchable} from './styles';
import {PlusIcon} from '@icons';
import {ProductList} from './ProductList';
import {SearchPopUp} from './SearchPopUp';
import {PdfGenerate} from './PdfGenerate';
import {toggleSearchModal,togglePDFModal} from '@store/slice/product';
import {useDispatch,useSelector} from 'react-redux';
import {AppDispatch} from '@store/store';
import { useState, useEffect } from 'react';


interface IProps {}

function About(props: IProps) {
  const pdfmodel = useSelector((state: RootState) => state.pdf);
  const {visible} = pdfmodel;

  const dispatch = useDispatch<AppDispatch>();
  const onSearchModal = () =>{dispatch(toggleSearchModal(true));}

  const onGeneratePdf = () =>{
    dispatch(togglePDFModal(true));
  }

  return <Container>
  <ProductList/>
  <SearchPopUp/>
  {visible && <PdfGenerate/>}
  <BottomContainer>
    <QRGenerateTouchable onPress={onGeneratePdf}>
      <QRTitle>Generate QR</QRTitle>
    </QRGenerateTouchable>
    <AddQRTouchable onPress={onSearchModal}>
      <PlusIcon height={25} width={25} />
    </AddQRTouchable>
    </BottomContainer>
  </Container>;
}

export {About};
