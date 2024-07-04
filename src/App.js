import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <>
      <h4 style={{ color: "#000F57" }}>ITEMS</h4>
      <table class="table">
        <thead >
          <tr >
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>No.</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Item</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Qty</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Rate</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Sub Total</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Tax Rate %</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Tax Rate</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row" style={{ color: '#000F57' }}>01</th>
            <td style={{ color: '#000F57' }}>Processor</td>
            <td style={{ color: '#000F57' }}>2</td>
            <td style={{ color: '#000F57' }}>5000.0</td>
            <td style={{ color: '#000F57' }}>10000.0</td>
            <td style={{ color: '#000F57' }}>14%</td>
            <td style={{ color: '#000F57' }}>700.0</td>
            <td style={{ color: '#000F57' }}>11400.0</td>
          </tr>
          <tr>
            <th scope="row" style={{ color: '#000F57' }}>02</th>
            <td style={{ color: '#000F57' }}>16GB Ram</td>
            <td style={{ color: '#000F57' }}>1</td>
            <td style={{ color: '#000F57' }}>1000.0</td>
            <td style={{ color: '#000F57' }}>10000.0</td>
            <td style={{ color: '#000F57' }}>14%</td>
            <td style={{ color: '#000F57' }}>140.0</td>
            <td style={{ color: '#000F57' }}> 1140.0</td>
          </tr>
          <tr>
            <th scope="row" style={{ color: '#000F57' }}>03</th>
            <td style={{ color: '#000F57' }} >Headphone</td>
            <td style={{ color: '#000F57' }}>1</td>
            <td style={{ color: '#000F57' }}>500.0</td>
            <td style={{ color: '#000F57' }}>500.0</td>
            <td style={{ color: '#000F57' }} >14%</td>
            <td style={{ color: '#000F57' }}>70.0</td>
            <td style={{ color: '#000F57' }}>570.0</td>
          </tr>
          <tr>
            <th scope="row" style={{ color: '#000F57' }}>04</th>
            <td style={{ color: '#000F57' }}>Switch</td>
            <td style={{ color: '#000F57' }}>3</td>
            <td style={{ color: '#000F57' }}>12000.0</td>
            <td style={{ color: '#000F57' }}>36000.0</td>
            <td style={{ color: '#000F57' }}>14%</td>
            <td style={{ color: '#000F57' }}>1680.0</td>
            <td style={{ color: '#000F57' }}>41040.0</td>
          </tr>
        </tbody>
        <thead style={{ marginLeft: "20%" }}>
          <tr>
            <th scope="col" style={{ color: 'white', border: 'none' }}></th>
            <th scope="col" style={{ color: 'white', border: 'none' }}></th>
            <th scope="col" style={{ color: 'white', border: 'none' }}></th>

            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Total w/out Tax</th>
            <th scope="col" colspan="2" style={{ color: 'white', backgroundColor: "#000F57" }}>47500.0</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Total w/Tax</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>54150.0</th>
          </tr>
        </thead>
      </table>
      <br></br>
      <br></br>

      <h4 style={{ color: "#000F57" }}>Purchase taxes and charges</h4>
      <table class="table">
        <thead >
          <tr >
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>No.</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Type</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Account Head</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Tax Rate %</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Amount</th>
            <th scope="col" style={{ color: 'white', backgroundColor: "#000F57" }}>Total</th>

          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row" style={{ color: '#000F57' }}>01</th>
            <td style={{ color: '#000F57' }}>on total without taxes</td>
            <td style={{ color: '#000F57' }}>ضريبة ارباح تجارية وصناعية</td>
            <td style={{ color: '#000F57' }}>1%</td>
            <td style={{ color: '#000F57' }}>475.0</td>
            <td style={{ color: '#000F57' }}>53675.0</td>

          </tr>



        </tbody>
        <thead  >

          <tr style={{}}>

            <th scope="col" style={{ color: '#000F57', border: "none" }}></th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}></th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}></th>
            <th scope="col" colspan="2" style={{ color: '#000F57', backgroundColor: '#E8E8E8' }}>Taxes and charges added</th>
            <th scope="col" style={{ color: '#000F57', backgroundColor: '#E8E8E8' }}>475.0  </th>

          </tr>
          <tr style={{}}>


            <th scope="col" style={{ color: '#000F57', border: "none" }}></th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}></th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}></th>
            <th scope="col" colspan="2" style={{ color: '#000F57', }}>Grand Total</th>
            <th scope="col" style={{ color: '#000F57', }}>53675.0</th>


          </tr>
          <tr style={{}}>



            <th scope="col" style={{ color: '#000F57', border: "none" }}> </th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}> </th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}> </th>
            <th scope="col" colspan="2" style={{ color: '#000F57', backgroundColor: '#E8E8E8' }}>دائن للمورد</th>
            <th scope="col" style={{ color: '#000F57', backgroundColor: '#E8E8E8' }}>53675.0</th>


          </tr>
          <tr style={{}}>


            <th scope="col" style={{ color: '#000F57', border: "none" }}> </th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}> </th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}> </th>
            <th scope="col" colspan="2" style={{ color: '#000F57', }}>دائن ضريبة</th>
            <th scope="col" style={{ color: '#000F57', }}>475.0</th>

          </tr>

          <tr style={{}}>


            <th scope="col" style={{ color: '#000F57', border: "none" }}>   </th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}>   </th>
            <th scope="col" style={{ color: '#000F57', border: "none" }}>   </th>
            <th scope="col" colspan="2" style={{ color: '#000F57', backgroundColor: '#E8E8E8' }}> اجمالي التكلفة مدين</th>
            <th scope="col" style={{ color: '#000F57', backgroundColor: '#E8E8E8' }}>54150.0</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default App;
