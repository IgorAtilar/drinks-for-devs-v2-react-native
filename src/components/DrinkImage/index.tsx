import { MotiView } from 'moti';
import { Modal } from 'react-native';

import {
  StyledImage,
  Container,
  CloseButton,
  CloseIcon,
  styles,
} from './styles';

interface IDrinkDetailsProps {
  strDrinkThumb: string;
  isOpen: boolean;
  toogleIsOpen: () => void;
}

export const DrinkImage = ({
  strDrinkThumb,
  isOpen,
  toogleIsOpen,
}: IDrinkDetailsProps) => {
  return (
    <Modal visible={isOpen} transparent={true}>
      <Container>
        <MotiView
          transition={{
            type: 'spring',
          }}
          from={{
            scaleX: 0.1,
            scaleY: 0.1,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
          }}
          exit={{
            scaleX: 0.1,
            scaleY: 0.1,
            opacity: 0,
          }}
          style={styles.motiContainer}
        >
          <StyledImage source={{ uri: strDrinkThumb }} />
          <CloseButton onPress={toogleIsOpen}>
            <CloseIcon />
          </CloseButton>
        </MotiView>
      </Container>
    </Modal>
  );
};
