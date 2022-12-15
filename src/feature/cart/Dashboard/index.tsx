import React ,{useState} from 'react';
import {Container,QRTitle} from './styles';
import Marker, { Position, ImageFormat } from 'react-native-image-marker'

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
  const _markByPosition = (type) => {

      Marker.markText({
        src: filePath,
        text: `text marker \n muiltline text`,
        position: type,
        color: '#000000',
        fontName: 'Arial-BoldItalicMT',
        fontSize: 44,
        scale: 1,
        quality: 100,
saveFormat: ImageFormat.png
      })
        .then((path) => {
          console.log('path====================================',path)


        }).catch((err) => {
          console.log('====================================')
          console.log(err)
          console.log('====================================')
        })

  }

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
      <TouchableOpacity
                style={{padding: 10,
                borderRadius: 3,
                backgroundColor: '#00BF00',
                margin: 5,
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center'}}
                onPress={() => _markByPosition(Position.topLeft)}
              >
                <Text style={{fontSize: 15,
                color: 'white'}} >TopLeft</Text>
              </TouchableOpacity>
  </Container>;
}

export {Dashboard};
