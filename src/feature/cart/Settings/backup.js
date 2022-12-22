import React from 'react'
import { useState, useEffect } from 'react';
import { PermissionsAndroid,View,Image,Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from "react-native-file-viewer";
import sales from "./sales";
import images from "./images.png";



export function Invoice() {
  const [subAmount, onSubAmount] = useState(0);
  const [cgstAmount, onCgstAmount] = useState(0);
  const [sgstAmount, onSgstAmount] = useState(0);
  const [totalAmount, onTotalAmount] = useState(0);
  const [totalItem, onTotalItem] = useState(0);


  useEffect(() => {
    askPermission();
  //  totalItem =  sales.entries.length;
  var subtotal = 0,cgstCount=0,sgstCount=0,totalAmount=0;
    for (let index = 0; index < sales.entries.length; index++) {
      subtotal = subtotal+sales.entries[index].amount;
    }
    cgstCount = (subtotal*sales.gst.cgst)/100;
    sgstCount = (subtotal*sales.gst.sgst)/100;
    totalAmount = subtotal+cgstCount+sgstCount;
    onSubAmount(subtotal);
    onCgstAmount(cgstCount);
    onSgstAmount(sgstCount);
    onTotalAmount(totalAmount);
    onTotalItem(sales.entries.length);
  }, [subAmount,cgstAmount,sgstAmount,totalAmount,totalItem])

  const htmlContent = `
          <html>
            <head>
              <meta charset="utf-8">

              <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
              <style>
                ${htmlStyles}
              </style>
            </head>
            <body>
              <header>
              </header>
              <address>
                <h3>${sales.labour.name}</h3>
                <p>${sales.labour.address}</p>
                <p>${sales.labour.email}</p>
                <p>${sales.labour.phone}</p>
              </address>
              <article>
              <h1>Companny Logo</h1>
                <h2>INVOICE</h2>
                <p>Invoice :         ${sales.invoice_no}</p>
                <p>Transport :       ${sales.transport}</p>
                <p>IR Number :       ${sales.lr_no}</p>
                <p>Date :            ${sales.date}</p>
              </article>


                <table class="inventory">
                  <thead>
                    <tr class="heading">
                      <th><span>Item</span></th>
                      <th><span>Model</span></th>
                      <th><span>Quantity</span></th>
                      <th><span>Price</span></th>
                      <th><span>Amount</span></th>
                    </tr>
                  </thead>
                  <tbody>
                  ${sales.entries
                   .map(
                     line => `
                     <tr>
                       <td style="padding:10px;">
                       <span>${line.product.name}</span>
                       <BR>
                       <p style = "margin:1px; color:#636363;">${line.product.sub_category.name}</p>
                       </td>

                       <td><span>${line.product.model}</span></td>
                       <td><span>${line.quantity}</span></td>
                       <td><span>${line.price}</span></td>
                       <td><span>${line.amount}</span></td>
                     </tr>
                 `,
                   )
                   .join('')}

                  </tbody>
                </table>
                <table class="balance">
                  <tr>
                    <th><span>SUB TOTAL :</span></th>
                    <td><span>${subAmount}</span></td>
                  </tr>
                  <tr>
                    <th><span>${"CGST("+sales.gst.cgst+"%"}) :</span></th>
                    <td><span>${cgstAmount}</span></td>
                  </tr>
                  <tr>
                  <th><span>${"SGST("+sales.gst.sgst+"%"}) :</span></th>
                    <td><span>${sgstAmount}</span></td>
                  </tr>
                  <tr>
                    <th><span>TOTAL :</span></th>
                    <td><span>${totalAmount}</span><span></span></td>
                  </tr>
                  <tr>
                    <th><span>TOTAL ITEM COUNT :</span></th>
                    <td><span>${totalItem}</span></td>
                  </tr>
                </table>

                <div class="footer">
                </div>

            </body>
          </html>
        `;


  const askPermission = () => {
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
            if (subAmount != 0) {
              createPDF();
            }
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
        //Content to print
        html:htmlContent,
        //File Name
        fileName: 'invoice',
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

/* table */

table { font-size: 75%; table-layout: fixed; width: 100%; ,background-color: #0C2D48; }
table { border-collapse: collapse; border-spacing: 2px; }

th { }
tr.heading { background:#0C2D48; border-bottom: 1px solid #ddd; color:#ffffff; }
  tr{border-bottom: 1px solid #bfbfbf;}
/* page */
@page{
  margin:  0pt 0pt 0pt 0pt;
  padding: 0pt 0pt 0pt 0pt;
}
body{
  margin:  0pt 0pt 0pt 0pt;
  padding: 0pt 0pt 0pt 0pt;
}
/* header */
header {background-color: #0C2D48; padding: 20px 10px;}
header:after { clear: both; content: ""; display: table; }

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   padding: 20px 10px;
   width:100%;
   background-color: #0C2D48;
   color: white;

}
address { float: left;margin: 60px 0px 0px 30px; }
address p { margin: 0 0 0.25em; }
address h3 { margin: 0 0 0.5em; }

/* article */
article:after { clear: both; content: ""; display: table; }
article  { float: right; margin: 30px 40px 50px 0px; }
article h2 { margin: 0 0 0.25em;}
article p { margin: 0 0 0.25em;}

/* table meta & balance */
table.meta, table.balance { float: right;width:40%}
table.meta:after, table.balance:after { clear: both; content: ""; display: table; }
/* table meta */
table.meta th { width: 40%; text-align: right; border-bottom: 0px solid #bfbfbf;  }
table.meta td { width: 60%;  text-align: right; border-bottom: 0px solid #bfbfbf;  }
/* table items */

table.inventory { width: 100%;}
table.inventory th { font-weight: bold; text-align: center;}
table.inventory td:nth-child(1) { width: 26%;font-weight: bold; }
table.inventory td:nth-child(2) { text-align: center; width: 12%; }
table.inventory td:nth-child(3) { text-align: center; width: 12%; }
table.inventory td:nth-child(4) { text-align: center; width: 12%; }
table.inventory td:nth-child(5) { text-align: center; width: 12%; }

/* table balance */
table.balance th, table.balance td {border-bottom: 1px solid #bfbfbf;text-align: right;margin-right: 150px; }
table.balance td { text-align: right; border-bottom: 1px solid #bfbfbf; }
/* aside */
aside h1 { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
aside h1 { border-color: #999; border-bottom-style: solid; }
`;
