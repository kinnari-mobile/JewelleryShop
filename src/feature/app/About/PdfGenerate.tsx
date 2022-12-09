import React from 'react'
import { useState, useEffect } from 'react';
import { PermissionsAndroid,View,Image,Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@store/store';
import {useProducts} from '@hooks';
import FileViewer from "react-native-file-viewer";
import {getProduct} from '@store/slice/product';
import {togglePDFModal} from '@store/slice/product';


export function PdfGenerate() {
  const qrPages = useProducts();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    askPermission()
  }, [])

  const htmlContent =
  `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        ${htmlStyles}
    </style>
  </head>
  <body>

    ${qrPages.map((value, index) =>
      [...Array(parseInt(value.no_of_qr))].map((x, i) =>
      `
       <section class="container">
         <div class="left-half">
           <div class = "row-div">
             <img src="https://chart.googleapis.com/chart?cht=qr&chl=${value.id}&chs=160x160&chld=L|0"
             class="qr-code img-thumbnail img-responsive" />
             <div class = "column-div">
             <p  class="mytext1">${value.category.name}</p>
             <p  class="mytext2">${value.id}</p>
             </div>
           </div>
         </div>
         <div class="right-half">
         <p  class="mytext4">${value.model}</p>
         <p  class="mytext3">${value.main_unit.title}</p>
         <p  class="mytext3">${value.main_unit.title}</p>
         </div>
       </section>
     `,
  ).join('')
).join('')
  }
  </body>
  </html>
  `;


  const askPermission = () => {
    //console.log("=============");

      async function requestExternalWritePermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Pdf creator needs External Storage Write Permission',
              message:
                'Pdf creator needs access to Storage data in your SD Card',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            createPDF();
          } else {
            alert('WRITE_EXTERNAL_STORAGE permission denied');
          }
        } catch (err) {
          alert('Write permission err', err);
          console.warn(err);
        }
      }
      if (Platform.OS === 'android') {
        requestExternalWritePermission();
      } else {
        createPDF();
      }
    }
    const createPDF = async () => {
      let options = {
         width: 178,
         height: 70,
        //Content to print
        html:htmlContent,
        //File Name
        fileName: 'my-test',
        //File directory
        directory: 'Download',
      };

      let file = await RNHTMLtoPDF.convert(options)
      Alert.alert('Successfully Created', 'Sucess',[
        { text: 'Cancel', style: 'cancel' ,onPress: () => dispatch(togglePDFModal(false))},
        { text: 'oK', onPress: () => openFile(file.filePath) }
      ], { cancelable: true });

    }

    const openFile = (filepath) => {
      dispatch(togglePDFModal(false));
      FileViewer.open(filepath) // absolute-path-to-my-local-file.
     .then(() => {
       console.log("Successfully");
     })
     .catch((error) => {
       console.log("Error==>",error);
     });

    }

  return (
    <View/>
  );
}

const htmlStyles = `
@page{
  margin:  0pt 0pt 0pt 0pt;
  padding: 0pt 0pt 0pt 0pt;
}
body{
  height: 100%;
  margin:  0pt 0pt 0pt 0pt;
  padding: 0pt 0pt 0pt 0pt;
}
div {display: flex;flex-direction: column;}
.container {height: 100%;display: flex;page-break-after:always;}
.left-half {flex:0.8;}
.right-half {flex: 0.2;margin-top:30px;}
.row-div {flex: 1;flex-direction :row;margin:45px 0px 10px 10px}
.column-div{flex:1;flex-direction :column;}
P.mytext1 {margin: -1px 0px 0px 5px !important;font-size:14px}
P.mytext2 {margin: 10px 0px 0px 5px !important;font-size:14px}
P.mytext3 {margin: 6px 0px 0px 0px !important;font-size:12px}
P.mytext4 {margin: -1px 0px 0px 0px !important;font-size:12px}
img { height: 40px; }

`;
