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
              <div style = "margin: 0 0 3em; height:80%">
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


                <table class="inventory" cellspacing="0px" cellpadding="2px">
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
                       <td>
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
                <table class="meta" cellspacing="0px" cellpadding="2px">
                  <tr>
                    <td><span>TOTAL ITEM COUNT :  ${" "+totalItem}</span></td >
                  </tr>
                </table>
                <table class="balance" cellspacing="0px" cellpadding="2px">
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
                  <tr class = "heading">
                    <th><span>TOTAL :</span></th>
                    <td><span>${totalAmount}</span><span></span></td>
                  </tr>

                </table>
                </div>
                <aside>
                             <h1><span>Terms & Notes</span></h1>
                             <div>
                               <p style = "font-size:20px;">Thank you for your valued business.</p>
                             </div>
                           </aside>


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
table { font-size: 80%; table-layout: fixed; width: 100%;  }
th, td { padding: 0.6em; position: relative;  }
th, td { border-bottom: 1px solid #bfbfbf}
tr.heading { background:#0C2D48; border: 0px solid #0C2D48; color:#ffffff; }
/* page */
@page{
  margin:  0pt 0pt 0pt 0pt;
}
body{
  margin:  0pt 0pt 0pt 0pt;
}
/* header */
header {background-color: #0C2D48; padding: 20px 10px;}
header:after { clear: both; content: ""; display: table; }
address { float: left;margin: 60px 0px 0px 30px; }
address p { margin: 0 0 0.25em; }
address h3 { margin: 0 0 0.5em; }
/* article */
article:after { clear: both; content: ""; display: table; }
article  { float: right; margin: 30px 40px 0px 0px; }
article h2 { margin: 0 0 0.25em;}
article p { margin: 0 0 0.25em;}

/* table meta & balance */
 table.balance { float: right;width:30%;padding:0px 20px 0px 0px;}
 table.balance:after { clear: both; content: ""; display: table; }
 table.meta { float: left;width:70%;padding:5px 0px 0px 20px;}
 table.meta:after { clear: both; content: ""; display: table; }
/* table items */

table.inventory { width: 100%;padding:40px 20px 0px 20px;}
table.inventory th { font-weight: bold; text-align: center;}
table.inventory td:nth-child(1) { width: 26%;font-weight: bold; }
table.inventory td:nth-child(2) { text-align: center; width: 20%; }
table.inventory td:nth-child(3) { text-align: center; width: 20%; }
table.inventory td:nth-child(4) { text-align: center; width: 20%; }
table.inventory td:nth-child(5) { text-align: right; width: 20%; }

/* table balance */
table.balance th, table.balance td {border-bottom: 1px solid #bfbfbf;text-align: right;padding:10px 10px 10px 10px; }
table.balance th { text-align: left;}
table.meta td { text-align: left;border-bottom: 1px solid #bfbfbf}
aside {padding:0px 20px 0px 20px;}
aside h1 { border: none; }
`;
