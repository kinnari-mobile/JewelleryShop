import React from 'react'
import { useState, useEffect } from 'react';
import { PermissionsAndroid,View,Image,Alert,TouchableOpacity,Text } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from "react-native-file-viewer";
import sales from "./sales";
import images from "./images.png";

const data = {
  name: 'Tonny Hill',
  address: '101 E. Chapman Ave<br>Orange, CA 92866',
  phone: '98273-***11',
  company: 'Xyz Company',
  amount: '46899.50',
  amt: '53100.50',
}

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
            <title>Invoice</title>
            <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
            <style>
              ${htmlStyles}
            </style>
          </head>
          <body>
            <header>
            </header>
            <article>
            <address>
              <h3>${sales.labour.name}</h3>
              <p>${sales.labour.address}</p>
              <p>${sales.labour.email}</p>
              <p>${sales.labour.phone}</p>
            </address>
              <table class="meta">
                <tr>
                  <th><span>Invoice #</span></th>
                  <td><span>101138</span></td>
                </tr>
                <tr>
                  <th><span>Date</span></th>
                  <td><span>${new Date()}</span></td>
                </tr>
                <tr>
                  <th><span>Amount Due</span></th>
                  <td><span id="prefix">$</span><span>${data.amount}</span></td>
                </tr>
              </table>
              <table class="inventory">
                <thead>
                  <tr>
                    <th><span>Item</span></th>
                    <th><span>Description</span></th>
                    <th><span>Rate</span></th>
                    <th><span>Quantity</span></th>
                    <th><span>Price</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span>Front End Consultation</span></td>
                    <td><span>Experience Review</span></td>
                    <td><span data-prefix>$</span><span>${data.amt}</span></td>
                    <td><span>4</span></td>
                    <td><span data-prefix>$</span><span>${data.amt}</span></td>
                  </tr>
                </tbody>
              </table>
              <table class="balance">
                <tr>
                  <th><span>Total</span></th>
                  <td><span data-prefix>$</span><span>${data.amt}</span></td>
                </tr>
                <tr>
                  <th><span>Amount Paid</span></th>
                  <td><span data-prefix>$</span><span>0.00</span></td>
                </tr>
                <tr>
                  <th><span>Balance Due</span></th>
                  <td><span data-prefix>$</span><span>${data.amount}</span></td>
                </tr>
              </table>
            </article>
            <aside>
              <h1><span>Additional Notes</span></h1>
              <div>
                <p>A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
              </div>
            </aside>
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
      //Content to print
      html: htmlContent,
      //File Name
      fileName: 'my-test',
      //File directory
      directory: 'Download',

      base64: true
    };

    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    Alert.alert('Successfully Exported', 'Path:' + file.filePath, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Open', onPress: () => openFile(file.filePath) }
    ], { cancelable: true });

  }

  const openFile = (filepath) => {
    const path = filepath;// absolute-path-to-my-local-file.
    FileViewer.open(path)
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
  }
  return (
    <View>
      <TouchableOpacity onPress={askPermission}>

        <Text>Create PDF</Text>
      </TouchableOpacity>
    </View>
  )
}




const htmlStyles = `
@page{ margin:  0pt 0pt 0pt 0pt;}
body{ margin:  0pt 0pt 0pt 0pt; }

h1 { font: bold 100% sans-serif; letter-spacing: 0.5em; text-align: center; text-transform: uppercase; }

/* table */

table { font-size: 75%; table-layout: fixed; width: 100%; padding:20px;}
table { border-collapse: seprate; border-spacing: 2px; }
th, td { border-width: 1px; padding: 0.5em; position: relative; text-align: left; }
th, td { border-radius: 0.25em; border-style: solid; }
th { background: #EEE; border-color: #BBB; }
td { border-color: #DDD; }
tr.heading { background:#0C2D48; border-bottom: 1px solid #ddd; color:#ffffff; }

/* page */

html { font: 16px/1 'Open Sans', sans-serif; overflow: auto;}



/* header */

header { background-color: #0C2D48; padding: 20px 10px; }
header:after { clear: both; content: ""; display: table; }

header h1 { background: #000; border-radius: 0.25em; color: #FFF; margin: 0 0 1em; padding: 0.5em 0; }

header span, header img { display: block; float: right; }
header span { margin: 0 0 1em 1em; max-height: 25%; max-width: 60%; position: relative; }
header img { max-height: 100%; max-width: 100%; }

/* article */

article, table.meta, table.inventory { margin: 0 0 3em; }
article:after { clear: both; content: ""; display: table; }
article h1 { clip: rect(0 0 0 0); position: absolute; }
article address p { margin: 0 0 0.25em; }
article address h3 { margin: 0 0 0.25em; }
article address { float: left;margin: 60px 0px 0px 20px; }

/* table meta & balance */

table.meta, table.balance { float: right; width: 36%; }
table.meta:after, table.balance:after { clear: both; content: ""; display: table; }

/* table meta */

table.meta th { width: 40%; }
table.meta td { width: 60%; }

/* table items */

table.inventory { clear: both; width: 100%; }
table.inventory th { font-weight: bold; text-align: center; }

table.inventory td:nth-child(1) { width: 26%; }
table.inventory td:nth-child(2) { width: 38%; }
table.inventory td:nth-child(3) { text-align: right; width: 12%; }
table.inventory td:nth-child(4) { text-align: right; width: 12%; }
table.inventory td:nth-child(5) { text-align: right; width: 12%; }

/* table balance */

table.balance th, table.balance td { width: 50%; }
table.balance td { text-align: right; }

/* aside */

aside h1 { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
aside h1 { border-color: #999; border-bottom-style: solid; }
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   padding: 20px 10px;
   width:100%;
   background-color: #0C2D48;
   color: white;

}
`;
