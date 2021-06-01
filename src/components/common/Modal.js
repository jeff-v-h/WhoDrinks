import React from 'react';
import { TouchableWithoutFeedback, Modal, View } from 'react-native';
import PT from 'prop-types';
import styles from '../../styles/styles';

MyModal.propTypes = {
  children: PT.node.isRequired,
  visible: PT.bool.isRequired,
  dismiss: PT.func,
  isBottomContent: PT.bool
};

MyModal.defaultProps = {
  dismiss: () => {},
  isBottomContent: false
};

function MyModal({ children, visible, dismiss, isBottomContent }) {
  const contentStyles = isBottomContent
    ? styles.bottomModalContentWrapper
    : styles.modalContentWrapper;
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={dismiss}
      >
        <TouchableWithoutFeedback onPress={dismiss}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={contentStyles}>{children}</View>
      </Modal>
    </View>
  );
}

export default MyModal;
