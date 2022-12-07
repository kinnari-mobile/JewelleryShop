import React from 'react';
import {Container,BottomContainer,QRGenerateTouchable,QRTitle,AddQRTouchable} from './styles';
import {PlusIcon} from '@icons';
import {ProductList} from './ProductList';
import {SearchPopUp} from './SearchPopUp';
import {PdfGenerate} from './PdfGenerate';
import {toggleSearchModal} from '@store/slice/product';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@store/store';
import { useState, useEffect } from 'react';


interface IProps {}

function About(props: IProps) {
  const [isPdfGenrated, setPdfGenrated] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const onSearchModal = () =>{dispatch(toggleSearchModal(true));}

  const onGeneratePdf = () =>{
    setPdfGenrated(true);
  }

  return <Container>
  <ProductList/>
  <SearchPopUp/>
  {isPdfGenrated && <PdfGenerate/>}
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
