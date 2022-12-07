import React from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {RootState} from '@store/reducers';
import {useTheme} from '@theme';
import {ModalContainer,
  DeleteItemConformationTitle,
  DeleteTouchable,
  CancelTouchable,
  DeleteTitle,
  CancelTitle,
  RowContainer
} from './styles';
import {toggleDeleteModal} from '@store/slice/product';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';

export function DeletePopUp() {
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTheme();
  const deletemodel = useSelector((state: RootState) => state.deletemodel);
  const {visible} = deletemodel;

  const cancelButton = () =>{dispatch(toggleDeleteModal(false)); }

  return (
    <Modal
      isVisible={visible}
      statusBarTranslucent
      backdropColor="#000000AD"
      backdropOpacity={0.8}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={{alignItems: 'center'}}
      >
      <ModalContainer>

   <DeleteItemConformationTitle>Are you sure want to Remove Product From QR Generation?</DeleteItemConformationTitle>
   <RowContainer>
     <CancelTouchable onPress={cancelButton}>
       <CancelTitle>Cancel</CancelTitle>
     </CancelTouchable>
     <DeleteTouchable>
       <DeleteTitle>Delete</DeleteTitle>
     </DeleteTouchable>
   </RowContainer>

      </ModalContainer>
    </Modal>
  );
}
