import React ,{useState} from 'react';
import {Container,QRTitle} from './styles';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Import Image Picker
//import {launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {CameraIcon} from '@icons';

interface IProps {}

function Dashboard(props: IProps) {

  const [filePath, setFilePath] = useState("");


    const pickSingleWithCamera =(cropping) => {
      ImagePicker.openCamera({
        cropping: cropping,
        width: 500,
        height: 500,
        includeExif: true,
        mediaType : 'photo',
      })
        .then((image) => {
          setFilePath(image.path);
        })
        .catch((e) => alert(e));
    }

    renderFileUri= ()=> {
    ///  console.log('received image================', filePath);


        if (filePath) {
          return <Image
            source={{ uri: filePath }}
            style={{ width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3}}
          />
        } else {
          return


        }
      }


  return <Container>
  <View>
 {filePath ?  <Image
   source={{ uri: filePath }}
   style={{ width: 150,
height: 150,
borderColor: 'black',
borderWidth: 1,
marginHorizontal: 3}}
 />:<CameraIcon height = {60} width = {60} />
}
 </View>
  <TouchableOpacity
        style={{backgroundColor: '#676767',height:100,width:100,alignItems:'center',justifyContent:'center',borderRadius:20,marginTop:20}}
        onPress={() => pickSingleWithCamera(true)}>
        <CameraIcon height = {60} width = {60} />
      </TouchableOpacity>
  </Container>;
}

export {Dashboard};
