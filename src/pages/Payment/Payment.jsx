import React, {useState } from 'react'
import './Payment.css'



export default function Payment(){
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [creditCardDetails, setCreditCardDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [gopayDetails, setGopayDetails] = useState({ phoneNumber: '' });
  const [ovoDetails, setOvoDetails] = useState({ phoneNumber: '' });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e, method) => {
    const { name, value } = e.target;
    if (method === 'credit-card') {
      setCreditCardDetails({ ...creditCardDetails, [name]: value });
    } else if (method === 'gopay') {
      setGopayDetails({ ...gopayDetails, [name]: value });
    } else if (method === 'ovo') {
      setOvoDetails({ ...ovoDetails, [name]: value });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you would typically send the payment details to your backend or a payment gateway API
    
  //   alert(`Payment method: ${paymentMethod} submitted`);
  // };


  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert('You must agree to the payment terms before proceeding.');
      return;
    }
    // Proceed with form submission or payment processing
    console.log('Payment terms agreed. Proceeding with payment...');
  };



  return (
    <div className="App">
      <header className="payment-container">
        <h1>Payment Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="paymentMethod">Payment Method : </label>
            <div><select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="credit-card">Credit Card</option>
              <option value="gopay">GoPay</option>
              <option value="ovo">OVO</option>
            </select></div>
            
          </div>

          {paymentMethod === 'credit-card' && (
            <>
              <div>
                <label htmlFor="name">Name on Card : </label>
                <div>
                <input type="text" id="name" placeholder='Name on Card' name="name"  value={creditCardDetails.name}  onChange={(e) => handleInputChange(e, 'credit-card')}
                  required
                />
                </div>
                
              </div>
              <div>
                <label htmlFor="cardNumber">Card Number : </label>
                <div>
                <input type="text" id="cardNumber" placeholder='Card Number' name="cardNumber"  value={creditCardDetails.cardNumber}   onChange={(e) => handleInputChange(e, 'credit-card')}
                  required
                />
                </div>
                
              </div>
              <div>
                <label htmlFor="expiryDate">Expiry Date : </label>
                <div>
                <input type="text" id="expiryDate"  name="expiryDate" value={creditCardDetails.expiryDate} onChange={(e) => handleInputChange(e, 'credit-card')}  placeholder="MM/YY"
                  required
                />
                </div>
                
              </div>
              <div>
                <label htmlFor="cvv">CVV : </label>
                <div>
                <input type="text" id="cvv" placeholder='CVV'  name="cvv" value={creditCardDetails.cvv} onChange={(e) => handleInputChange(e, 'credit-card')}
                  required
                />
                </div>
                
              </div>
            </>
          )}

          {paymentMethod === 'gopay' && (
            <div>
              <label htmlFor="gopayPhoneNumber">GoPay Phone Number:</label>
              <input
                type="text"
                id="gopayPhoneNumber"
                name="phoneNumber"
                value={gopayDetails.phoneNumber}
                onChange={(e) => handleInputChange(e, 'gopay')}
                required
              />
            </div>
          )}

          {paymentMethod === 'ovo' && (
            <div>
              <label htmlFor="ovoPhoneNumber">OVO Phone Number:</label>
              <input
                type="text"
                id="ovoPhoneNumber"
                name="phoneNumber"
                value={ovoDetails.phoneNumber}
                onChange={(e) => handleInputChange(e, 'ovo')}
                required
              />
            </div>
          )}

          {/* <div className="payment-agree">
              <input type="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} required/>
              <p>By continuing, I agree to the payment agreement</p>
          </div>
          <button type="submit">Submit Payment</button> */}

        <div>
          <input 
            type="checkbox" 
            id="paymentAgreement" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          <label htmlFor="paymentAgreement">
              I agree to the payment terms and conditions
          </label>
        </div>
        <button class = "submit-btn" type="submit" disabled={!isChecked}>
          Submit Payment
        </button>
          
        </form>
      </header>
    </div>
  );
}