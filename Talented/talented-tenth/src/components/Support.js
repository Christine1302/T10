// src/components/Support.js
import React from 'react';
import '../App.css';

const Support = () => {
    return (
      <div className="support container" id="support">
        <h2 className="w3-center">Support Talented Tenth</h2>
        <p style={{ textAlign: 'center' }}>"Details about how to support/what money will go toward"</p>
        <div className="cards w3-padding-large w3-margin-top">
          <div className="card w3-card-2 w3-padding-large w3-border w3-border-black w3-round-large">
            <h3>INSERT DONATION COLLECTION LINK/QR CODE</h3>
            <div className="card-text">
              <p>
                Cash App, Venmo, PayPal, third party info, etc.   
                <a href="https://www.zeffy.com/home/online-donation-platform-nonprofits?utm_term=add%20donate%20button%20to%20website&utm_campaign=Donation+(US)&utm_source=adwords&utm_medium=ppc&hsa_acc=9293529013&hsa_cam=16005339303&hsa_grp=155323599310&hsa_ad=680928535813&hsa_src=g&hsa_tgt=kwd-443152138519&hsa_kw=add%20donate%20button%20to%20website&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwgdayBhBQEiwAXhMxtj6MePl_h-LE_VNhmMbZx4jBKsijeiKt_RSOIVEVL8utBGls58nJRhoCVF4QAvD_BwE" target="_blank" rel="noopener noreferrer">
                   Insert Link here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Support;