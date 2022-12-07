import React from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {RootState} from '@store/reducers';
import {useTheme} from '@theme';
import {Container, Indicator} from './styles';
import {ActivityIndicator} from 'react-native';

export function GlobalLoder() {
  const {t} = useTheme();
  const loader = useSelector((state: RootState) => state.loader);
  const {visible} = loader;

  return (
    <Modal
      isVisible={visible}
      statusBarTranslucent
      backdropColor="#000000AD"
      backdropOpacity={0.8}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      style={{alignItems: 'center'}}>
      <Container>
        <Indicator size="small" color={t.colors.white} />
      </Container>
    </Modal>
  );
}

export function ContentLoader({loading}: {loading: boolean}) {
  const {t} = useTheme();
  if (!loading) return null;

  return <ActivityIndicator size="small" color={t.colors.primary} />;
}
